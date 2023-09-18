import { CourseWrapper } from './Course.styles'
import CourseCard from '../../components/CourseCard/CourseCard'
import Navbar from '../../components/Navbar/Navbar'

const Course = () => {
  return (
    <CourseWrapper>
        <Navbar/>
        <div className="courseMainContainer">

        <div className="courseHeader">
            <div>

            <h1 className='headerText'>Available courses</h1>
            <div className="searchBox">
                <input type="text" />
            </div>
            </div>
            <div className="courseRight">
                <button className='createButton'>
                    Create Course
                </button>
            </div>
        </div>
            <div className="cardWrapper">
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
            </div>
        </div>
    </CourseWrapper>
  )
}

export default Course