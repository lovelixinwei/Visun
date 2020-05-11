import BaseComponent from "../../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import GameManager from "../../../../../common/script/model/GameManager";
import LoginUser from "../../../../../common/script/model/LoginUser";
import { isNil, newHandler } from "../../../../../kernel/utils/GlobalFuncs";
import UIManager from "../../../../../kernel/view/UIManager";
import EventCenter from "../../../../../kernel/basic/event/EventCenter";
import DDzMgr from "../model/DDzMgr";
import { landLords_msgs, landLords_request } from "../../../../../common/script/proto/net_landLords";
import { gamecomm_msgs, gamecomm_request } from "../../../../../common/script/proto/net_gamecomm";
import DdzPlayer from "../model/DdzPlayer";
import TimerManager from "../../../../../kernel/basic/timer/TimerManager";
import CpnHandcard from "../../../../appqp/script/comps/CpnHandcard";
import CpnPlayer1 from "../../../../appqp/script/comps/CpnPlayer1";
import CpnCircleCD from "../../../../appqp/script/comps/CpnCircleCD";

const MAX_SOLDIER = 3;

const {ccclass, property} = cc._decorator;

@ccclass
export default class DdzUI extends BaseComponent {
    private _myHandor:CpnHandcard;
    private _players:Array<CpnPlayer1> = [];
    private _outs:Array<CpnHandcard> = [];
    
    start () {
        CommonUtil.traverseNodes(this.node, this.m_ui);
        
        this._myHandor = this.m_ui.my_handor.getComponent(CpnHandcard);
        for(var i=0; i<MAX_SOLDIER; i++) {
            this._players.push(this.m_ui["player"+i].getComponent(CpnPlayer1));
            this._outs.push(this.m_ui["outs"+i].getComponent(CpnHandcard));
            this._players[i].setName("");
            this._players[i].setMoneyStr("");
        }
        this._players[0].setName(LoginUser.getInstance().Name);
        this._players[0].setMoney(LoginUser.getInstance().getMoney());

        this.initNetEvent();
        this.initUIEvent();
        this._myHandor.initSlideTouch();
        
        this.refreshPlayers();
        this.toStateReady();
        
        var EnterData = DDzMgr.getInstance().EnterData;
        if(EnterData) {
            this._myHandor.resetCards(DDzMgr.getInstance().getPlayer(LoginUser.getInstance().UserID).Cards, false);
            this._myHandor.sortCards();
            this.refreshCurAttacker();
            this.refreshRemainCardCount(true);

            if(EnterData.GameStateFree) {
                this.toStateSearching();
            }
            else if(EnterData.GameStateStart) {
                this.toStateReady();
            }
            else if(EnterData.GameStateCall) {
                this.toStateGrab();
                this.refreshCurAttacker();
            }
            else if(EnterData.GameStatePlaying) {
                this.toStateFight();
                this.refreshCurAttacker();
            }
            else if(EnterData.GameStateOver) {
                this.toStateResult();
            }
        }
    }


    //玩家的UI位置
    private playerIndex(player:DdzPlayer) : number {
		if(isNil(player)){ return -1; }
		var hero = DDzMgr.getInstance().getPlayer(LoginUser.getInstance().UserID);
		if(hero.ChairID===1) { return player.ChairID-1; }
		return (player.ChairID-hero.ChairID+MAX_SOLDIER) % MAX_SOLDIER;
    }

    
    //匹配阶段
    private toStateSearching() {
        this.m_ui.readyNode.active = true;
        this.m_ui.grabNode.active = false;
        this.m_ui.fightNode.active = false;
        this.m_ui.tipLayer.active = false;
        this._myHandor.clearCards();
        for(var i in this._outs) {
            this._outs[i].clearCards();
        }
        DDzMgr.getInstance().resetStates();
        DDzMgr.getInstance().setCurAttacker(0);
        this.refreshCurAttacker();
        this.refreshTuoguan();
        this.refreshZhuang(false);
        this.refreshRemainCardCount(false);
        this.m_ui.btn_double.active = false;
    }
    
    //准备阶段
    private toStateReady() {
        this.m_ui.readyNode.active = true;
        this.m_ui.grabNode.active = false;
        this.m_ui.fightNode.active = false;
        this.m_ui.tipLayer.active = false;
        this._myHandor.clearCards();
        for(var i in this._outs) {
            this._outs[i].clearCards();
        }
        this.m_ui.labGrab0.getComponent(cc.Label).string = "";
        this.m_ui.labGrab1.getComponent(cc.Label).string = "";
        this.m_ui.labGrab2.getComponent(cc.Label).string = "";
        DDzMgr.getInstance().resetStates();
        this.refreshTuoguan();
        DDzMgr.getInstance().setCurAttacker(0);
        this.refreshCurAttacker();
        this.refreshZhuang(false);
        this.refreshRemainCardCount(false);
        this.m_ui.btn_double.active = false;
    }

