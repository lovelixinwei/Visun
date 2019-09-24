import BaseComponent from "../../../kernel/view/BaseComponent";
import CommonUtil from "../../../kernel/utils/CommonUtil";
import User from "../model/User";


const {ccclass, property} = cc._decorator;

@ccclass
export default class HeroUI extends BaseComponent {

    @property(cc.Label)
    label_name: cc.Label = null;
    @property(cc.Label)
    label_id: cc.Label = null;

    public userId:number = 0;

    onLoad () {
        CommonUtil.addClickEvent(this.node, function(){ cc.log("click hero head"); }, this);
    }

    public setUserInfo(userObj:User) {
        this.userId = userObj.userId;
        this.label_name.string = userObj.nickname + " | 金币：" + userObj.coin;
        this.label_id.string = userObj.userId.toString();
    }
}
