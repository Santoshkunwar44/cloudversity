import { IAgoraRTCClient, IAgoraRTCRemoteUser, ICameraVideoTrack, IMicrophoneAudioTrack } from "agora-rtc-sdk-ng";
import { RtmChannel, RtmClient } from "agora-rtm-sdk";

export enum ConstantVar {
    EMAIL_TAB= "EMAIL_TAB",
    PHONE_TAB= "PHONE_TAB",
    ALL_COURSES="ALL_COURSES",
    UPCOMING_COURSES="UPCOMING_COURSES",
    LIVE_COURSES="LIVE_DEBATES"
}




export type UserType={
    username:string,
    email:string,
    image:string,
    star?:number,
    createdAt?:string,
    updatedAt?:string,
    _id?:string,
}
export type Coursetype={

    title:string,
    noOfDays:number,
    duration:number,
    startTime:number,
    price?:number,
    course:string,
    feeType:"Free"|"Paid",
    tutor:UserType|string,
    _id?:string,
    createdAt?:string,
    description:string,

}
export type AgoraOptionsType={
    appId:string,
    channel:string,
    token:string,
    uid:string,
}
export type channelOptionsType={
       // A variable to hold a local audio track.
    localAudioTrack: null,
    // A variable to hold a local video track.
    localVideoTrack: null,
    // A variable to hold a remote audio track.
    remoteAudioTrack: null,
    // A variable to hold a remote video track.
    remoteVideoTrack: null,
    // A variable to hold the remote user id.s
    remoteUid: null,
}
export type RemoteUsers = IAgoraRTCRemoteUser[]

export type initialStateType={
  localTracks:[IMicrophoneAudioTrack,ICameraVideoTrack]|null,
  remoteUsers:RemoteUsers,
  courseData:null| Coursetype,
}
export type clientType={
    rtc:{
        client: IAgoraRTCClient|null,
        localAudioTrack: IMicrophoneAudioTrack| null,
        localVideoTrack: ICameraVideoTrack | null ,

    },
    rtm:{

        client:RtmClient|null,
        channel:RtmChannel|null,
    }
}