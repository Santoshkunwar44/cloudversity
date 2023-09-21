const UserModel = require("../models/UserModel");
const HashService = require("../services/HashService");
const  OtpService = require("../services/OtpService");

const { hashPassword } = require("../services/UtilityServices");

class AuthController{
    async setUserdata(req,res,next){

        const {password:userPw , number ,  email ,username ,image} = req.body;

        let  queryPayload={
            number,
            email,
        }

        Object.entries(queryPayload).map(([key,value])=>{
            if(!queryPayload[key]){
                delete queryPayload[key]
            }
        })

        try {

            
            const user = await UserModel.findOne({...queryPayload});
            console.log(user)
            if(!user){
                throw new Error("user not found")
            }

            const hashed =  await hashPassword(userPw)

            const updatedUser = await UserModel.findByIdAndUpdate(user._doc._id,{
                $set:{
                    password:hashed,
                    username,
                    image,
                    verified:true
                }
            },{
                new:true,
                returnDocument:true
            })
            const {password,...other}  = updatedUser._doc
            req.session.user=other;

            res.status(200).json({message:other,success:true})



        
                
        } catch (error) {
            next(error)
        }
    }
    async registerUser(req,res,next){

        let  { email} = req.body;
        let registerPayload = {...req.body};
        Object.entries(registerPayload).map(([key,value])=>{
            if(!registerPayload[key]){
                delete registerPayload[key];
            }
        })
         try {
            if(!email){
                throw new Error("invalid credentails")
            }

            const otp = OtpService.getOtpCode();
            const ttl = 2 * 60 * 1000;
            const expiresAt = Date.now() + ttl;
            const data = `${email}.${otp}.${expiresAt}`
            const hash = HashService.hashOtp(data)

          
           await OtpService.sendOtpToEmail(email,otp)

            

        res.status(200).json({message:{hash:`${hash}.${expiresAt}`,email,otp},success:true})
        

        } catch (error) {
            next(error)
        }
    }
    async otpConfirmation(req,res,next){
        const {otp,hash,email}  = req.body;


        try {
            
            if(!otp || !hash || !email){
                throw new Error("All fields are required")
            }
            const [hashedOtp, expires] = hash.split('.');

             if (Date.now() > +expires) {
                throw new Error("Otp expired")
            }

            const data = `${email}.${otp}.${expires}`;

            const isValid = OtpService.verifyOtp(hashedOtp,data);

            if (!isValid) {
                throw new Error("Invalid Otp")
            }
            let  user = await UserModel.findOne({email})
            if(user){
                req.session.user = user;
            }
            if(!user){
              user = await UserModel.create({email});
            }
            
             res.status(200).json({message:user,success:true})

        } catch (error) {
                next(error)
        }
    }
}

module.exports  = new AuthController()
