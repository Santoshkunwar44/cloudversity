
import { UserType } from "../../utils/Types";
import { ActionTypes } from "./ActionTypes";


interface AddUserAction {
    type: ActionTypes.ADD_USER;
    payload: UserType
}
interface RemoveUserAction {
    type: ActionTypes.REMOVE_USER;
}
interface RefreshAction {
    type: ActionTypes.REFRESH;
}

interface SET_USERFETCHED{
    type:ActionTypes.SET_USERFETCHED,
    payload:boolean
}
export type Action = AddUserAction | RemoveUserAction | RefreshAction | SET_USERFETCHED
