const UserModel = require("../models/UserModel");
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

        let  {number , email} = req.body;
        


        let registerPayload = {...req.body};
        Object.entries(registerPayload).map(([key,value])=>{
            if(!registerPayload[key]){
                delete registerPayload[key];
            }
        })
        
        try {
        if(number){
        //    to be added
        }else{
          
            await OtpService.sendOtpToEmail(email)
            
        }


        const newUser =  await UserModel.create({...registerPayload})
        res.status(200).json({message:newUser,success:true})
        

        } catch (error) {
            next(error)
        }
    }
    async otpConfirmation(req,res,next){
        res.status(200).json("hello")
    }
}

module.exports  = new AuthController()
