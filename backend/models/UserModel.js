const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    username:String,
    email:String,
    password:String,
    number:Number,
    countryNoCode:Number,
    star:Number,
    image:String,
},{timestamps:true})

module.exports = mongoose.model("User",UserSchema);

