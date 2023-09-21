import { Action } from "../action";
import { ActionTypes } from "../action/ActionTypes";


type initialStateType={
    refresh:boolean,
    userFetched:boolean
}
const initialState = {
    refresh:false,
    userFetched:false,
}

 const otherReducer=(state:initialStateType=initialState,action:Action)=>{
    switch (action.type) {
        case ActionTypes.REFRESH:
            return {...state, refresh: !state.refresh}
    
        case ActionTypes.SET_USERFETCHED:
            return {...state, userFetched:action.payload}
    
        default:
            return state;
    }
}
export default otherReducer