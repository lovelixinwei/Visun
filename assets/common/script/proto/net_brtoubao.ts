//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { brtoubao } from "./brtoubao";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum brtoubao_msgs {
    BrtoubaoSceneResp = 133,
    BrtoubaoStateStartResp = 134,
    BrtoubaoStatePlayingResp = 135,
    BrtoubaoStateOpenResp = 136,
    BrtoubaoStateOverResp = 137,
    BrtoubaoBetReq = 138,
    BrtoubaoBetResp = 139,
    BrtoubaoOpenResp = 140,
    BrtoubaoCheckoutResp = 141,
    BrtoubaoHostReq = 142,
    BrtoubaoHostResp = 143,
    BrtoubaoSuperHostReq = 144,
    BrtoubaoSuperHostResp = 145,
}

export var brtoubao_packet_define = {
    133: new LeafWsPacket(133, brtoubao.BrtoubaoSceneResp, "brtoubao.BrtoubaoSceneResp"),
    134: new LeafWsPacket(134, brtoubao.BrtoubaoStateStartResp, "brtoubao.BrtoubaoStateStartResp"),
    135: new LeafWsPacket(135, brtoubao.BrtoubaoStatePlayingResp, "brtoubao.BrtoubaoStatePlayingResp"),
    136: new LeafWsPacket(136, brtoubao.BrtoubaoStateOpenResp, "brtoubao.BrtoubaoStateOpenResp"),
    137: new LeafWsPacket(137, brtoubao.BrtoubaoStateOverResp, "brtoubao.BrtoubaoStateOverResp"),
    138: new LeafWsPacket(138, brtoubao.BrtoubaoBetReq, "brtoubao.BrtoubaoBetReq"),
    139: new LeafWsPacket(139, brtoubao.BrtoubaoBetResp, "brtoubao.BrtoubaoBetResp"),
    140: new LeafWsPacket(140, brtoubao.BrtoubaoOpenResp, "brtoubao.BrtoubaoOpenResp"),
    141: new LeafWsPacket(141, brtoubao.BrtoubaoCheckoutResp, "brtoubao.BrtoubaoCheckoutResp"),
    142: new LeafWsPacket(142, brtoubao.BrtoubaoHostReq, "brtoubao.BrtoubaoHostReq"),
    143: new LeafWsPacket(143, brtoubao.BrtoubaoHostResp, "brtoubao.BrtoubaoHostResp"),
    144: new LeafWsPacket(144, brtoubao.BrtoubaoSuperHostReq, "brtoubao.BrtoubaoSuperHostReq"),
    145: new LeafWsPacket(145, brtoubao.BrtoubaoSuperHostResp, "brtoubao.BrtoubaoSuperHostResp"),
}

export class brtoubao_request {
    public static BrtoubaoSceneResp( data:{ TimeStamp:number, Inning:string, Chips:number[], AwardAreas:any[], AreaBets:number[], MyBets:number[], AllPlayers:any } ) { brtoubao_packet_define[133].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoStateStartResp( data:{ Times:any, Inning:string } ) { brtoubao_packet_define[134].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoStatePlayingResp( data:{ Times:any } ) { brtoubao_packet_define[135].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoStateOpenResp( data:{ Times:any, OpenInfo:any } ) { brtoubao_packet_define[136].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoStateOverResp( data:{ Times:any } ) { brtoubao_packet_define[137].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoBetReq( data:{ BetArea:number, BetScore:number } ) { brtoubao_packet_define[138].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoBetResp( data:{ UserID:number, BetArea:number, BetScore:number } ) { brtoubao_packet_define[139].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoOpenResp( data:{ Dice:any, AwardArea:any } ) { brtoubao_packet_define[140].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoCheckoutResp( data:{ MyAcquire:number, Acquires:number[] } ) { brtoubao_packet_define[141].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoHostReq( data:{ IsWant:any } ) { brtoubao_packet_define[142].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoHostResp( data:{ UserID:number, IsWant:any } ) { brtoubao_packet_define[143].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoSuperHostReq( data:{ IsWant:any } ) { brtoubao_packet_define[144].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoSuperHostResp( data:{ UserID:number, IsWant:any } ) { brtoubao_packet_define[145].sendToChannel(ChannelDefine.game, data, false); }
}

