import { ChangeEvent, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { CreateCourseWrapper } from './CreateCourse.styles'

const CreateCourse = () => {
    const [courseData,setCourseData] = useState({})

    const handleChangeInput  =(event:ChangeEvent<HTMLInputElement>)=>{
        const {name,value} = event.target;
        setCourseData(prev=>({...prev,[name]:value}))

    }
    const handleSelectChange=(event:ChangeEvent<HTMLSelectElement>)=>{
        const {name,value} = event.target;
        setCourseData(prev=>({...prev,[name]:value}))
    }

    const handleTextAreaChange=(event:ChangeEvent<HTMLTextAreaElement>)=>{
        const {name,value} = event.target;
        setCourseData(prev=>({...prev,[name]:value}))
    }

  return (
    <CreateCourseWrapper>
        <Navbar/>
        <div className="createCourseContainer">
                <div className="createContent">
                    <div className="createHeader">
                        <h1 className='headerText'>Upload Course</h1>
                        <p className='headerDesc'>Create your course which you want to provide . You may create a course for free or a paid . Remember that payment for the paid course is not handled by cloudveristy for now . You should manage payment by your own .  </p>

                    </div>
                    <form action="" className='formBox'>
                        <div className="inputItem">
                            <input type="text" name="title" placeholder='title for course' onChange={handleChangeInput} />
                        </div>
                        <div className='singleItem'>

                        <div className="inputItem">
                            <input type="text" name="title" placeholder='price' onChange={handleChangeInput} />
                        </div>
                        <div className="inputItem">
                            <select name="" id="" onChange={handleSelectChange}>
                                <option value="free">Free</option>
                                <option value="paid">Paid</option>
                            </select>
                        </div>
                        </div>
                        <div className="inputItem">
                            <input type="text" name="title" placeholder='title for course' onChange={handleChangeInput} />
                        </div>
                        <div className="inputItem">
                            <input type="text" name="title" placeholder='Ui/Ux design , Web developement ...' onChange={handleChangeInput} />
                        </div>
                        <div className="inputItem">
                            <input type="text" name="title" placeholder='Ui/Ux design , Web developement ...' onChange={handleChangeInput} />
                        </div>
                         <div className="inputItem">
                            <input type="text" name="startTime" placeholder='2022 3rd sep 11:00 PM'  onChange={handleChangeInput}/>
                        </div>
                        <div className="inputItem">
                        <textarea placeholder='description about the course ' name="" id=""   onChange={handleTextAreaChange}></textarea>
                        </div>
                    </form>
                </div>
        </div>
    </CreateCourseWrapper>
  )
}

export default CreateCourse