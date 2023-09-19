import { CourseCardWrapper } from './CourseCard.styles'
import { useNavigate } from 'react-router-dom'

const CourseCard = ({course}) => {
  const  navigate  = useNavigate()
  const handleGoToRoom=()=>{
    navigate(`/course/${course.title}`)
  }
  return (
    <CourseCardWrapper onClick={handleGoToRoom} >
        <div className="courseTop">

        <p className='couseTitle'>{course.title}</p>
        <div className='tutorBox'>

            <img src={course?.tutor?.image} alt="" />
            <div>
            <p className='tutorName'> {course?.tutor.username}</p>
            <p className='starCount'>{course?.tutor?.star} stars</p>
            </div>


        </div>
        </div>
        <div className="courseBottom">
        <p className='courseName'>Course : {course.course} </p>
        <p className='duration'>Duration : {course.duration} </p>
        <p className='startTime'>Starts At {course.startTime}</p>
        </div>
    </CourseCardWrapper>
  )
}

export default CourseCard