    //抢地主阶段
    private toStateGrab() {
        var curFighter = DDzMgr.getInstance().getCurAttacker();
        if(!curFighter) {
            cc.warn("bug 获取当前操作者失败");
        }
        this.m_ui.readyNode.active = false;
        this.m_ui.grabNode.active = curFighter && (curFighter.UserID == LoginUser.getInstance().UserID);
        this.m_ui.fightNode.active = false;
        this.m_ui.tipLayer.active = false;
        DDzMgr.getInstance().resetStates();
        this.refreshTuoguan();
        this.refreshZhuang(false);
        this.refreshRemainCardCount(false);
        this.m_ui.btn_double.active = true;
    }

    //出牌阶段
    private toStateFight() {
        var curFighter = DDzMgr.getInstance().getCurAttacker();
        if(!curFighter) {
            cc.warn("bug 获取当前操作者失败");
        }
        this.m_ui.readyNode.active = false;
        this.m_ui.grabNode.active = false;
        this.m_ui.fightNode.active = curFighter && (curFighter.UserID == LoginUser.getInstance().UserID);
        this.m_ui.tipLayer.active = true;
        this.m_ui.labGrab0.getComponent(cc.Label).string = "";
        this.m_ui.labGrab1.getComponent(cc.Label).string = "";
        this.m_ui.labGrab2.getComponent(cc.Label).string = "";
        this.refreshZhuang(true);
        this.refreshRemainCardCount(true);
        this.m_ui.btn_double.active = false;
    }

    //结算阶段
    private toStateResult() {
        this.m_ui.readyNode.active = false;
        this.m_ui.grabNode.active = false;
        this.m_ui.fightNode.active = false;
        this.m_ui.tipLayer.active = true;
        this.m_ui.labGrab0.getComponent(cc.Label).string = "";
        this.m_ui.labGrab1.getComponent(cc.Label).string = "";
        this.m_ui.labGrab2.getComponent(cc.Label).string = "";
        DDzMgr.getInstance().resetStates();
        this.refreshTuoguan();
        this.refreshZhuang(true);
        this.refreshRemainCardCount(true);
        this.m_ui.btn_double.active = false;
        TimerManager.delaySecond(2, newHandler(function(){ this.m_ui.readyNode.active = true; }, this))
    }

    private refreshRemainCardCount(bShow:boolean) {
        this.m_ui.remainBg1.active = bShow;
        this.m_ui.lab_remain1.active = bShow;
        this.m_ui.remainBg2.active = bShow;
        this.m_ui.lab_remain2.active = bShow;

        if(!bShow) { return; }

        var fighters = DDzMgr.getInstance().getFighterList();
        for(var uid in fighters) {
            var idx = this.playerIndex(fighters[uid]);
            if(idx > 0) {
                this.m_ui["lab_remain"+idx].getComponent(cc.Label).string = fighters[uid].CardsLen.toString();
            }
        }
    }
    
    private refreshPlayers() {
        for(var ii=0; ii<MAX_SOLDIER; ii++) {
            this._players[ii].setName("");
            this._players[ii].setMoneyStr("");
        }
        var players = DDzMgr.getInstance().getFighterList();
        for(var i in players) {
            if(!isNil(players[i])) {
                var idx = this.playerIndex(players[i]);
                this._players[idx].setName(players[i].Name);
                this._players[idx].setMoney(players[i].Gold);
            }
        }
    }

    private refreshZhuang(bShow:boolean) {
        var idx = this.playerIndex(DDzMgr.getInstance().getZhuang());
        this.m_ui.zhuang.active = idx >= 0 && bShow;
        if(idx>=0) {
            var pos = this._players[idx].node.position;
            pos.x += 40;
            pos.y += 62;
            this.m_ui.zhuang.position = pos;
        }
    }

    private refreshTuoguan() {
        for(var n = 0; n<3; n++) {
            this.m_ui["lab_tuoguan"+n].active = false;
        }
        var players = DDzMgr.getInstance().getFighterList();
        for(var i in players) {
            if(!isNil(players[i])) {
                var idx = this.playerIndex(players[i]);
                this.m_ui["lab_tuoguan"+idx].active = players[i].IsTrustee;
            } else {
                this.m_ui["lab_tuoguan"+idx].active = false;
            }
        }
        var hero = DDzMgr.getInstance().getPlayer(LoginUser.getInstance().UserID);
        if(hero) {
            this.m_ui.lab_auto.getComponent(cc.Label).string = hero.IsTrustee && "取消托管" || "托 管";
        }
    }

