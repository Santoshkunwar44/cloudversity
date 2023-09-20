const mongoose = require("mongoose")

const CourseSchema = mongoose.Schema({
    title:String,
    noOfDays:Number,
    noOfHours:Number,
    tutor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    startTime:Number,
    fee:{
        type:String,
        enum:["Free","Paid"]
    },
    price:Number,
    course:String

},{timestamps:true})

module.exports = mongoose.model("Course",CourseSchema);

