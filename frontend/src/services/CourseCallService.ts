import AgoraRTC  from "agora-rtc-sdk-ng";
import {AgoraOptionsType,channelOptionsType} from "../utils/Types"
import React from "react";
import { CourseCallAction } from "../redux/action";
import { ActionTypes } from "../redux/action/ActionTypes";

class CourseCallSerice{

    agoraOptions:AgoraOptionsType;
    dispatch :React.Dispatch<CourseCallAction>

    constructor({agoraOptions,dispatch}:{agoraOptions:AgoraOptionsType,dispatch:React.Dispatch<CourseCallAction>}){

        this.agoraOptions = agoraOptions;
        this.dispatch = dispatch
    }


    async JoinCall(){

      const agoraClient =   AgoraRTC.createClient({mode:"rtc",codec:"vp9"})
      await agoraClient.join(this.agoraOptions.appId,this.agoraOptions.channel,this.agoraOptions.token,null);
     const localTracks =  await AgoraRTC.createMicrophoneAndCameraTracks()
     this.dispatch({type:ActionTypes.ADD_LOCALTRACKS,payload:localTracks})
        
      agoraClient.on("user-published",this.handlUuserPublished);
      agoraClient.on("user-unpublished",this.handleUserUnpublished)
    }

    async handlUuserPublished(){

    }

    async handleUserUnpublished(){

    }




}

export default CourseCallSerice ;;

