#include "gui/user_action/user_action_manager.h"
#include <QFile>
#include <QMetaEnum>
#include <QDebug>
#include <QThread>
#include <QCoreApplication>
#include <QDateTime>
#include "gui/user_action/user_action.h"
#include "gui/user_action/user_action_compound.h"
#include "gui/user_action/action_open_netlist_file.h"
#include "gui/user_action/action_unfold_module.h"
#include "gui/settings/settings_items/settings_item_checkbox.h"
#include "hal_core/utilities/log.h"
#include <QTextCursor>

namespace hal
{
    UserActionManager* UserActionManager::inst = nullptr;

    UserActionManager::UserActionManager(QObject *parent)
        : QObject(parent), mStartRecording(-1),
          mWaitCount(0), mNextSingleStep(-1),
          mRecordHashAttribute(true),
          mExecutingMacro(false),
          mDumpAction(nullptr)
    {
        mElapsedTime.start();
        mSettingDumpAction = new SettingsItemCheckbox(
            "UserAction Debug",
            "debug/user_action",
            false,
            "eXpert Settings:Debug",
            "Specifies whether hal opens an extra window to list all executed instances of UserAction"
        );
        connect(mSettingDumpAction,&SettingsItemCheckbox::boolChanged,this,&UserActionManager::handleSettingDumpActionChanged);
    }

    void UserActionManager::handleSettingDumpActionChanged(bool wantDump)
    {
        if (!wantDump && mDumpAction)
        {
            mDumpAction->deleteLater();
            mDumpAction = nullptr;
        }
    }

    void UserActionManager::addExecutedAction(UserAction* act)
    {      
        if (isUserTriggeredAction())
        {
            if (mNextSingleStep >= 0)
                endSingleStepMode();
            mActionHistory.append(act);
        }

        if (mSettingDumpAction->value().toBool())
        {
            if (!mDumpAction)
            {
                mDumpAction = new QPlainTextEdit;
                mDumpAction->show();
            }

            mDumpAction->moveCursor (QTextCursor::End);
            mDumpAction->insertPlainText(act->debugDump());
            mDumpAction->moveCursor(QTextCursor::End);
        }
        testUndo();
    }

    void UserActionManager::setStartRecording()
    {
        mStartRecording = mActionHistory.size();
    }

    void UserActionManager::crashDump(int sig)
    {
        mStartRecording = 0;
        mRecordHashAttribute = false;
        setStopRecording(QString("hal_crashdump_signal%1.xml").arg(sig));
    }

    void UserActionManager::saveUserActionsMacro()
    {
        QString timeFormat = "yyyy-MM-dd_HH-mm-ss";
        QDateTime currentTime = QDateTime::currentDateTime();
        QString currentTimeString = currentTime.toString(timeFormat);

        mStartRecording = 0;
        mRecordHashAttribute = true;
        setStopRecording(QString("hal_study_%1.xml").arg(currentTimeString));
    }

    void UserActionManager::setStopRecording(const QString& macroFilename)
    {
        int n = mActionHistory.size();
        if (n>mStartRecording && !macroFilename.isEmpty())
        {
            QFile of(macroFilename);
            if (of.open(QIODevice::WriteOnly))
            {
                QXmlStreamWriter xmlOut(&of);
                xmlOut.setAutoFormatting(true);
                xmlOut.writeStartDocument();
                xmlOut.writeStartElement("actions");

                for (int i=mStartRecording; i<n; i++)
                {
                    const UserAction* act = mActionHistory.at(i);
                    xmlOut.writeStartElement(act->tagname());
                    // TODO : enable / disable timestamp and crypto hash by user option ?
                    xmlOut.writeAttribute("ts",QString::number(act->timeStamp()));
                    if (mRecordHashAttribute)
                        xmlOut.writeAttribute("sha",act->cryptographicHash(i-mStartRecording));
                    if (act->compoundOrder() >= 0)
                        xmlOut.writeAttribute("compound",QString::number(act->compoundOrder()));
                    act->object().writeToXml(xmlOut);
                    act->writeToXml(xmlOut);
                    xmlOut.writeEndElement();
                }
                xmlOut.writeEndElement();
                xmlOut.writeEndDocument();
            }
        }
        mStartRecording = -1;
    }

    void UserActionManager::endSingleStepMode()
    {
        mNextSingleStep = -1;
        Q_EMIT(canExecuteMacroStep(false));
    }

    void UserActionManager::nextMacroStep()
    {
        if (mNextSingleStep < 0) return;

        mExecutingMacro = true;
        UserAction* act = mActionHistory.at(mNextSingleStep);
        if (!act->exec())
        {
            log_warning("gui", "failed to execute user action {}", act->tagname().toStdString());
            endSingleStepMode();
            mExecutingMacro = false;
            return;
        }
        if (act->isWaitForReady()) mWaitCount=100;
        while (mWaitCount > 0)
        {
            --mWaitCount;
            QCoreApplication::processEvents();
            QThread::msleep(10);
        }
        if (++mNextSingleStep >= mActionHistory.size())
            endSingleStepMode();
        mExecutingMacro = false;
    }

