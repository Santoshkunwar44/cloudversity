import {AgoraOptionsType, Coursetype, RemoteUsers, UserType, clientType} from "../utils/Types"
import React from "react";
import { CourseCallAction } from "../redux/action";

import AgoraRTM from 'agora-rtm-sdk'
import {  IAgoraRTCRemoteUser } from "agora-rtc-react";
import {  getAgoraTokenApi, getCoruseByNameApi } from "../utils/Api";
import { ActionTypes } from "../redux/action/ActionTypes";


 const agoraOptions:AgoraOptionsType={
  appId:"f90befed3935402ab7fe3525d87f7f80",
  token:"007eJxTYCgyWblN8krymsqPrr8VdD0CvzH3GXLNTzrxdu/ZXNNf/8MUGNIsDZJS01JTjC2NTU0MjBKTzNNSjU2NTFMszNPM0ywM9i1UTm0IZGTQV8lhYWSAQBCfh6EktbgkPjkjMS8vNYeBAQCcGCMc",
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
    
    
    async getAgoraToken() {
      if(!this.courseData)return;
  try {
    const res = await getAgoraTokenApi({ channelName:"test", role: "publisher", uid:agoraOptions.uid.toString(), tokentype: "1000", expiry: 86400 })
  if (res.status === 200) {
    let { rtcToken, rtmToken } = res.data;
      await this.init(rtmToken,rtcToken);
    
   }
} catch (error) {
  console.log(error)
}
}
    
    async init(rtmToken:string,rtcToken:string){

      if(this.courseData &&this.client.current.rtc.client && this.client.current.rtc.localAudioTrack && this.client.current.rtc.localVideoTrack){

        
        const channelName ="test"
        
        this.client.current.rtm.client = AgoraRTM.createInstance(agoraOptions.appId)
        await this.client.current.rtm.client.login({ uid:agoraOptions.uid.toString(),token:rtmToken })
        this.client.current.rtm.channel = this.client.current.rtm.client.createChannel(channelName)
        await this.client.current.rtm.channel.join()
        await this.client.current.rtc.client.join(agoraOptions.appId, channelName,rtcToken, null);
        this.initClientEvents();
        // let userId = this.currentUser?._id ?? uid.toLocaleString();
        
        // let obj  ={
          //   [userId]:  JSON.stringify({ uid: this.currentUser?._id, username: this.currentUser?.username, admin: false })
          // }
          // adding the channel attribute 
          // await this.client.current.rtm.client.addOrUpdateChannelAttributes(channelName, obj , { enableNotificationToChannelMembers: true });
          
          
          //publishing the streams
          // await this.client.current.rtc.client.publish([this.client.current.rtc.localAudioTrack,this.client.current.rtc.localVideoTrack]);
          
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
        console.log("init cient event ")
        if(this.client.current.rtc.client){

          this.client.current.rtc.client.on('user-joined',this.handleUserJoined)
          
          this.client.current.rtc.client.on("user-published",this.handleUserPublished)
          
          this.client.current.rtc.client.on('user-left',this.handleUserLeave)
          
          this.client.current.rtc.client.on("user-unpublished",this.handleUserUnpublished)
        }
    }


    async handleUserJoined(user:IAgoraRTCRemoteUser){
      console.log("someone jined",user)
    }

    async handleUserLeave(user:IAgoraRTCRemoteUser){
      console.log("someone left",user)
    }

    async handleUserPublished(user:IAgoraRTCRemoteUser,type:"audio" | "video" | "datachannel"){
      if(type==="audio"){

      }
    }

    async handleUserUnpublished(user:IAgoraRTCRemoteUser,type:"audio" | "video" | "datachannel"){
    }

}

export default CourseCallSerice ;

