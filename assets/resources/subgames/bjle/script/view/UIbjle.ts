import BaseComponent from "../../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import GameManager from "../../../../../common/script/model/GameManager";
import ViewDefine from "../../../../../common/script/definer/ViewDefine";
import { BaseTimer } from "../../../../../kernel/basic/timer/BaseTimer";
import TimerManager from "../../../../../kernel/basic/timer/TimerManager";
import CHandler from "../../../../../kernel/basic/datastruct/CHandler";
import AudioManager from "../../../../../kernel/audio/AudioManager";
import GameUtil from "../../../../../common/script/utils/GameUtil";
import CpnChip from "../../../../appqp/script/comps/CpnChip";
import UIManager from "../../../../../kernel/view/UIManager";
import CpnChipbox2d from "../../../../appqp/script/comps/CpnChipbox2d";
import { baccarat_request, baccarat_msgs } from "../../../../../common/script/proto/net_baccarat";
import BjleMgr from "../model/BjleMgr";
import LoginUser from "../../../../../common/script/model/LoginUser";
import ResPool from "../../../../../kernel/basic/pool/ResPool";
import ProcessorMgr from "../../../../../kernel/net/processor/ProcessorMgr";
import ChannelDefine from "../../../../../common/script/definer/ChannelDefine";
import EventCenter from "../../../../../kernel/basic/event/EventCenter";
import { gamecomm_msgs } from "../../../../../common/script/proto/net_gamecomm";
import { gamecomm } from "../../../../../../declares/gamecomm";
import { isEmpty, isNil } from "../../../../../kernel/utils/GlobalFuncs";
import { baccarat } from "../../../../../../declares/baccarat";
import CpnGameState from "../../../../appqp/script/comps/CpnGameState";
import CpnHandcard from "../../../../appqp/script/comps/CpnHandcard";

const AREA_XIAN        = 0 //闲家
const AREA_PING        = 1 //平家
const AREA_ZHUANG      = 2 //庄家
const AREA_XIAN_TIAN   = 3 //闲天王
const AREA_ZHUANG_TIAN = 4 //庄天王
const AREA_TONG_DUI    = 5 //同点平
const AREA_XIAN_DUI    = 6 //闲对子
const AREA_ZHUANG_DUI  = 7 //庄对子

