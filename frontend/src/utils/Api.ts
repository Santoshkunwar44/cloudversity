import { SetupUserType } from "../pages/Auth/UserSetup/UserSetup";
import { Coursetype } from "./Types";
import { AxiosInstance } from "./axios";

type confirmOtpType={
    hash:string,
    otp:number,
    email:string
}


export const sentOtpApi=(email:string)=>AxiosInstance.post("/auth/sentOtp",{email});
export const confirmOtpApi=(payload:confirmOtpType)=>AxiosInstance.post("/auth/otpCofirmation",payload)
export const setupUserApi=(setupPlayload:SetupUserType)=>AxiosInstance.post("/auth/setupUser",setupPlayload)
export const getSessionApi =()=>AxiosInstance.get("/user/session-user");




//course api endpoints 

export const createNewCourseApi =(payload:Coursetype)=>AxiosInstance.post("/course/create",payload)
export const getAllCourseApi=()=>AxiosInstance.get("/course?all=true");
export const getLiveCourseApi=()=>AxiosInstance.get("/course?live=true")
export const getUpcomingCourseApi=()=>AxiosInstance.get("/course?upcoming=true")
export const getCoruseByNameApi=(title:string)=>AxiosInstance.get(`/course?title=${title}`)


