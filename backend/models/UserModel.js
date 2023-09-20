const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    username:String,
    email:String,
    password:String,
    number:String,
    initialNo:String,
    star:Number,
    image:String,
    verified:{
        type:Boolean,
        default:false,
    }
},{timestamps:true})

module.exports = mongoose.model("User",UserSchema);

