import {AgoraOptionsType, UserType, clientType} from "../utils/Types"
import React from "react";
import { CourseCallAction } from "../redux/action";

import AgoraRTM from 'agora-rtm-sdk'
import {  createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";
import { getAllCourseApi, getCoruseByNameApi } from "../utils/Api";
import { ActionTypes } from "../redux/action/ActionTypes";
const useMicAndCamera = createMicrophoneAndCameraTracks()
const useClient = createClient({ mode: "rtc", codec: "vp8" })

 const agoraOptions:AgoraOptionsType={
  appId:"9c5900d942a44d5f93feb007b56a6f51",
  token:"007eJxTYDjUaaQxqW1CWjfzC5U7i+493ZclxmvqINH9bhZT0NObm54oMFgmm1oaGKRYmhglmpikmKZZGqelJhkYmCeZmiWapZka/okSSG0IZGQI6eRlZWSAQBCfh6EktbgkPjkjMS8vNYeBAQBfSyJd",
  channel:"test_channel",
  uid:Math.floor(Math.random()*5).toString()
}

class CourseCallSerice{

    dispatch :React.Dispatch<CourseCallAction>;
    client: React.MutableRefObject< clientType>;
    currentUser:UserType | null;
    
    
    constructor({client,currentUser,dispatch}:{client:React.MutableRefObject<clientType>, currentUser:UserType |null, dispatch:React.Dispatch<CourseCallAction>}){
      
      this.dispatch = dispatch;
      this.client = client;
      this.currentUser = currentUser;


    }
    
    
    
    async init(){
      const { ready, tracks } = useMicAndCamera()
      this.client.current.rtc.client = useClient();

        this.client.current.rtm.client = AgoraRTM.createInstance(agoraOptions.appId)
        await this.client.current.rtm.client.login({ uid: this.currentUser?._id  ?? agoraOptions.uid.toString() })
        this.client.current.rtm.channel = await this.client.current.rtm.client.createChannel()
        await this.client.current.rtm.channel.join()



    }

    async getRoomDataFromDB(roomName:string){

      try {

       const {data,status} =  await getCoruseByNameApi(roomName);

        if(status===200){
          this.dispatch({type:ActionTypes.ADD_COURSE_DATA,payload:data.message[0]})
        }else{
          throw Error("something went wrong")
        }
        
      } catch (error:any) {

        console.log(error)


      }

    }






}

export default CourseCallSerice ;;

