# Visun
 cocos ts 2.1.2

---------------------------------------------------------------
框架说明
---------------------------------------------------------------
launcher[启动器]
	HotUpdator（热更）
	PlatformUtil（平台导出的接口）
kernel[核心框架]
	codec[数据流的编码解码]
	manager[资源管理、音频管理、UI管理等]
	net[网络库：Http Tcp WebSocket]
	promise[串行并行执行器]
	utils[通用辅助函数]
looker[配置表，常量，全局变量等]
logic[游戏逻辑] 采用 proxy:response ----> model ----> view ----> proxy:request 的设计
	proxy 响应协议
	model 处理数据与逻辑
	view 存放视图
	proxy:response响应网络协议，并调用model存放和处理数据，然后触发与协议名同名的全局事件，view在监听到事件时刷新数据，view中操作调用proxy:request发送请求
	