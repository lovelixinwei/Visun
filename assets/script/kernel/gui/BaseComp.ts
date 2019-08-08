import EventCenter from "../event/EventCenter";
import TimerManager from "../timer/TimerManager";


//---------------------------------
// 所有组建的父类
//---------------------------------

const {ccclass, property} = cc._decorator;

@ccclass
export default class BaseComp extends cc.Component {
    onDestroy() {
        EventCenter.instance().removeByTarget(this);
        TimerManager.instance().removeByTarget(this);
    }
}