    void UserActionManager::loadMacro(const QString& macroFilename)
    {
        if (!loadMacroInternal(macroFilename)) return;
        if (mStartRecording >= 0)
        {
            mNextSingleStep = mStartRecording;
            mStartRecording = -1;
            Q_EMIT(canExecuteMacroStep(true));
        }
    }

    void UserActionManager::playMacro(const QString& macroFilename)
    {
        if (!loadMacroInternal(macroFilename)) return;
        int endMacro = mActionHistory.size();
        mExecutingMacro = true;
        for (int i=mStartRecording; i<endMacro; i++)
        {
            UserAction* act = mActionHistory.at(i);
            if (!act->exec())
            {
                log_warning("gui", "failed to execute user action {}", act->tagname().toStdString());
                break;
            }
            if (act->isWaitForReady()) mWaitCount=100;
            while (mWaitCount > 0)
            {
                --mWaitCount;
                QCoreApplication::processEvents();
                QThread::msleep(10);
            }
        }
        mExecutingMacro = false;
        mStartRecording = -1;
    }

    bool UserActionManager::loadMacroInternal(const QString &macroFilename)
    {
        QFile ff(macroFilename);
        bool parseActions = false;
        if (!ff.open(QIODevice::ReadOnly)) return false;
        QXmlStreamReader xmlIn(&ff);
        mStartRecording = mActionHistory.size();
        while (!xmlIn.atEnd())
        {
            if (xmlIn.readNext())
            {
                if (xmlIn.isStartElement())
                {
                    qDebug() << "startElement" << xmlIn.name() << parseActions;
                    if (xmlIn.name() == "actions")
                        parseActions = true;
                    else if (parseActions)
                    {
                        UserAction* act = getParsedAction(xmlIn);
                        if (act) mActionHistory.append(act);
                    }
                }
                else if (xmlIn.isEndElement())
                {
                    if (xmlIn.name() == "actions")
                        parseActions = false;
                }
            }
        }

        return !xmlIn.hasError();             // TODO : error message

    }

    UserAction* UserActionManager::getParsedAction(QXmlStreamReader& xmlIn) const
    {
        QString actionTagName = xmlIn.name().toString();

        UserActionFactory* fac = mActionFactory.value(actionTagName);
        if (!fac)
        {
            qDebug() << "cannot parse user action" << actionTagName;
            return nullptr;
        }
        UserAction* retval = fac->newAction();
        if (retval)
        {
            QStringRef compound = xmlIn.attributes().value("compound");
            if (!compound.isNull() && !compound.isEmpty())
                retval->setCompoundOrder(compound.toInt());
            UserActionObject actObj;
            actObj.readFromXml(xmlIn);
            retval->setObject(actObj);
            retval->readFromXml(xmlIn);
        }

        return retval;
    }

    bool UserActionManager::hasRecorded() const
    {
        return isRecording() && mActionHistory.size() > mStartRecording;
    }

    bool UserActionManager::isRecording() const
    {
        return mStartRecording >= 0;
    }

    void UserActionManager::registerFactory(UserActionFactory* fac)
    {
        mActionFactory.insert(fac->tagname(),fac);
    }

    UserActionManager* UserActionManager::instance()
    {
        if (!inst) inst = new UserActionManager;
        return inst;
    }

    void UserActionManager::testUndo()
    {
        bool yesWeCan = true;
        if (mActionHistory.isEmpty())
            yesWeCan = false;
        else
        {
            auto it = mActionHistory.end() - 1;
            // compound can be reversed only if all actions have undo pointer
            while (it != mActionHistory.begin() &&
                   (*it)->undoAction() &&
                   (*it)->compoundOrder() > 0)
                --it;
            if (!(*it)->undoAction())
                yesWeCan = false;
        }
        Q_EMIT canUndoLastAction(yesWeCan);
    }

    void UserActionManager::undoLastAction()
    {
        if (mActionHistory.isEmpty()) return;
        QList<UserAction*> undoList;
        while (!mActionHistory.isEmpty())
        {
            UserAction* lastAction = mActionHistory.takeLast();
            if (!lastAction->undoAction())
                return;

            undoList.append(lastAction->undoAction());
            if (lastAction->compoundOrder() <= 0) break;
        }
        mExecutingUndo = true;
        for (UserAction* act : undoList)
            act->exec();
        mExecutingUndo = false;
        testUndo();
    }

    bool UserActionManager::isUserTriggeredAction() const
    {
        if(mExecutingMacro || mExecutingUndo) {
            return false;
        }
        return true;
    }
}
