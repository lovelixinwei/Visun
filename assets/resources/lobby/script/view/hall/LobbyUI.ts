import GameManager from "../../../../../common/script/model/GameManager";
import GameConfig from "../../../../../common/script/definer/GameConfig";
import UIManager from "../../../../../kernel/view/UIManager";
import HttpCore from "../../../../../kernel/net/HttpCore";
import CommonUtils from "../../../../../kernel/utils/CommonUtils";
import EventCenter from "../../../../../kernel/event/EventCenter";
import BaseComponent from "../../../../../kernel/view/BaseComponent";
import http_rules from "../../proto/http_rules";
import HallRequest from "../../proxy/HallRequest";
import HallRespond from "../../proxy/HallRespond";
import PlatformUtil from "../../../../../kernel/utils/PlatformUtil";
import ProcessorMgr from "../../../../../kernel/net/processor/ProcessorMgr";
import { ProcessorType, ChannelType } from "../../../../../kernel/looker/KernelDefine";
import ChannelMgr from "../../../../../kernel/net/channel/ChannelMgr";
import { qhb } from "../../../../../common/script/proto/qhb";
import { qhb_request } from "../../../../../common/script/proxy/net_qhb";
import ChannelDefine from "../../../../../common/script/definer/ChannelDefine";
import { MAIN_HTTP_URL, MAIN_WS_URL } from "../../../../../common/script/definer/ConstDefine";
import UserMgr from "../../../../../common/script/model/UserMgr";
import ViewDefine from "../../../../../common/script/definer/ViewDefine";


const {ccclass, property} = cc._decorator;

@ccclass
export default class LobbyUI extends BaseComponent {

	onLoad () 
	{
		CommonUtils.traverseNodes(this.node, this.m_ui);

		this.initUiEvents();
		this.initNet();
		//this.testSpine();
		this.testWs()

		var param = { 
			deviceID : PlatformUtil.getDeviceId(), 
			platformId : 3
		};
		HallRequest.req_youke_login(param);
	}

	private initUiEvents(){
		CommonUtils.addClickEvent(this.m_ui.btn_safebox, function(){ 
			UIManager.openPopwnd(ViewDefine.SafeboxUI.path, null);
		}, this);

		CommonUtils.addClickEvent(this.m_ui.btn_email, function(){ 
			UIManager.openPopwnd(ViewDefine.EmailUI.path, null);
		}, this);

		CommonUtils.addClickEvent(this.m_ui.btn_shop, function(){ 
			UIManager.openPopwnd(ViewDefine.ShopUI.path, null);
		}, this);

		CommonUtils.addClickEvent(this.m_ui.btn_kefu, function(){ 
			UIManager.openPopwnd(ViewDefine.KefuUI.path, null);
		}, this);

		CommonUtils.addClickEvent(this.m_ui.btn_withdraw, function(){ 
			UIManager.openPopwnd(ViewDefine.WithdrawUI.path, null);
		}, this);

		CommonUtils.addClickEvent(this.m_ui.btn_spread, function(){ 
			UIManager.openPopwnd(ViewDefine.SpreadUI.path, null);
		}, this);

		CommonUtils.addClickEvent(this.m_ui.HeroUI, function(){ 
			UIManager.openPopwnd(ViewDefine.PersonUI.path, null);
		}, this);

		CommonUtils.addClickEvent(this.m_ui.btn_user, function(){ 
			UIManager.openPopwnd(ViewDefine.LoginUI.path, null);
		}, this);

		// 
		var gameBtnList = [
			{ id:GameConfig["40000040"].id, btn:"btn_ddz" },
			{ id:GameConfig["90000040"].id, btn:"btn_brnn" },
			{ id:GameConfig["80000044"].id, btn:"btn_fqzs" },
			{ id:GameConfig["40070012"].id, btn:"btn_zjh" },
			{ id:GameConfig["80000041"].id, btn:"btn_buyu" }
		];
		
		for(var i=0; i<gameBtnList.length; i++) {
			var cfg = gameBtnList[i];
			var bton = this.m_ui[cfg.btn];
			bton.gameId = cfg.id;
			CommonUtils.addClickEvent(bton, function(){ 
				GameManager.instance().enterGame(this.gameId);
			}, bton);
		}
	}

	private initNet() {
		HttpCore.setMainUrl(MAIN_HTTP_URL);
		HttpCore.registProcotol(http_rules, HallRequest, HallRespond);
		HttpCore.setCacheAble("req_youke_login", false);

		EventCenter.instance().listen("req_userinfo", this.req_userinfo, this);
		EventCenter.instance().listen("req_room_select_info", this.req_room_select_info, this);
		EventCenter.instance().listen("req_enter_br_room", this.req_enter_br_room, this);
	}

	private req_userinfo(data:any) {
		UIManager.toast("登录成功");
		this.m_ui.HeroUI.getComponent("HeroUI").setUserInfo(UserMgr.instance().getHero());
	}

	private req_room_select_info(info){
		cc.log(info);
	}

	private req_enter_br_room(info) {
		cc.log("------------------");
		cc.log(info);
	}


	private testWs() {
		var processor = ProcessorMgr.instance().createProcessor(ChannelDefine.game, ProcessorType.Protobuff);
		var hall_channel = ChannelMgr.instance().createChannel(ChannelDefine.game, ChannelType.Ws);
		hall_channel.setProcessor(processor);
		hall_channel.registProtocol(qhb);
		hall_channel.connect(MAIN_WS_URL, 0);

		qhb_request.JOIN_COIN_TABLE_REQ({sid:"sssssdddd",tableType:0}, false);
	}


	private testSpine() {
		var self = this;

		//加载spine
		cc.loader.loadRes("common/spines/raptor.json", sp.SkeletonData, 
		function(err, resc){
			if( err ) { cc.log( '载入spine失败:' + err ); return; }
			//var obj = cc.instantiate(resc);
			var obj = new cc.Node();
			var sk = obj.addComponent(sp.Skeleton);
			sk.skeletonData = resc;
			self.node.addChild(obj, 10);
			obj.scale = 0.2;
			sk.setAnimation(1, "Jump", true);
		});
	}

}
