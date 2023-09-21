import { combineReducers } from "redux"
import UserReducer from "./UserReducer";
import OtherReducer from "./otherReducer"


const reducers = combineReducers({

    user: UserReducer,
    other: OtherReducer,

})

export type State = ReturnType<typeof reducers>

export default reducers;


