import { CourseWrapper } from './Course.styles'
import CourseCard from '../../components/CourseCard/CourseCard'
import Navbar from '../../components/Navbar/Navbar'
import { courses } from '../../utils/data'

const Course = () => {
  return (
    <CourseWrapper>
        <Navbar/>
        <div className="courseMainContainer">

        <div className="courseHeader">
            

            <h1 className='headerText'>Available courses</h1>
            {/* <div className="searchBox" >
                <input type="text"  placeholder='search courses'/>
            </div> */}
          
            <div className="courseRight">
            <div className="filterBox">
                <div className='active'>
                    All
                </div>
                <div>
                    Started
                </div>
                     <div>
                    Upcoming
                </div>
            </div>
            </div>
        </div>
            <div className="cardWrapper">
              {
                courses.map(c=><CourseCard key={c.title} course={c}/>)
              }
            </div>
        </div>
    </CourseWrapper>
  )
}

export default Course