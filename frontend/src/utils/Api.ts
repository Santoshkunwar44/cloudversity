import { AxiosInstance } from "./axios";

export const sentOtpApi=(email:string)=>AxiosInstance.post("/auth/sentOtp",{email})



