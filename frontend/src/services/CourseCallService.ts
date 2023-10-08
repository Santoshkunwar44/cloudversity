import {AgoraOptionsType, Coursetype, RemoteUsers, UserType, clientType} from "../utils/Types"
import React from "react";
import { CourseCallAction } from "../redux/action";

import AgoraRTM from 'agora-rtm-sdk'
import {  IAgoraRTCRemoteUser, createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";
import {  getCoruseByNameApi } from "../utils/Api";
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
    courseData:Coursetype | null;
    remoteUsers:RemoteUsers;
    
    
    constructor({client,currentUser , remoteUsers, courseData,dispatch }:{client:React.MutableRefObject<clientType>, remoteUsers:RemoteUsers,  courseData:Coursetype |null , currentUser:UserType |null, dispatch:React.Dispatch<CourseCallAction>}){
      
      this.dispatch = dispatch;
      this.client = client;
      this.currentUser = currentUser;
      this.courseData  = courseData;
      this.remoteUsers = remoteUsers;

    }
    
    
    
    async init(){

      if(!this.courseData)return;

        const { ready, tracks } = useMicAndCamera()
        const channelName = this.courseData.title
        this.initClientEvents();
        this.client.current.rtc.client = useClient();
        this.client.current.rtm.client = AgoraRTM.createInstance(agoraOptions.appId)
        await this.client.current.rtm.client.login({ uid: this.currentUser?._id  ?? agoraOptions.uid.toString() })
        this.client.current.rtm.channel = await this.client.current.rtm.client.createChannel(channelName)
        await this.client.current.rtm.channel.join()
        let uid = await this.client.current.rtc.client.join(agoraOptions.appId, channelName, agoraOptions.token, null);
        let userId = this.currentUser?._id ?? uid.toLocaleString();

        let obj  ={
          [userId]:  JSON.stringify({ uid: this.currentUser?._id, username: this.currentUser?.username, admin: false })
        }
        // adding the channel attribute 
        await this.client.current.rtm.client.addOrUpdateChannelAttributes(channelName, obj , { enableNotificationToChannelMembers: true });

        if (ready && tracks) {
            [this.client.current.rtc.localAudioTrack, this.client.current.rtc.localVideoTrack] = tracks
            //publishing the streams
              await this.client.current.rtc.client.publish([tracks[0],tracks[1]]);
        }

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

     async initClientEvents(){ 

        if(this.client.current.rtc.client){

          this.client.current.rtc.client.on('user-joined',this.handleUserJoined)
          
          this.client.current.rtc.client.on("user-published",this.handleUserPublished)
          
          this.client.current.rtc.client.on('user-left',this.handleUserLeave)
          
          this.client.current.rtc.client.on("user-unpublished",this.handleUserUnpublished)
        }
    }


    async handleUserJoined(user:IAgoraRTCRemoteUser){
    }

    async handleUserLeave(user:IAgoraRTCRemoteUser){
    }

    async handleUserPublished(user:IAgoraRTCRemoteUser,type:"audio" | "video" | "datachannel"){

    }

    async handleUserUnpublished(user:IAgoraRTCRemoteUser,type:"audio" | "video" | "datachannel"){
    }

}

export default CourseCallSerice ;

