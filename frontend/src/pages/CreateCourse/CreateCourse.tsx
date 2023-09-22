import { ChangeEvent, SyntheticEvent , useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { CreateCourseWrapper } from './CreateCourse.styles'
import { Coursetype } from '../../utils/Types'
import { useSelector } from 'react-redux'
import { State } from '../../redux/reducer'
import { useNavigate } from 'react-router-dom'
import { createNewCourseApi } from '../../utils/Api'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
const CreateCourse = () => {
    const {user} =useSelector((state:State)=>state.user)
    const [courseData,setCourseData] = useState<Coursetype>({
        title:"",
        duration:0,
        noOfDays:1,
        price:0,
        feeType:"Free",
        startTime:Date.now(),
        tutor:"",
        course:"",
        description:""
    })  
    const [startTime,setStartTime] =useState(new Date())
    const navigate =useNavigate();



    const handleChangeInput  =(event:ChangeEvent<HTMLInputElement>)=>{

    

        let  {name,value} = event.target;

        if(name==="duration" || name==="price" || name=== "noOfDays"){
            setCourseData(prev=>({...prev,[name]:+value}))
            return;
        }


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

    const handleStartDate =(date:Date)=>{
        const userSelectedTime=new Date(date).getTime()
        if(userSelectedTime<Date.now()){
            setStartTime(new Date())
            setCourseData(prev=>({...prev,startTime:Date.now()}))
        }else{
            setStartTime(date)
            setCourseData(prev=>({...prev,startTime:userSelectedTime})) 
        }
    }
    const handleSubmit=async(e:SyntheticEvent)=>{
        if(!user?._id)return;
        e.preventDefault()
        const uploadPayload={
            ...courseData,
            tutor:user?._id
        }
        try {
           const {status} = await createNewCourseApi(uploadPayload);
           if(status===200){
                navigate("/courses")
           }
        } catch (error) {
            console.log(error)
        }
    }

    console.log(courseData)

  return (
    <CreateCourseWrapper>
        <Navbar/>
        <div className="createCourseContainer">
                <div className="createContent">
                    <div className="createHeader">
                        <h1 className='headerText'>Upload Course</h1>
                        <p className='headerDesc'>Create your course which you want to provide . You may create a course for free or a paid . Remember that payment for the paid course is not handled by cloudveristy for now . You should manage payment by your own .  </p>

                    </div>
                    <form  className='formBox' onSubmit={handleSubmit}>
                        <div className='inputWrapper'>

                        <div className="inputItem">
                            <input  className="courseInput" type="text" name="title" placeholder='title for course' onChange={handleChangeInput} />
                        </div>
                        <div className='singleItem'>

                        <div className="inputItem">
                            <input  className="courseInput" type="text" name="price" placeholder='price' onChange={handleChangeInput} />
                        </div>
                        <div className="inputItem">
                            <select name="feeType" id="" onChange={handleSelectChange}>
                                <option value="free">Free</option>
                                <option value="paid">Paid</option>
                            </select>
                        </div>
                        </div>
                        <div className="inputItem">
                            <input  className="courseInput" type="number" name="noOfDays" placeholder='Number of days' onChange={handleChangeInput} />
                        </div>
                        <div className="inputItem">
                            <input className="courseInput"  type="number" name="duration" placeholder='60 min' onChange={handleChangeInput} />
                        </div>
                        <div className="inputItem">
                            <input  className="courseInput" type="course" name="course" placeholder='Course : Ui/Ux design , Web developement ...' onChange={handleChangeInput} />
                        </div>
                         <div className="inputItem">
                             <DatePicker
                                    className='datePicker'
                                    selected={startTime}
                                    onChange={(date:Date) => handleStartDate(date)}
                                    
                                    showTimeInput
                                    timeInputLabel="Time:"
            //   filterTime={filterPassedTime}
                                    dateFormat="yyyy/MM/dd , h:mm aa"
            />

                        </div>
                        <div className="inputItem">
                        <textarea placeholder='description about the course ' name="description"   onChange={handleTextAreaChange}></textarea>
                        </div>
                        </div>


                        <button className="createButton">create course</button>
 
                    </form>
                </div>
        </div>
    </CreateCourseWrapper>
  )
}

export default CreateCourse