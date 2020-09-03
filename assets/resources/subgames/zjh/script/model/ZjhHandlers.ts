import { zhajinhua_msgs } from "../../../../../common/script/proto/net_zhajinhua";
import ZjhMgr from "./ZjhMgr";
import { zhajinhua } from "../../../../../../declares/zhajinhua";
import { ZjhFightState } from "./ZjhDefine";
import { gamecomm_msgs } from "../../../../../common/script/proto/net_gamecomm";
import { gamecomm } from "../../../../../../declares/gamecomm";
import { login_msgs } from "../../../../../common/script/proto/net_login";
import GameManager from "../../../../../common/script/model/GameManager";

var ZjhHandlers = {

	// [gamecomm_msgs.PlayerListInfo] : function(param:gamecomm.IPlayerListInfo) {
	// 	ZjhMgr.getInstance().clearPlayers();
	// 	for(var i in param.AllInfos) {
	// 		var info:gamecomm.IPlayerInfo = param.AllInfos[i];
	// 		var man:zhajinhua.IZhajinhuaPlayer = {};
	// 		man.UserId = info.UserID;
	// 		man.Gold = info.Gold;
	// 		man.Name = info.Name;
	// 		man.SeatId = info.ChairID;
	// 		man.SeatState = info.Sate;
	// 		ZjhMgr.getInstance().addPlayer(man);
	// 	}
	// },

	[gamecomm_msgs.EnterGameResp] : function(param:gamecomm.EnterGameResp) {
		if(param.GameID != GameManager.getInstance().getGameId()) {
			return;
		}
		var info:gamecomm.IPlayerInfo = param.UserInfo;
		var man:zhajinhua.IZhajinhuaPlayer = {};
		man.UserId = info.UserID;
		man.Gold = info.Gold;
		man.Name = info.Name;
		man.SeatId = info.ChairID;
		man.SeatState = info.Sate;
		ZjhMgr.getInstance().addPlayer(man);
	},

	[gamecomm_msgs.ExitGameResp] : function(param:gamecomm.IExitGameResp) {
		if(param.GameID == GameManager.getInstance().getGameId()) {
			return;
		}
		ZjhMgr.getInstance().removePlayer(param.UserID);
	},

	[zhajinhua_msgs.EnterGameZjhResp] : function(param:zhajinhua.IEnterGameZjhResp) {
		ZjhMgr.getInstance().addPlayer(param.Player);
	},

	[zhajinhua_msgs.ExitGameZjhResp] : function(param:zhajinhua.IExitGameZjhResp) {
		ZjhMgr.getInstance().removePlayer(param.UserId);
	},

	[zhajinhua_msgs.ZhajinhuaStateFreeResp] : function(param) {
		var mans = ZjhMgr.getInstance().getPlayerList();
		if(mans) {
			for(var uid in mans) {
			//	mans[uid].SeatState = ZjhFightState.idle;
				mans[uid].IsSee = false;
			}
		}
	},

	[zhajinhua_msgs.ZhajinhuaStateStartResp] : function(param) {
		var mans = ZjhMgr.getInstance().getPlayerList();
		if(mans) {
			for(var uid in mans) {
				mans[uid].SeatState = ZjhFightState.fighting;
				mans[uid].IsSee = false;
			}
		}
	},

	[zhajinhua_msgs.ZhajinhuaStatePlayingResp] : function(param:zhajinhua.IZhajinhuaStatePlayingResp) {
		ZjhMgr.getInstance().CurTurnTo = param.UserID;
	},

	[zhajinhua_msgs.ZhajinhuaStateOverResp] : function(param) {
		var mans = ZjhMgr.getInstance().getPlayerList();
		if(mans) {
			for(var uid in mans) {
				mans[uid].SeatState = ZjhFightState.fightover;
			}
		}
	},

	[zhajinhua_msgs.ZhajinhuaHostResp] : function(param:zhajinhua.IZhajinhuaHostResp) {
		if(ZjhMgr.getInstance().getEnterData()) {
			ZjhMgr.getInstance().getEnterData().Banker = param.BankerID;
		}
	},

	[zhajinhua_msgs.ZhajinhuaReadyResp] : function(param:zhajinhua.IZhajinhuaReadyResp) {
		var man = ZjhMgr.getInstance().getPlayer(param.UserId);
		if(man) {
			man.SeatState = ZjhFightState.readyed;
		}
	},

	[zhajinhua_msgs.ZhajinhuaFollowResp] : function(param:zhajinhua.IZhajinhuaFollowResp) {
		var man = ZjhMgr.getInstance().getPlayer(param.UserId);
		if(man) {
			man.SeatState = ZjhFightState.genzhu;
		}
	},

	[zhajinhua_msgs.ZhajinhuaRaiseResp] : function(param:zhajinhua.IZhajinhuaRaiseResp) {
		var man = ZjhMgr.getInstance().getPlayer(param.UserId);
		if(man) {
			man.SeatState = ZjhFightState.jiazhu;
		}
	},

	[zhajinhua_msgs.ZhajinhuaLookResp] : function(param) {
		var man = ZjhMgr.getInstance().getPlayer(param.UserId);
		if(man) {
			man.IsSee = true;
		}
	},

	[zhajinhua_msgs.ZhajinhuaCompareResp] : function(param:zhajinhua.IZhajinhuaCompareResp) {
		var loser = param.HitId;
		if(param.WinnerId == loser) {
			loser = param.AttackerId;
		}
		var man = ZjhMgr.getInstance().getPlayer(loser);
		if(man) {
			man.SeatState = ZjhFightState.bipaishu;
		}
	},

	[zhajinhua_msgs.ZhajinhuaGiveupResp] : function(param) {
		var man = ZjhMgr.getInstance().getPlayer(param.UserId);
		if(man) {
			man.SeatState = ZjhFightState.qipai;
		}
	},

	[zhajinhua_msgs.ZhajinhuaOverResp] : function(param) {
		
	},

};

export default ZjhHandlers;