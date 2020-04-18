import RoleEntity from "../../role/RoleEntity";
import { RoleState } from "../StateConst";
import StateBase from "../State";

export default class FlightState extends StateBase {
	protected id:RoleState = RoleState.Flight;
	
	public frameUpdate(who: RoleEntity) {

	}

	public onEnter(who: RoleEntity, param:any) {

	}

	public onExit(who: RoleEntity) {

	}

	public onComplete(who: RoleEntity) {

	}
}