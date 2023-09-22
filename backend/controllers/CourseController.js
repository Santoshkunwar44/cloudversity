const CourseModel = require("../models/CourseModel")


class CourseController{

async createCourse(req,res,next){
    try {
       let  newCourse = await  CourseModel.create(req.body)
       newCourse = await  newCourse.populate("tutor")
       res.status(200).json({message:newCourse,success:true})

    } catch (error) {
        console.log(error)
        next(error)  
    }
}
async getCourse(req,res,next){

    const {live,upcoming,all}= req.query;


    let allCourses ;
    try {
        if(live){
                allCourses=   await CourseModel.find({
                 $and: [
                {startTime: { $lt: new Date() } },
                {hasEnded:false}
          ],
            }).populate("tutor");

        }else if(upcoming){
                allCourses =  await CourseModel.find({
                  $and: [
                 {startTime: { $gt: new Date() } },
                 {hasEnded:false}
                  ]
            }).populate("tutor");

        }else if(all){

            allCourses = await CourseModel.find({hasEnded:false}).populate("tutor")
        }else{
            allCourses = await CourseModel.find({...req.query}).populate("tutor")
        }

        res.status(200).json({message:allCourses,status:200})

    } catch (error) {
        next(error)
    }   
}
async updateCourse(req,res,next){
    const {id}  = req.params;

    try {

     const updatedCourse =  await CourseModel.findByIdAndUpdate(id,
        {
            $set:req.body
        },
        {
            new:true,
            returnDocument:true,
        })

        res.status(200).json({message:updatedCourse,success:true})

    } catch (error) {
        next(error)
    }
}
async deleteCourse(req,res,next){
    const {id} = req.params;
    try {
          await CourseModel.deleteOne({_id:id})
          res.status(200).json({message:"successfully deleted ",success:true})
    } catch (error) {
            next(error)
    }
}
}

module.exports = new CourseController()