var margin = [
	{ left:40,right:40,bottom:25,top:25 },
	{ left:40,right:40,bottom:25,top:25 },
	{ left:40,right:40,bottom:25,top:25 },
	{ left:80,right:80,bottom:90,top:90 },
	{ left:80,right:80,bottom:90,top:90 },
];

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIbjle extends BaseComponent {
	_rule:number[] = [5,10,50,100,500];
	private tmrState = 0;
	private isJoined = false;
	private areaToNode = [];

	onLoad () {
		CommonUtil.traverseNodes(this.node, this.m_ui);

		this.areaToNode[0] = 3;
		this.areaToNode[1] = 0;
		this.areaToNode[2] = 4;
		this.areaToNode[3] = -1;
		this.areaToNode[4] = -1;
		this.areaToNode[5] = -1;
		this.areaToNode[6] = 1;
		this.areaToNode[7] = 2;

        this.initUIEvents();
		this.initNetEvent();
		
		this.m_ui.lab_hmoney.getComponent(cc.Label).string = CommonUtil.formRealMoney(LoginUser.getInstance().getMoney());

        ResPool.load(ViewDefine.CpnChip);
		this.m_ui.CpnChipbox2d.getComponent(CpnChipbox2d).setChipValues(this._rule);
		
		this.initContext();
		ProcessorMgr.getInstance().getProcessor(ChannelDefine.game).setPaused(false);
	}

	node2Area(v:number) : number {
		for(var i=0; i<8; i++) {
			if(this.areaToNode[i] == v) {
				return i;
			}
		}
		return -1;
	}

	onDestroy(){
		ResPool.unload(ViewDefine.CpnChip);
		super.onDestroy();
	}

	private initContext() {
		var enterData = BjleMgr.getInstance().getEnterData();
		if(enterData) {
			for(var i=0; i<enterData.AreaBets.length; i++) {
				var areaName = "area"+this.areaToNode[i];
				if(this.m_ui[areaName]) {
					this.m_ui[areaName].getChildByName("labTotal").getComponent(cc.Label).string = CommonUtil.formRealMoney(enterData.AreaBets[i]);
					this.m_ui[areaName].getChildByName("labMe").getComponent(cc.Label).string = CommonUtil.formRealMoney(enterData.MyBets[i]);
				}
			}
		}
	}

	private initNetEvent() {
		EventCenter.getInstance().listen(baccarat_msgs.BaccaratBetResp, this.BaccaratBetResp, this);
		EventCenter.getInstance().listen(baccarat_msgs.BaccaratStateStartResp, this.BaccaratStateStartResp, this);
        EventCenter.getInstance().listen(baccarat_msgs.BaccaratStatePlayingResp, this.BaccaratStatePlayingResp, this);
		EventCenter.getInstance().listen(baccarat_msgs.BaccaratStateOpenResp, this.BaccaratStateOpenResp, this);
		EventCenter.getInstance().listen(baccarat_msgs.BaccaratStateOverResp, this.BaccaratStateOverResp, this);
		EventCenter.getInstance().listen(baccarat_msgs.BaccaratCheckoutResp, this.BaccaratCheckoutResp, this);
		EventCenter.getInstance().listen(baccarat_msgs.BaccaratOverResp, this.BaccaratOverResp, this);
		EventCenter.getInstance().listen(gamecomm_msgs.GoldChangeInfo, this.GoldChangeInfo, this);
	}

	private onStateTimer(tmr:BaseTimer) {
		//	this.m_lab.lab_cd.string = tmr.getRemainTimes().toString();
	}

	private setWinAreas(arr:any) {
		for(var i=4; i>=0; i--) {
			if(this.m_ui["area"+i]) {
				var nd = this.m_ui["area"+i].getChildByName("sprhigh");
				nd.active = !isNil(arr[this.node2Area(i)]) && arr[this.node2Area(i)] > 0;
				if(nd.active) {
					nd.runAction(cc.blink(1, 3));
				}
			}
		}
	}

	private clearBets() {
		BjleMgr.getInstance().clearBets();
		
		var childs = this.m_ui.chipLayer.children;
		for(var i=childs.length-1; i>=0; i--){
			ResPool.delObject(ViewDefine.CpnChip, childs[i]);
		}
		for(var j=0; j<5; j++) {
			this.m_ui["area"+j].getChildByName("labTotal").getComponent(cc.Label).string = "0";
			this.m_ui["area"+j].getChildByName("labMe").getComponent(cc.Label).string = "0";
		}
	}
	
	private GoldChangeInfo(param:gamecomm.GoldChangeInfo) {
		if(param.UserID == LoginUser.getInstance().UserId) {
			LoginUser.getInstance().Gold = param.Gold;
			if(!isEmpty(param.AlterGold)) {
				GameUtil.playAddMoney(this.m_ui.lab_magic_money, CommonUtil.fixRealMoney(param.AlterGold), cc.v3(0,0,0), cc.v2(0, 60));
			}
		} 
	}

    private BaccaratBetResp(param:baccarat.BaccaratBetResp) {
		var enterData = BjleMgr.getInstance().getEnterData();
		enterData.AreaBets[param.BetArea] += param.BetScore;
		if(param.UserID == LoginUser.getInstance().UserId) {
			enterData.MyBets[param.BetArea] += param.BetScore;
		}

		var areaName = "area"+this.areaToNode[param.BetArea];
		if(this.m_ui[areaName]) {
			this.m_ui[areaName].getChildByName("labTotal").getComponent(cc.Label).string = CommonUtil.formRealMoney(enterData.AreaBets[param.BetArea]);
			this.m_ui[areaName].getChildByName("labMe").getComponent(cc.Label).string = CommonUtil.formRealMoney(enterData.MyBets[param.BetArea]);
		}

		var money = CommonUtil.fixRealMoney(param.BetScore);
        var nums = GameUtil.parseChip(money, this._rule);
        var fromObj = this.m_ui.btnPlayerlist; 
        if(param.UserID == LoginUser.getInstance().UserId) {
            var idx = Math.max(0, this._rule.indexOf(money));
			fromObj = this.m_ui.CpnChipbox2d.getComponent(CpnChipbox2d).getChipNode(idx);
			this.isJoined = true;
        }
		for(var j in nums) {
			var chip = ResPool.newObject(ViewDefine.CpnChip);
			chip.getComponent(CpnChip).setChipValue(nums[j], true);
			this.m_ui.chipLayer.addChild(chip);
			chip.__areaId = param.BetArea;
			CommonUtil.lineTo1(chip, fromObj, this.m_ui["area"+this.areaToNode[param.BetArea]], 0.14+0.1*parseInt(j), parseInt(j)*0.01, margin[this.areaToNode[param.BetArea]]);
		}
		AudioManager.getInstance().playEffectAsync("appqp/audios/chipmove", false);
    }

	//准备阶段
	private BaccaratStateStartResp(param) {
		this.m_ui.CpnGameState.getComponent(CpnGameState).setZhunbei();
		TimerManager.delTimer(this.tmrState);
		this.tmrState = TimerManager.loopSecond(1, 3, new CHandler(this, this.onStateTimer), true);
		this.m_ui.cardLayer.active = false;
		this.setWinAreas([]);
		this.clearBets();
		this.m_ui.CpnHandcardZ.getComponent(CpnHandcard).resetCards([], false);
		this.m_ui.CpnHandcardM.getComponent(CpnHandcard).resetCards([], false);
	}

	//下注阶段
	private BaccaratStatePlayingResp(param:baccarat.BaccaratStatePlayingResp) {
		this.m_ui.CpnGameState.getComponent(CpnGameState).setXiazhu();
		
		TimerManager.delTimer(this.tmrState);
		this.tmrState = TimerManager.loopSecond(1, 3, new CHandler(this, this.onStateTimer), true);
		this.m_ui.cardLayer.active = false;
		this.setWinAreas([]);
		this.m_ui.CpnHandcardZ.getComponent(CpnHandcard).resetCards([], false);
		this.m_ui.CpnHandcardM.getComponent(CpnHandcard).resetCards([], false);

		if(param.Times.OutTime <= 1) {
			AudioManager.getInstance().playEffectAsync("appqp/audios/startbet", false);
			UIManager.showSpineAsync("appqp/spines/startani/skeleton", 0, "animation", 1, this.node, {zIndex:10, x:0, y:160, scale:0.5}, {
				on_complete: (sk, trackEntry)=>{
					CommonUtil.safeDelete(sk);
				}
			});
		}
	}

	//开牌阶段
	private BaccaratStateOpenResp(param:baccarat.BaccaratStateOpenResp) {
		this.isJoined = false;
		this.m_ui.CpnGameState.getComponent(CpnGameState).setKaipai();
		TimerManager.delTimer(this.tmrState);
		this.tmrState = TimerManager.loopSecond(1, 3, new CHandler(this, this.onStateTimer), true);
		this.m_ui.cardLayer.active = true;
		this.m_ui.CpnHandcardZ.getComponent(CpnHandcard).resetCards([], false);
		this.m_ui.CpnHandcardM.getComponent(CpnHandcard).resetCards([], false);

		if(param.Times.OutTime <= 1) {
			AudioManager.getInstance().playEffectAsync("appqp/audios/endbet", false);
		}
	}

	//结算阶段
	private BaccaratStateOverResp(param) {
		this.isJoined = false;
		this.m_ui.CpnGameState.getComponent(CpnGameState).setPaijiang();
		
		this.playJiesuan();
	}

	private BaccaratOverResp(param:baccarat.BaccaratOverResp) {
		this.isJoined = false;
		var aaa = [];
		var bbb = [];
		this.m_ui.cardLayer.active = true;
		for(var i=param.BankerCard.Cards.length-1; i>=0; i--) {
			if(param.BankerCard.Cards[i] != 0) {
				aaa.push(param.BankerCard.Cards[i]);
			}
		}
		for(var j=param.PlayerCard.Cards.length-1; j>=0; j--) {
			if(param.PlayerCard.Cards[j] != 0) {
				bbb.push(param.PlayerCard.Cards[j]);
			}
		}
		this.m_ui.CpnHandcardZ.getComponent(CpnHandcard).resetCards(aaa, true);
		this.m_ui.CpnHandcardM.getComponent(CpnHandcard).resetCards(bbb, true);
		this.setWinAreas(param.AwardArea);
	}

	private BaccaratCheckoutResp(param:baccarat.BaccaratCheckoutResp) {
		this.isJoined = false;
		LoginUser.getInstance().Gold += param.MyAcquire;
		this.m_ui.lab_hmoney.getComponent(cc.Label).string = CommonUtil.formRealMoney(LoginUser.getInstance().getMoney());
		GameUtil.playAddMoney(this.m_ui.lab_magic_money, CommonUtil.fixRealMoney(param.MyAcquire), cc.v3(0,0,0), cc.v2(0, 60));
	}

    private playJiesuan() {
		var self = this;
		this.m_ui.chipLayer.runAction(cc.sequence(
			cc.delayTime(1),
			cc.callFunc(function(){
				var childs = this.m_ui.chipLayer.children
				var len = childs.length;
				for(var i=len-1; i>=0; i--){
					childs[i].runAction(
						cc.callFunc(function(obj){
                            ResPool.delObject(ViewDefine.CpnChip, obj);
						}, childs[i])
					);
				}
			}, this)
		));
		AudioManager.getInstance().playEffectAsync("appqp/audios/collect", false);
	}
	
	private initUIEvents() {
		CommonUtil.addClickEvent(this.m_ui.btn_close, function(){ 
			if(this.isJoined) {
				UIManager.openDialog("cfmquitgame", "确认退出游戏？", 2, function(mnuId){
					if(mnuId==1) { GameManager.getInstance().quitGame(); }
				})
			} else {
				GameManager.getInstance().quitGame();
			}
		}, this);
		CommonUtil.addClickEvent(this.m_ui.btn_help, function(){ 
            GameManager.getInstance().quitGame(true);
		}, this);
		CommonUtil.addClickEvent(this.m_ui.button0, function(){ 
			this.onClickArea(this.node2Area(0));
		}, this);
		CommonUtil.addClickEvent(this.m_ui.button1, function(){ 
            this.onClickArea(this.node2Area(1));
		}, this);
		CommonUtil.addClickEvent(this.m_ui.button2, function(){ 
            this.onClickArea(this.node2Area(2));
		}, this);
		CommonUtil.addClickEvent(this.m_ui.button3, function(){ 
            this.onClickArea(this.node2Area(3));
		}, this);
		CommonUtil.addClickEvent(this.m_ui.button4, function(){ 
            this.onClickArea(this.node2Area(4));
		}, this);
	}
	private onClickArea(areaID:number) {
        var money = this.m_ui.CpnChipbox2d.getComponent(CpnChipbox2d).getSelectValue();
        if(!money) {
            UIManager.toast("请选择下注区域");
            return;
        }
        baccarat_request.BaccaratBetReq({
            BetArea : areaID,
            BetScore : CommonUtil.toServerMoney(money)
        });
	}
}
