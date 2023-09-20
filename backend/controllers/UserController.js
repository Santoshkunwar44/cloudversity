const UserModel= require("../models/UserModel")
class UserController{


async getUsers(req,res){
    try {
        const courses = await UserModel.find({...req.query})
        res.status(200).json({message:courses,status:200})
    } catch (error) {
        next(error)
    }   
}
async updateUser(req,res){
    const {id}  = req.params;

    try {
   const updatedUser =    await UserModel.findByIdAndUpdate(id,
        {
            $set:req.body
        },
        {
            new:true,
            returnDocument:true,
        })
        res.status(200).json({message:updatedUser,success:true})
    } catch (error) {
        next(error)
    }
}
async deleteUser(req,res){
    const {id} = req.params;
    try {
          await UserModel.deleteOne({_id:id})
          res.status(200).json({message:"successfully deleted ",success:true})
    } catch (error) {
            next(error)
    }
}
}
module.exports = new UserController()
