import { SetupUserType } from "../pages/Auth/UserSetup/UserSetup";
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



