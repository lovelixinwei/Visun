//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { tbcowcow } from "./tbcowcow";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum tbcowcow_msgs {
    TbcowcowPlayer = 172,
    TbcowcowSceneResp = 173,
    TbcowcowStateFreeResp = 174,
    TbcowcowStatePlayingResp = 175,
    TbcowcowStateDealResp = 176,
    TbcowcowStateOpenResp = 177,
    TbcowcowStateOverResp = 178,
    TbcowcowReadyReq = 179,
    TbcowcowReadyResp = 180,
    TbcowcowBetReq = 181,
    TbcowcowBetResp = 182,
    TbcowcowOpenResp = 183,
    TbcowcowOverResp = 184,
}

export var tbcowcow_packet_define = {
    172: new LeafWsPacket(172, tbcowcow.TbcowcowPlayer, "tbcowcow.TbcowcowPlayer"),
    173: new LeafWsPacket(173, tbcowcow.TbcowcowSceneResp, "tbcowcow.TbcowcowSceneResp"),
    174: new LeafWsPacket(174, tbcowcow.TbcowcowStateFreeResp, "tbcowcow.TbcowcowStateFreeResp"),
    175: new LeafWsPacket(175, tbcowcow.TbcowcowStatePlayingResp, "tbcowcow.TbcowcowStatePlayingResp"),
    176: new LeafWsPacket(176, tbcowcow.TbcowcowStateDealResp, "tbcowcow.TbcowcowStateDealResp"),
    177: new LeafWsPacket(177, tbcowcow.TbcowcowStateOpenResp, "tbcowcow.TbcowcowStateOpenResp"),
    178: new LeafWsPacket(178, tbcowcow.TbcowcowStateOverResp, "tbcowcow.TbcowcowStateOverResp"),
    179: new LeafWsPacket(179, tbcowcow.TbcowcowReadyReq, "tbcowcow.TbcowcowReadyReq"),
    180: new LeafWsPacket(180, tbcowcow.TbcowcowReadyResp, "tbcowcow.TbcowcowReadyResp"),
    181: new LeafWsPacket(181, tbcowcow.TbcowcowBetReq, "tbcowcow.TbcowcowBetReq"),
    182: new LeafWsPacket(182, tbcowcow.TbcowcowBetResp, "tbcowcow.TbcowcowBetResp"),
    183: new LeafWsPacket(183, tbcowcow.TbcowcowOpenResp, "tbcowcow.TbcowcowOpenResp"),
    184: new LeafWsPacket(184, tbcowcow.TbcowcowOverResp, "tbcowcow.TbcowcowOverResp"),
}

export class tbcowcow_request {
    public static TbcowcowPlayer( data:{ MyInfo:any, Cards:any } ) { tbcowcow_packet_define[172].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowSceneResp( data:{ TimeStamp:number, Chips:number[], AreaBets:number[], MyBets:number[], Inning:string, AllPlayers:any } ) { tbcowcow_packet_define[173].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowStateFreeResp( data:{ Times:any, Inning:string } ) { tbcowcow_packet_define[174].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowStatePlayingResp( data:{ Times:any } ) { tbcowcow_packet_define[175].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowStateDealResp( data:{ Times:any, Cards:any } ) { tbcowcow_packet_define[176].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowStateOpenResp( data:{ Times:any, OpenInfo:any } ) { tbcowcow_packet_define[177].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowStateOverResp( data:{ Times:any } ) { tbcowcow_packet_define[178].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowReadyReq( data:{ IsReady:any } ) { tbcowcow_packet_define[179].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowReadyResp( data:{ UserId:number } ) { tbcowcow_packet_define[180].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowBetReq( data:{ BetArea:number, BetScore:number } ) { tbcowcow_packet_define[181].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowBetResp( data:{ UserId:number, BetArea:number, BetScore:number } ) { tbcowcow_packet_define[182].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowOpenResp( data:{ WinnerId:number, Infos:any[] } ) { tbcowcow_packet_define[183].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowOverResp( data:{ MySettlement:number, TotalSettlement:number[] } ) { tbcowcow_packet_define[184].sendToChannel(ChannelDefine.game, data, false); }
}

