
const { getOtpHtml } = require("./EmailHtmlService");
const { sendEmail } = require("./EmailServices")
const crypto = require('crypto');
const HashService = require("./HashService");


const smsSid = process.env.SMS_SID;
const smsAuthToken = process.env.SMS_AUTH_TOKEN;
const twilio = require('twilio')(smsSid, smsAuthToken, {
    lazyLoading: true,
});


class OtpService{

    getOtpCode(){
        const otp = crypto.randomInt(1000, 9999);
        return otp;

    }


    async sendOtpToEmail(email,otp) {


        let subject = "Cloudveristy send you otp"
        let text = "Cloudversity send you otp"

        try {
          
        

        const emailPayload = { 
            text,
            html : getOtpHtml(otp) ,
            email,
            subject,
        }


            const messageId = await sendEmail(emailPayload)

            return messageId;

        } catch (error) {

            console.log(error)
            throw new Error(error)

        }
    }

    async sendOtpToMobile(phone){
        const otpcode = this.getOtpCode();
        return await twilio.messages.create({
            to: phone,
            from: process.env.SMS_FROM_NUMBER,
            body: `Your codershouse OTP is ${otpcode}`,
        });
        
        
    }

    verifyOtp(hashedOtp, data) {
        let computedHash =  HashService.hashOtp(data)
        return computedHash === hashedOtp;
    }

}

module.exports = new OtpService()

