import Navbar from '../../components/Navbar/Navbar';
import { CourseRoomWrapper } from './CourseRoom.styles';
import TutorScreen from '../../components/CourseRoomComp/TutorScreen/TutorScreen';
import AllParticipants from '../../components/CourseRoomComp/AllParticipants/AllParticipants';
import LiveChat from '../../components/CourseRoomComp/LiveChat/LiveChat';
import RoomHeader from '../../components/CourseRoomComp/RoomHeader/RoomHeader';
import RoomActions from '../../components/CourseRoomComp/RoomActions/RoomActions';
import { useEffect, useReducer, useRef } from 'react';
import CourseCallSerice from '../../services/CourseCallService';
import {  initialStateType } from '../../utils/Types';
import { CourseCallAction } from '../../redux/action';
import { ActionTypes } from '../../redux/action/ActionTypes';
import { useSelector } from 'react-redux';
import { State } from '../../redux/reducer';
import { useLocation  } from 'react-router-dom';
import queryString from "query-string";

const initialState:initialStateType=  {
    localTracks:null,
    remoteUsers:[],
    courseData:null
}


const courseRoomReducer = (state = initialState, action: CourseCallAction): initialStateType => {
  switch (action.type) {

    case ActionTypes.ADD_LOCALTRACKS:
      return { ...state ,localTracks:action.payload };    // You should update the state here with the new local tracks

    case ActionTypes.ADD_REMOTE_USERS:    
      return {...state , remoteUsers: [...state.remoteUsers , action.payload ]}  

    case ActionTypes.ADD_COURSE_DATA:
    return {...state, courseData:action.payload}

    default:
      return state;
  }
};


const CourseRoom = () => {

    const {user} = useSelector((state:State)=>state.user)
    const location = useLocation();
    const [state,dispatch]  = useReducer(courseRoomReducer,initialState) ;
    const queryParams = queryString.parse(location.search);
    const courseName = queryParams.courseName;

    const client = useRef({
        rtc: {
            // For the local client.
            client: null,
            // For the local audio and video tracks.
            localAudioTrack: null,
            localVideoTrack: null,
        },
        rtm: {
            client: null,
            channel: null
        }
    });

    const CallService = new CourseCallSerice({
      currentUser:user,
      client,
      dispatch,
      courseData:state.courseData,
      remoteUsers:state.remoteUsers,

    });

    useEffect(()=>{
      if(typeof courseName === 'string'){
      if(!courseName)return;
      CallService.getRoomDataFromDB(courseName)
    }
    },[courseName])
    
    useEffect(()=>{
      if(user && state.courseData){
        // CallService.init()
      }
    },[user,state.courseData])


  return (
    <CourseRoomWrapper>
        <Navbar/>
        <div className="courseRoomMainContainer">
            <RoomHeader/> 
              <div className="bottomWrapper">
                <RoomActions/>
                <TutorScreen/>
                <div className="participantsAndLiveChatContainer">
                <AllParticipants users={state.remoteUsers}/>
                <LiveChat/>
                </div>
           </div>
        </div>

    </CourseRoomWrapper>
  )
}

export default CourseRoom