//---------------------------------------
// WebSocket封装
//---------------------------------------
import IChannel from "./IChannel";
import IProcessor from "../processor/IProcessor";
import { ConnState } from "../Define";


var WebSocket = WebSocket || window["WebSocket"] || window["MozWebSocket"]; 


export default class WsChannel implements IChannel {
	private _curState:ConnState = ConnState.unconnect;
	private _ws:any = null;
	private _url:string = "";
	private _dataProcessor:IProcessor = null;
	private _onConnSuccess:Function;
	private _onConnFail:Function;

	private _on_opened(event) {
		cc.log("ws: onopen", this._url);
		this._curState = ConnState.connected;

		this._onConnFail = null;
		if(this._onConnSuccess) {
			this._onConnSuccess();
			this._onConnSuccess = null;
		}

		this._dataProcessor.flush();
	}

	private _on_recv_data(event) {
		// cc.log("ws: onmessage", event.data);
		this._dataProcessor.onrecvBuff(event.data);
	}

	private _on_close(event) {
		cc.log("ws: onclose", this._url);

		this._onConnSuccess = null;
		if(this._onConnFail) {
			this._onConnFail();
			this._onConnFail = null;
		}
		
		this.on_closed();
	}

	private _on_error(event) {
		cc.log("ws: onerror", this._url);

		this._onConnSuccess = null;
		if(this._onConnFail) {
			this._onConnFail();
			this._onConnFail = null;
		}
		
		this.on_closed();
	}
	
	private initWs(url:string, cacertPath:string, on_success:Function = null, on_fail:Function = null)
	{
		this._onConnSuccess = on_success;
		this._onConnFail = on_fail;
		this._ws = new WebSocket(url, [], cacertPath);
		this._ws.binaryType = "arraybuffer";
		this._ws.onopen = this._on_opened.bind(this);
		this._ws.onmessage = this._on_recv_data.bind(this);
		this._ws.onclose = this._on_close.bind(this);
		this._ws.onerror = this._on_error.bind(this);
	}

	public destroy(): void 
	{
		this.close();
		this._dataProcessor.clear();
		this._dataProcessor = null;
		this._onConnFail = null;
		this._onConnSuccess = null;
	}

	public setProcessor(porcessor: IProcessor): void 
	{
		this._dataProcessor = porcessor;
		this._dataProcessor.setChannel(this);
	}

	public registProtocol(protocol:any) : void
	{
		this._dataProcessor.registProtocol(protocol);
	}
	
	public connect(url:string, port:number, on_success:Function = null, on_fail:Function = null) : void
	{
		if(this._url === url && this._curState === ConnState.connected && this._ws !== null){
			cc.log("already connected: ", url);
			return;
		}
		
		this.close();
		
		this._curState = ConnState.connecting;
		this._url = url;
		var self = this;
		
		cc.log("连接WebSocket: ", url);

		//注：native模式连接wss时需要cacert认证
		if(cc.sys.isNative){
			cc.loader.loadRes("launcher/cacert", function(errorMessage, loadedResource){
				if( errorMessage ) { 
					cc.log( '载入cacert.pem失败:' + errorMessage ); 
					return; 
				}
				self.initWs(url, ""+loadedResource, on_success, on_fail);
			});
		}
		else {
			self.initWs(url, "", on_success, on_fail);
		}
	}

	//被动关闭WebSocket
	private on_closed()
	{
		if(this._ws){
			cc.log("关闭WebSocket");
			var ws = this._ws;
			this._ws = null;
			ws.close();
		}
		this._curState = ConnState.unconnect;
	}
	
	//主动关闭WebSocket
	public close() 
	{
		if(this._ws){
			cc.log("主动关闭WebSocket");
			this._onConnSuccess = null;
			this._onConnFail = null;
			this._ws.onopen = null;
			this._ws.onmessage = null;
			this._ws.onclose = null;
			this._ws.onerror = null;
			var ws = this._ws;
			this._ws = null;
			ws.close();
		}
		this._curState = ConnState.unconnect;
	}
	
	public sendMessage(cmd:string|number, info:any) : boolean
	{
		return this._dataProcessor.sendMessage(cmd, info);
	}

	public sendBuff(buff:any) : boolean
	{
		if(!buff) {
			cc.log("数据为空");
			return false;
		}
		if(this._curState !== ConnState.connected) {
			cc.log("尚未建立连接");
			return false;
		}
		if(!this._ws) {
			cc.log("尚未创建ws对象");
			return false;
		}

		//cc.log("[send]", buff);
		this._ws.send(buff);
		
		return true;
	}

	public getState() : ConnState 
	{
		return this._curState;
	}
}
