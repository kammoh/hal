#include "gui/user_action/user_action_object.h"
#include "gui/selection_relay/selection_relay.h"
#include <QMetaEnum>

namespace hal {
    UserActionObjectType::ObjectType UserActionObjectType::fromString(const QString& s)
    {
        QMetaEnum me = QMetaEnum::fromType<ObjectType>();
        for (int t = None; t < MaxObjectType; t++)
            if (s == me.key(t))
                return static_cast<ObjectType>(t);
        return None;
    }

    QString UserActionObjectType::toString(ObjectType t)
    {
        QMetaEnum me = QMetaEnum::fromType<ObjectType>();
        return QString(me.key(t));
    }

    UserActionObjectType::ObjectType UserActionObjectType::fromItemType(SelectionRelay::ItemType itp)
    {
        ObjectType retval = None;
        switch (itp)
        {
        case SelectionRelay::ItemType::Module: retval = Module; break;
        case SelectionRelay::ItemType::Gate:   retval = Gate;   break;
        case SelectionRelay::ItemType::Net:    retval = Net;    break;
        default:                                                break;
        }
        return retval;
    }

    SelectionRelay::ItemType UserActionObjectType::toItemType(UserActionObjectType::ObjectType t)
    {
        SelectionRelay::ItemType retval = SelectionRelay::ItemType::None;
        switch (t)
        {
        case Module: retval = SelectionRelay::ItemType::Module; break;
        case Gate:   retval = SelectionRelay::ItemType::Gate;   break;
        case Net:    retval = SelectionRelay::ItemType::Net;    break;
        default:                                                break;
        }
        return retval;
    }

    UserActionObjectType::ObjectType UserActionObjectType::fromNodeType(Node::NodeType ntp)
    {
        ObjectType retval = None;
        switch (ntp)
        {
        case Node::Module: retval = Module; break;
        case Node::Gate:   retval = Gate;   break;
        default:                            break;
        }
        return retval;
    }

    Node::NodeType UserActionObjectType::toNodeType(UserActionObjectType::ObjectType t)
    {
        Node::NodeType retval = Node::None;
        switch (t)
        {
        case Module: retval = Node::Module; break;
        case Gate:   retval = Node::Gate;   break;
        default:                                                break;
        }
        return retval;
    }

    QString UserActionObject::debugDump() const
    {
        if (mType==UserActionObjectType::None) return QString(" \t-");
        // None, Module, Gate, Net, Grouping, Netlist, Context
        const char* cType = "-mgn{Lx";
        return QString(" \t%1%2%3").arg(cType[mType]).arg(mId)
                .arg(mType==UserActionObjectType::Grouping? "}" : "");
    }

    void UserActionObject::writeToXml(QXmlStreamWriter& xmlOut) const
    {
        if (mType==UserActionObjectType::None) return;
        xmlOut.writeAttribute("id", QString::number(mId));
        xmlOut.writeAttribute("type",UserActionObjectType::toString(mType));
    }

    void UserActionObject::readFromXml(QXmlStreamReader& xmlIn)
    {
        QStringRef srId = xmlIn.attributes().value("id");
        if (srId.isNull() || srId.isEmpty()) return;
        QStringRef srTp = xmlIn.attributes().value("type");
        if (srTp.isNull() || srTp.isEmpty()) return;
        bool ok = false;
        mId = srId.toInt(&ok);
        if (!ok) return;
        mType = UserActionObjectType::fromString(srTp.toString());
    }
}
