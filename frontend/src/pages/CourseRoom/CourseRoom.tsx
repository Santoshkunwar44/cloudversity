import Navbar from '../../components/Navbar/Navbar'
import { CourseRoomWrapper } from './CourseRoom.styles'
import TutorScreen from '../../components/CourseRoomComp/TutorScreen/TutorScreen'
import AllParticipants from '../../components/CourseRoomComp/AllParticipants/AllParticipants'
import LiveChat from '../../components/CourseRoomComp/LiveChat/LiveChat'
import RoomHeader from '../../components/CourseRoomComp/RoomHeader/RoomHeader'
import RoomActions from '../../components/CourseRoomComp/RoomActions/RoomActions'
import { useEffect, useReducer } from 'react'
import CourseCallSerice from '../../services/CourseCallService'
import {  ICameraVideoTrack, IMicrophoneAudioTrack } from 'agora-rtc-sdk-ng'
import { AgoraOptionsType } from '../../utils/Types'
import { CourseCallAction } from '../../redux/action'
import { ActionTypes } from '../../redux/action/ActionTypes'

const agoraOptions:AgoraOptionsType={
  appId:"9c5900d942a44d5f93feb007b56a6f51",
  token:"007eJxTYDjUaaQxqW1CWjfzC5U7i+493ZclxmvqINH9bhZT0NObm54oMFgmm1oaGKRYmhglmpikmKZZGqelJhkYmCeZmiWapZka/okSSG0IZGQI6eRlZWSAQBCfh6EktbgkPjkjMS8vNYeBAQBfSyJd",
  channel:"test_channel",
  uid:Math.floor(Math.random()*5).toString()
}
type initialStateType={
  localTracks:[IMicrophoneAudioTrack,ICameraVideoTrack]|null
}

const initialState=  {
    localTracks:null,
}

const courseRoomReducer = (state: initialStateType = initialState, action: CourseCallAction): initialStateType => {
  switch (action.type) {
    case ActionTypes.ADD_LOCALTRACKS:
      return { ...state ,localTracks:action.payload }; // You should update the state here with the new local tracks

    default:
      return state;
  }
};

const CourseRoom = () => {


    const [state,dispatch]  = useReducer(courseRoomReducer,initialState) ;

    const CallService = new CourseCallSerice({
      agoraOptions,
      dispatch
    });


    
    useEffect(()=>{
      CallService.JoinCall()
    },[])
    





  return (


    <CourseRoomWrapper>
        <Navbar/>
        <div className="courseRoomMainContainer">
            <RoomHeader/> 
              <div className="bottomWrapper">
                <RoomActions/>
                <TutorScreen/>
                <div className="participantsAndLiveChatContainer">
                <AllParticipants/>
                <LiveChat/>
                </div>
           </div>
        </div>

    </CourseRoomWrapper>
  )
}

export default CourseRoom