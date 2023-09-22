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



    try {
        const courses = await CourseModel.find({...req.query})
        res.status(200).json({message:courses,status:200})
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