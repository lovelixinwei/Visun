import { GameKindEnum } from "./ConstDefine";

var GameConfig = {
	[GameKindEnum.BrCowCow] : {
		id: GameKindEnum.BrCowCow,
		name: "百人牛牛",
		openState: 2,
		icon: "lobby/imgs/gameico/ico_brnn",
		dir: "brnn",
		isexist: true
	},
	[GameKindEnum.Longhu] : {
		id: GameKindEnum.Longhu,
		name: "龙虎大战",
		openState: 1,
		icon: "lobby/imgs/gameico/icon_lhd",
		dir: "longhu",
		isexist: false
	},
	[GameKindEnum.Baccarat] : {
		id: GameKindEnum.Baccarat,
		name: "百家乐",
		openState: 1,
		icon: "lobby/imgs/gameico/ico_bjl",
		dir: "bjle",
		isexist: true
	},
	[GameKindEnum.Redpacket] : {
		id: GameKindEnum.Redpacket,
		name: "抢红包",
		openState: 1,
		icon: "lobby/imgs/gameico/ico_qhb",
		dir: "redbag",
		isexist: false
	},
	[GameKindEnum.Redblack] : {
		id: GameKindEnum.Redblack,
		name: "红黑大战",
		openState: 1,
		icon: "lobby/imgs/gameico/icon_hhdz",
		dir: "honhei",
		isexist: false
	},
	[GameKindEnum.BirdBeast] : {
		id: GameKindEnum.BirdBeast,
		name: "飞禽走兽",
		openState: 1,
		icon: "lobby/imgs/gameico/icon_fqzs",
		dir: "fqzs",
		isexist: true
	},
	
	[GameKindEnum.Zhajinhua] : {
		id: GameKindEnum.Zhajinhua,
		name: "炸金花",
		openState: 1,
		icon: "lobby/imgs/gameico/icon_zjh",
		dir: "zjh",
		isexist: true
	},
	[GameKindEnum.QzCowcow] : {
		id: GameKindEnum.QzCowcow,
		name: "抢庄牛牛",
		openState: 1,
		icon: "lobby/imgs/gameico/ico_qznn",
		dir: "qznn",
		isexist: false
	},
	[GameKindEnum.Landlord] : {
		id: GameKindEnum.Landlord,
		name: "斗地主",
		openState: 1,
		icon: "lobby/imgs/gameico/ico_ddz",
		dir: "ddz",
		isexist: true
	},
	[GameKindEnum.Blackjack] : {
		id: GameKindEnum.Blackjack,
		name: "21点",
		openState: 1,
		icon: "lobby/imgs/gameico/ico_dian21",
		dir: "dian21",
		isexist: false
	},
	[GameKindEnum.Sangong] : {
		id: GameKindEnum.Sangong,
		name: "三公",
		openState: 1,
		icon: "lobby/imgs/gameico/ico_sangong",
		dir: "sangong",
		isexist: false
	},
	[GameKindEnum.Water13] : {
		id: GameKindEnum.Water13,
		name: "十三水",
		openState: 1,
		icon: "lobby/imgs/gameico/ico_shui13",
		dir: "shui13",
		isexist: false
	},
	[GameKindEnum.Qzpaijiu] : {
		id: GameKindEnum.Qzpaijiu,
		name: "抢庄牌九",
		openState: 1,
		icon: "lobby/imgs/gameico/ico_qzpj",
		dir: "qzpj",
		isexist: false
	},
	[GameKindEnum.Suoha] : {
		id: GameKindEnum.Suoha,
		name: "梭哈",
		openState: 1,
		icon: "lobby/imgs/gameico/ico_suoha",
		dir: "suoha",
		isexist: false
	},
	// "80000052" : {
	// 	id: "80000052",
	// 	name: "看牌抢庄牛牛",
	// 	openState: 1,
	// 	icon: "lobby/imgs/gameico/ico_kpqznn",
	// 	dir: "kpqznn",
	// 	isexist: false
	// },
};

export default GameConfig;