//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { sangong } from "./sangong";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum sangong_msgs {
    SangongPlayer = 202,
    SangongSceneResp = 203,
    SangongStateFreeResp = 204,
    SangongStateCallResp = 205,
    SangongStateDecideResp = 206,
    SangongStatePlayingResp = 207,
    SangongStateDealResp = 208,
    SangongStateOpenResp = 209,
    SangongStateOverResp = 210,
    SangongReadyReq = 211,
    SangongReadyResp = 212,
    SangongBetReq = 213,
    SangongBetResp = 214,
    SangongOpenResp = 215,
    SangongOverResp = 216,
    SangongHostReq = 217,
    SangongHostResp = 218,
    SangongHostListReq = 219,
    SangongHostListResp = 220,
}

export var sangong_packet_define = {
    202: new LeafWsPacket(202, sangong.SangongPlayer, "sangong.SangongPlayer"),
    203: new LeafWsPacket(203, sangong.SangongSceneResp, "sangong.SangongSceneResp"),
    204: new LeafWsPacket(204, sangong.SangongStateFreeResp, "sangong.SangongStateFreeResp"),
    205: new LeafWsPacket(205, sangong.SangongStateCallResp, "sangong.SangongStateCallResp"),
    206: new LeafWsPacket(206, sangong.SangongStateDecideResp, "sangong.SangongStateDecideResp"),
    207: new LeafWsPacket(207, sangong.SangongStatePlayingResp, "sangong.SangongStatePlayingResp"),
    208: new LeafWsPacket(208, sangong.SangongStateDealResp, "sangong.SangongStateDealResp"),
    209: new LeafWsPacket(209, sangong.SangongStateOpenResp, "sangong.SangongStateOpenResp"),
    210: new LeafWsPacket(210, sangong.SangongStateOverResp, "sangong.SangongStateOverResp"),
    211: new LeafWsPacket(211, sangong.SangongReadyReq, "sangong.SangongReadyReq"),
    212: new LeafWsPacket(212, sangong.SangongReadyResp, "sangong.SangongReadyResp"),
    213: new LeafWsPacket(213, sangong.SangongBetReq, "sangong.SangongBetReq"),
    214: new LeafWsPacket(214, sangong.SangongBetResp, "sangong.SangongBetResp"),
    215: new LeafWsPacket(215, sangong.SangongOpenResp, "sangong.SangongOpenResp"),
    216: new LeafWsPacket(216, sangong.SangongOverResp, "sangong.SangongOverResp"),
    217: new LeafWsPacket(217, sangong.SangongHostReq, "sangong.SangongHostReq"),
    218: new LeafWsPacket(218, sangong.SangongHostResp, "sangong.SangongHostResp"),
    219: new LeafWsPacket(219, sangong.SangongHostListReq, "sangong.SangongHostListReq"),
    220: new LeafWsPacket(220, sangong.SangongHostListResp, "sangong.SangongHostListResp"),
}

export class sangong_request {
    public static SangongPlayer( data:{ MyInfo:any, Cards:any } ) { sangong_packet_define[202].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongSceneResp( data:{ TimeStamp:number, Chips:number[], AreaBets:number[], MyBets:number[], Inning:string, AllPlayers:any, HostID:number } ) { sangong_packet_define[203].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongStateFreeResp( data:{ Times:any, Inning:string } ) { sangong_packet_define[204].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongStateCallResp( data:{ Times:any } ) { sangong_packet_define[205].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongStateDecideResp( data:{ Times:any, HostID:number } ) { sangong_packet_define[206].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongStatePlayingResp( data:{ Times:any } ) { sangong_packet_define[207].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongStateDealResp( data:{ Times:any, Cards:any } ) { sangong_packet_define[208].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongStateOpenResp( data:{ Times:any, OpenInfo:any } ) { sangong_packet_define[209].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongStateOverResp( data:{ Times:any } ) { sangong_packet_define[210].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongReadyReq( data:{ IsReady:any } ) { sangong_packet_define[211].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongReadyResp( data:{ UserId:number } ) { sangong_packet_define[212].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongBetReq( data:{ BetArea:number, BetScore:number } ) { sangong_packet_define[213].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongBetResp( data:{ UserId:number, BetArea:number, BetScore:number } ) { sangong_packet_define[214].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongOpenResp( data:{ WinnerId:number, Infos:any[] } ) { sangong_packet_define[215].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongOverResp( data:{ MySettlement:number, TotalSettlement:number[] } ) { sangong_packet_define[216].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongHostReq( data:{ IsWant:any } ) { sangong_packet_define[217].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongHostResp( data:{ UserID:number, IsWant:any } ) { sangong_packet_define[218].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongHostListReq( data:{} ) { sangong_packet_define[219].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongHostListResp( data:{ CurHost:any, Waitlist:number[] } ) { sangong_packet_define[220].sendToChannel(ChannelDefine.game, data, false); }
}

