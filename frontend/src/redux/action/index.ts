
import { IMicrophoneAudioTrack ,ICameraVideoTrack, IAgoraRTCRemoteUser} from "agora-rtc-sdk-ng";
import { Coursetype, RemoteUsers, UserType } from "../../utils/Types";
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


export type Action = AddUserAction | RemoveUserAction | RefreshAction | SET_USERFETCHED ;

interface ADD_REMOTE_USERS{
    type:ActionTypes.ADD_REMOTE_USERS,
    payload:IAgoraRTCRemoteUser
}
interface ADD_LOCALTRACKS{
    type:ActionTypes.ADD_LOCALTRACKS,
    payload:[IMicrophoneAudioTrack,ICameraVideoTrack]
}
interface ADD_DEBATE_DATA{
    type:ActionTypes.ADD_COURSE_DATA,
    payload:Coursetype
}

export type CourseCallAction = ADD_LOCALTRACKS | ADD_REMOTE_USERS |ADD_DEBATE_DATA