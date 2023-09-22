import React, { useEffect, useState } from 'react'
import { Coursetype } from '../../utils/Types'
import { CourseCardWrapper } from './CourseCard.styles'
import { useNavigate } from 'react-router-dom'
import moment from "moment"
type coursePropsType={
  course:Coursetype
}
const CourseCard:React.FC<coursePropsType> = ({course}) => {
  const  navigate  = useNavigate()
  const [isLive,setIsLive] =useState(false)

  useEffect(()=>{
      setIsLive(course.startTime < Date.now())
  },[course])

  const handleGoToRoom=()=>{
    navigate(`/course/${course.title}`)
  }


  
  return (
    <CourseCardWrapper onClick={handleGoToRoom} >
        <div className="courseTop">

        <p className='couseTitle'>{course.title}</p>
        </div>
        <div className="courseBottom">
        <p className='courseName'>Course : {course.course} </p>
        <p className='duration'>Duration : {course.duration} </p>
        <p className={`startTime ${isLive && "startedTime"}`}> {isLive ? "Started at ":"Starts at"}  {moment(course.startTime).format("lll")}</p>
        </div>
    </CourseCardWrapper>
  )
}

export default CourseCard