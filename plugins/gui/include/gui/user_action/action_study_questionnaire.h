#pragma once
#include "user_action.h"

namespace hal
{
    /**
     * @ingroup user_action
     */
    class ActionStudyQuestionnaire : public UserAction
    {
        QList<QString> mCheckedBoxes;
        QString mFurtherInformation;
    public:
        ActionStudyQuestionnaire(QStringList checkedBoxes_ = QStringList(), QString furtherInformation_ = QString());
        QString tagname() const override;
        void writeToXml(QXmlStreamWriter& xmlOut) const override;
        void readFromXml(QXmlStreamReader& xmlIn) override;
        void addToHash(QCryptographicHash& cryptoHash) const override;
    };

    /**
     * @ingroup user_action
     */
    class ActionStudyQuestionnaireFactory : public UserActionFactory
    {
    public:
        ActionStudyQuestionnaireFactory();
        UserAction* newAction() const;
        static ActionStudyQuestionnaireFactory* sFactory;
    };
}