    private refreshCurAttacker() {
        var MAX_PLAYER = 3;
        var curAttackerIdx = this.playerIndex(DDzMgr.getInstance().getCurAttacker());
        for(var idx=0; idx<MAX_PLAYER; idx++) {
			this.m_ui["CpnCircleCD"+idx].active = idx===curAttackerIdx;
        }
        if(this.m_ui["CpnCircleCD"+curAttackerIdx]) {
            this.m_ui["CpnCircleCD"+curAttackerIdx].getComponent(CpnCircleCD).setRemainCD(15, 15);
        }
    }


    private GameLandLordsPlayer(param) {
        this._myHandor.resetCards(param.Cards, false);
        this._myHandor.sortCards();
    }
    private GameLandLordsOutCard(param) {
        this.toStateFight();
        if(isNil(param)) {
            return;
        }

        var p = DDzMgr.getInstance().getPlayer(param.UserID);
        if(!p){
            UIManager.toast("bug：找不到玩家 "+param.UserID);
            return;
        }
        p.CardsLen -= param.Cards.length;

        var idx = this.playerIndex(p);
        if(idx>=0) {
            this._outs[idx].resetCards(param.Cards, false);
            if(param.UserID === LoginUser.getInstance().UserID) {
                this._myHandor.delCards(param.Cards);
            }
            if(isNil(param.Cards) || param.Cards.length<=0) {
                UIManager.toast(p.Name+" 不要")
            }
        } else {
            UIManager.toast("bug：找不到玩家UI "+param.UserID);
        }

        this.refreshRemainCardCount(true);

        var nextPos = DDzMgr.nextPos(p.ChairID);
        var nextAttacker = DDzMgr.getInstance().getPlayerByPos(nextPos);
        cc.log("--------", p.ChairID, nextPos, nextAttacker);
        if(nextAttacker) {
            DDzMgr.getInstance().setCurAttacker(nextAttacker.UserID);
        } else {
            cc.log("客户端bug：计算下一个操作者失败", nextPos, nextAttacker);
        }
        this.toStateFight();
        this.refreshCurAttacker();
    }
    private GameLandLordsDeal(param) {
        this._myHandor.resetCards(param.CardsHand, false);
    }
    private GameLandLordsCheckout(param) {
        this.toStateResult();
        if(isNil(param)) { return; }
        for(var i in param.players) {
            var p = param.players[i];
            var idx = this.playerIndex(DDzMgr.getInstance().getPlayer(p.UserID));
            this.m_ui["player"+idx].getComponent(CpnPlayer1).addMoney(p.GetGold);
            if(p.GetGold > 0) {
                UIManager.showSpineAsync("common/spines/headflower/ky_lhd_js", 0, "1", 3, this._players[idx].node, {scale:1.1, y:19}, null);
            }
        }
    }
    private GameStateCall(param) {
        DDzMgr.getInstance().setCurAttacker(param.UserID);
        this.toStateGrab();
        this.refreshCurAttacker();
    }
    private GameLandLordsCall(param) {
        var p = DDzMgr.getInstance().getPlayer(param.UserID);
        if(!p){
            UIManager.toast("bug：找不到玩家 "+param.UserID);
            return;
        }
        var idx = this.playerIndex(p);
        if(this.m_ui["labGrab"+idx]) {
            this.m_ui["labGrab"+idx].getComponent(cc.Label).string = param.Score;
        }

        var nextPos = DDzMgr.nextPos(p.ChairID);
        var nextAttacker = DDzMgr.getInstance().getPlayerByPos(nextPos);
        cc.log("--------", p.ChairID, nextPos, nextAttacker);
        if(nextAttacker) {
            DDzMgr.getInstance().setCurAttacker(nextAttacker.UserID);
        } else {
            cc.log("客户端bug：计算下一个操作者失败", nextPos, nextAttacker);
        }

        this.toStateGrab();
        this.refreshCurAttacker();
    }
    private GameLandLordsBottomCard(param) {
        DDzMgr.getInstance().setCurAttacker(param.UserID);
        DDzMgr.getInstance().setZhuang(param.UserID);
        if(param.UserID == LoginUser.getInstance().UserID) {
            this._myHandor.addCards(param.CardsBottom);
            this._myHandor.sortCards();
        }
        this.m_ui.dipai.getComponent(CpnHandcard).resetCards(param.CardsBottom, false); 
        this.toStateFight();
        this.refreshCurAttacker();
        this.refreshZhuang(true);

        var fighters = DDzMgr.getInstance().getFighterList();
        for(var uid in fighters) {
            fighters[uid].CardsLen = 17;
        }
        fighters[param.UserID].CardsLen = 20;
        this.refreshRemainCardCount(true);
    }
    private onUserList(param) {
        DDzMgr.getInstance().updateFighterList(param && param.AllInfos);
        this.refreshPlayers();
    }
    private GameBeOut(param) {
        DDzMgr.getInstance().removePlayer(param.UserID);

        if(param.UserID == LoginUser.getInstance().UserID) {
            GameManager.getInstance().quitGame(true);
        }

        UIManager.toast("玩家被踢出房间"+param.UserID);
    }
    private initNetEvent() {
        EventCenter.getInstance().listen(landLords_msgs.GameLandLordsPlayer, this.GameLandLordsPlayer, this);
        EventCenter.getInstance().listen(landLords_msgs.GameLandLordsOutCard, this.GameLandLordsOutCard, this);
        EventCenter.getInstance().listen(landLords_msgs.GameLandLordsDeal, this.GameLandLordsDeal, this);
        EventCenter.getInstance().listen(landLords_msgs.GameLandLordsCheckout, this.GameLandLordsCheckout, this);
        EventCenter.getInstance().listen(landLords_msgs.GameLandLordsCall, this.GameLandLordsCall, this);
        EventCenter.getInstance().listen(landLords_msgs.GameLandLordsBottomCard, this.GameLandLordsBottomCard, this);
        EventCenter.getInstance().listen(gamecomm_msgs.UserList, this.onUserList, this);
        EventCenter.getInstance().listen(gamecomm_msgs.GameBeOut, this.GameBeOut, this);
        EventCenter.getInstance().listen(gamecomm_msgs.GameStateCall, this.GameStateCall, this);
        EventCenter.getInstance().listen(landLords_msgs.GameLandLordsTrustee, function(param){
            var p = DDzMgr.getInstance().getPlayer(param.UserID);
            if(p) {
                p.IsTrustee = param.IsTrustee;
            }
            this.refreshTuoguan();
        }, this);
        EventCenter.getInstance().listen(landLords_msgs.GameLandLordsDouble, function(param){
            UIManager.toast("玩家加倍 UserID: "+param.UserID);
        }, this);
        EventCenter.getInstance().listen(gamecomm_msgs.GameReady, function(param){
            if(param.UserID==LoginUser.getInstance().UserID) {
                this.m_ui.readyNode.active = false;
            }
        }, this);
    }

