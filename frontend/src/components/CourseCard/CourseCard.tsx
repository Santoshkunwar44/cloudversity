import React from 'react'
import { CourseCardWrapper } from './CourseCard.styles'

const CourseCard = () => {
  return (
    <CourseCardWrapper >
        <div className="courseTop">

        <p className='couseTitle'>Basice Level  Nodjes course</p>
        <div className='tutorBox'>

            <img src="https://images.pexels.com/photos/6326377/pexels-photo-6326377.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
            <div>
            <p className='tutorName'> Codewithmama</p>
            <p className='starCount'>21 stars</p>
            </div>


        </div>
        </div>
        <div className="courseBottom">

        <p className='duration'>Duration : 7 days </p>
        <p className='startTime'>Starts At 2023 Jan 3rd , 1 : 00 AM</p>
        </div>
    </CourseCardWrapper>
  )
}

export default CourseCard