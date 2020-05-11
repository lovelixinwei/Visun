import BaseComponent from "../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../kernel/utils/CommonUtil";
import { isEmpty } from "../../../../kernel/utils/GlobalFuncs";
import UIManager from "../../../../kernel/view/UIManager";
import { chat_request, chat_msgs } from "../../../../common/script/proto/net_chat";
import EventCenter from "../../../../kernel/basic/event/EventCenter";
import LoginUser from "../../../../common/script/model/LoginUser";
import ViewDefine from "../../../../common/script/definer/ViewDefine";


const {ccclass, property} = cc._decorator;

@ccclass
export default class UIChat extends BaseComponent {
    @property(cc.EditBox)
    editcont: cc.EditBox = null;

    @property(cc.Prefab)
    ChatItemL: cc.Prefab = null;
    @property(cc.Prefab)
    ChatItemR: cc.Prefab = null;

    start () {
        CommonUtil.traverseNodes(this.node, this.m_ui);
        
        this.initUIEvent();
        
        EventCenter.getInstance().listen(chat_msgs.GroupChatResp, this.GroupChatResp, this);
        EventCenter.getInstance().listen(chat_msgs.PrivateChatResp, this.PrivateChatResp, this);
    }

    initUIEvent() {
        CommonUtil.addClickEvent(this.m_ui.btn_send, function(){
            var cont = this.editcont.string;
            if(isEmpty(cont)) {
                UIManager.toast("请输入聊天内容");
                return;
            }
            chat_request.GroupChat({
                Type: 0,
                GroupId: 0,
                Content: cont,
            });
        }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_fhb, function(){
            UIManager.openPopwnd(ViewDefine.UIEnvelopeSend, false, null);
        }, this);
    }

    GroupChatResp(param) {
        this.onChatMsg(param.SenderID, param.Content, "", "");
    }

    PrivateChatResp(param) {
        this.onChatMsg(param.SenderID, param.Content, "", "");
    }

    onChatMsg(uid:number, cont:string, name:string, headImg:string) {
        if(isEmpty(name)) {
            name = uid.toString();
        }
        var item = null;
        if(uid==LoginUser.getInstance().UserID){
            item = cc.instantiate(this.ChatItemR);
        } else {
            item = cc.instantiate(this.ChatItemL);
        }
        var labCont = item.getChildByName("Content");
        item.getChildByName("labName").getComponent(cc.Label).string = name;
        labCont.getComponent(cc.RichText).string = cont;
        this.m_ui.content.addChild(item);
        item.height = 8 + labCont.height - labCont.y * labCont.anchorY;
        this.m_ui.scrollview.getComponent(cc.ScrollView).scrollToBottom(0.1);
    }

}