    private initUIEvent() {
        CommonUtil.addClickEvent(this.m_ui.btn_close, function(){ 
            DDzMgr.getInstance().clearFighters();
            GameManager.getInstance().quitGame();
        }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_ready, function(){ 
            gamecomm_request.GameReady({
                UserID:LoginUser.getInstance().UserID,
                IsReady:true
            });
        }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_chgdesk, function(){ 
            gamecomm_request.ReqChangeTable({
                GameID : GameManager.getInstance().getGameId()
            });
        }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_out, function(){ 
            landLords_request.GameLandLordsOutCard({
                UserID:LoginUser.getInstance().UserID,
                Cards: this._myHandor.getSelectedCards(),
                Hints:"",
            });
        }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_pass, function(){ 
            landLords_request.GameLandLordsOutCard({
                UserID:LoginUser.getInstance().UserID,
                Cards: [],
                Hints:"",
            });
        }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_score0, function(){ 
            landLords_request.GameLandLordsCall({
                UserID:LoginUser.getInstance().UserID,
                Score:0
            });
        }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_score1, function(){ 
            landLords_request.GameLandLordsCall({
                UserID:LoginUser.getInstance().UserID,
                Score:1
            });
        }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_score2, function(){ 
            landLords_request.GameLandLordsCall({
                UserID:LoginUser.getInstance().UserID,
                Score:2
            });
        }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_score3, function(){ 
            landLords_request.GameLandLordsCall({
                UserID:LoginUser.getInstance().UserID,
                Score:3
            });
        }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_double, function(){ 
            landLords_request.GameLandLordsDouble({
                UserID:LoginUser.getInstance().UserID,
                Number:2
            });
        }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_auto, function(){ 
            var hero = DDzMgr.getInstance().getPlayer(LoginUser.getInstance().UserID);
            if(!hero) {
                cc.warn("hero is nil");
                return;
            }
            landLords_request.GameLandLordsTrustee({
                UserID:LoginUser.getInstance().UserID,
                IsTrustee: hero.IsTrustee
            });
        }, this);
    }

}
