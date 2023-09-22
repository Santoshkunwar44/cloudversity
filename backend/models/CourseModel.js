const mongoose = require("mongoose")

const CourseSchema = mongoose.Schema({
    title:String,
    noOfDays:Number,
    duration:Number,
    tutor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    startTime:Number,
    feeType:{
        type:String,
        enum:["Free","Paid"]
    },
    price:Number,
    course:String,
    description:String,

},{timestamps:true})

module.exports = mongoose.model("Course",CourseSchema);

