import { Dispatch } from "redux";
import { UserType } from "../../utils/Types";
import { Action } from ".";
import { ActionTypes } from "./ActionTypes";

export const AddUserAction = (payload: UserType) => (dispatch: Dispatch<Action>) => {

    return dispatch({
        type: ActionTypes.ADD_USER,
        payload
    })
}
export const RemoveUserAction = () => (dispatch: Dispatch) => {

    return dispatch({
        type: ActionTypes.REMOVE_USER,
    })
}

export const refreshAction = () => (dispatch: Dispatch) => {
    return dispatch({
        type: ActionTypes.REFRESH
    })
}
export const setUserFetched = (payload:boolean)=>(dispatch:Dispatch<Action>)=>{
    return dispatch({
        type:ActionTypes.SET_USERFETCHED,
        payload
    })
}