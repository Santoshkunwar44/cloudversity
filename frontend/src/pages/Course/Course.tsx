import { CourseWrapper } from './Course.styles'
import CourseCard from '../../components/CourseCard/CourseCard'
import Navbar from '../../components/Navbar/Navbar'
import { courses } from '../../utils/data'
import { useEffect, useState } from 'react'
import { ConstantVar, Coursetype } from '../../utils/Types'
import { getAllCourseApi, getLiveCourseApi, getUpcomingCourseApi } from '../../utils/Api'

const Course = () => {
  const [ courseTab,setCourseTab] = useState(ConstantVar.ALL_COURSES);
  const [coursesItem,setCoursesItem] = useState<Coursetype[]>([])



  useEffect(()=>{
    if(courseTab===ConstantVar.ALL_COURSES){
      fetchAllCourse()
    }else if(courseTab===ConstantVar.LIVE_COURSES){
      fetchLiveCourse()
    }else{
      fetchUpcomingCourse()
    }
  },[courseTab])

  const handleChangeTab=(type:ConstantVar.ALL_COURSES | ConstantVar.LIVE_COURSES | ConstantVar.UPCOMING_COURSES)=>{
    setCourseTab(type)
  }
  const fetchAllCourse=async()=>{
    try {
    const {data,status} =   await  getAllCourseApi();
        if(status===200){
          setCoursesItem(data.message)
       }else{
        throw new Error(data.message)
       }
      } catch (error) {
      console.log(error)
    }
  }
  const fetchUpcomingCourse=async()=>{
    try {
    const {data,status} =   await  getUpcomingCourseApi();
        if(status===200){
          setCoursesItem(data.message)
       }else{
        throw new Error(data.message)
       }
      } catch (error) {
      console.log(error)
    }
  }
  const fetchLiveCourse=async()=>{
    try {
    const {data,status} =   await  getLiveCourseApi();
        if(status===200){
          setCoursesItem(data.message)
       }else{
        throw new Error(data.message)
       }
      } catch (error) {
      console.log(error)
    }
  }



  return (
    <CourseWrapper>
        <Navbar/>
        <div className="courseMainContainer">

        <div className="courseHeader">
            

            <p className='headerText'>Available courses</p>
        
          
            <div className="courseRight">
            <div className="filterBox">
                <div className={courseTab === ConstantVar.ALL_COURSES ? "active":""} onClick={()=>handleChangeTab(ConstantVar.ALL_COURSES)}>
                    All
                </div>
                <div  className={courseTab === ConstantVar.LIVE_COURSES ? "active":""} onClick={()=>handleChangeTab(ConstantVar.LIVE_COURSES)}>
                    Started
                </div>
                     <div  className={courseTab === ConstantVar.UPCOMING_COURSES ? "active":""} onClick={()=>handleChangeTab(ConstantVar.UPCOMING_COURSES)}>
                    Upcoming
                </div>
            </div>
            </div>
        </div>
            <div className="cardWrapper">
              {
                coursesItem.map(c=><CourseCard key={c._id} course={c}/>)
              }
            </div>
        </div>
    </CourseWrapper>
  )
}

export default Course