import { GameKindEnum } from "./ConstDefine";

var GameConfig = {
	[GameKindEnum.BrCowCow] : {
		GameKind: GameKindEnum.BrCowCow,
		name: "百人牛牛",
		openState: 2,
		icon: "lobby/imgs/gameico/ico_brnn",
		dir: "brnn",
	},
	[GameKindEnum.Longhu] : {
		GameKind: GameKindEnum.Longhu,
		name: "龙虎大战",
		openState: 1,
		icon: "lobby/imgs/gameico/icon_lhd",
		dir: "longhu",
	},
	[GameKindEnum.Baccarat] : {
		GameKind: GameKindEnum.Baccarat,
		name: "百家乐",
		openState: 1,
		icon: "lobby/imgs/gameico/ico_bjl",
		dir: "bjle",
	},
	[GameKindEnum.Redpacket] : {
		GameKind: GameKindEnum.Redpacket,
		name: "抢红包",
		openState: 1,
		icon: "lobby/imgs/gameico/ico_qhb",
		dir: "redbag",
	},
	[GameKindEnum.Redblack] : {
		GameKind: GameKindEnum.Redblack,
		name: "红黑大战",
		openState: 1,
		icon: "lobby/imgs/gameico/icon_hhdz",
		dir: "honhei",
	},
	[GameKindEnum.BirdBeast] : {
		GameKind: GameKindEnum.BirdBeast,
		name: "飞禽走兽",
		openState: 1,
		icon: "lobby/imgs/gameico/icon_fqzs",
		dir: "fqzs",
	},
	
	[GameKindEnum.Zhajinhua] : {
		GameKind: GameKindEnum.Zhajinhua,
		name: "炸金花",
		openState: 1,
		icon: "lobby/imgs/gameico/icon_zjh",
		dir: "zjh",
	},
	[GameKindEnum.QzCowcow] : {
		GameKind: GameKindEnum.QzCowcow,
		name: "抢庄牛牛",
		openState: 1,
		icon: "lobby/imgs/gameico/ico_qznn",
		dir: "qznn",
	},
	[GameKindEnum.Landlord] : {
		GameKind: GameKindEnum.Landlord,
		name: "斗地主",
		openState: 1,
		icon: "lobby/imgs/gameico/ico_ddz",
		dir: "ddz",
	},
	[GameKindEnum.Blackjack] : {
		GameKind: GameKindEnum.Blackjack,
		name: "21点",
		openState: 1,
		icon: "lobby/imgs/gameico/ico_dian21",
		dir: "dian21",
	},
	[GameKindEnum.Sangong] : {
		GameKind: GameKindEnum.Sangong,
		name: "三公",
		openState: 1,
		icon: "lobby/imgs/gameico/ico_sangong",
		dir: "sangong",
	},
	[GameKindEnum.Water13] : {
		GameKind: GameKindEnum.Water13,
		name: "十三水",
		openState: 1,
		icon: "lobby/imgs/gameico/ico_shui13",
		dir: "shui13",
	},
	[GameKindEnum.Qzpaijiu] : {
		GameKind: GameKindEnum.Qzpaijiu,
		name: "抢庄牌九",
		openState: 1,
		icon: "lobby/imgs/gameico/ico_qzpj",
		dir: "qzpj",
	},
	[GameKindEnum.Suoha] : {
		GameKind: GameKindEnum.Suoha,
		name: "梭哈",
		openState: 1,
		icon: "lobby/imgs/gameico/ico_suoha",
		dir: "suoha",
	},
};

export default GameConfig;