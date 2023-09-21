import Navbar from '../../components/Navbar/Navbar'
import { CreateCourseWrapper } from './CreateCourse.styles'

const CreateCourse = () => {
  return (
    <CreateCourseWrapper>
        <Navbar/>
        <div className="createCourseContainer">
                <div className="createContent">
                    <div className="createHeader">
                        <h1>Upload Course</h1>
                        <p className='headerDesc'>Create your course which you want to provide . You may create a course for free or a paid . Remember that payment for the paid course is not handled by cloudveristy for now . You should manage payment by your own .  </p>

                    </div>
                    <form action="">
                        <div className="inputItem">
                            <label htmlFor="">title</label>
                            <input type="text" name="title" placeholder='title for course' />
                        </div>
                        <div className="inputItem">
                            <label htmlFor="">description </label>
                            <input type="text" name="title" placeholder='title for course' />
                        </div>
                        <div className="inputItem">
                            <label htmlFor="">price</label>
                            <input type="text" name="title" placeholder='title for course' />
                        </div>
                        <div className="inputItem">
                            <label htmlFor="">Fee </label>
                            <input type="text" name="title" placeholder='title for course' />
                        </div>
                        <div className="inputItem">
                            <label htmlFor="">Duration </label>
                            <input type="text" name="title" placeholder='title for course' />
                        </div>
                        <div className="inputItem">
                            <label htmlFor="">Course</label>
                            <input type="text" name="title" placeholder='Ui/Ux design , Web developement ...' />
                        </div>
                        <div className="inputItem">
                            <label htmlFor="">Number of days</label>
                            <input type="text" name="title" placeholder='Ui/Ux design , Web developement ...' />
                        </div>
                         <div className="inputItem">
                            <label htmlFor="">Start Time</label>
                            <input type="text" name="startTime" placeholder='2022 3rd sep 11:00 PM' />
                        </div>
                    </form>
                </div>
        </div>
    </CreateCourseWrapper>
  )
}

export default CreateCourse