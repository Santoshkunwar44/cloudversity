import { AiOutlineMail } from 'react-icons/ai'
import Navbar from '../../../components/Navbar/Navbar'
import { AuthenticateWrapper } from './Authenticate.styles'
import React, { ChangeEvent, useState } from 'react'
import { ConstantVar } from '../../../utils/Types'
import { sentOtpApi } from '../../../utils/Api'
import { useNavigate } from 'react-router-dom'
import { FaArrowRightLong } from 'react-icons/fa6'
import { LiaAngleDoubleRightSolid } from 'react-icons/lia'

type EmailAuthPropsType={
    handleInputChange:(e:ChangeEvent<HTMLInputElement>)=>void;
   
}

const Authenticate = () => {



    const [authTab,setAuthtab] = useState(ConstantVar.EMAIL_TAB);
    const [ isLoading,setIsLoading] =useState(false)
    const [ emailInput,setEmailInput] = useState("")
    const navigate =useNavigate()
    const handleChangeAuthTab=(type:ConstantVar.EMAIL_TAB | ConstantVar.PHONE_TAB)=>{
        setAuthtab(type)
    }
    const changeEmailInput=(e:ChangeEvent<HTMLInputElement>)=>{
        setEmailInput(e.target.value)
    }
    const handleSubmit=async()=>{
        setIsLoading(true)
        try {
           const {status,data}=  await sentOtpApi(emailInput)
           if(status===200){
            const authData = data.message
            setIsLoading(false)
            navigate("/otp-confirmation",{state:authData})
           }else{
            throw new Error("something went wrong")
           }
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }
    const AuthMap={
    [ConstantVar.EMAIL_TAB] : <EmailAuthentication handleInputChange={changeEmailInput}/>,
    [ConstantVar.PHONE_TAB]:<PhoneAuthentication/>
    }

  return (
    <AuthenticateWrapper>

        <Navbar/>
        <div className="authenticateContainer">

            <div className="authenticateContent">
                <div className='authOptionBox'>

                    {/* <div className={`optionItem ${authTab===ConstantVar.PHONE_TAB ? "activeOption":""}`}onClick={()=>handleChangeAuthTab(ConstantVar.PHONE_TAB)}>
                        <MdPhoneAndroid/>
                    </div> */}
                    <div className={`optionItem ${authTab===ConstantVar.EMAIL_TAB ? "activeOption":""}`} onClick={()=>handleChangeAuthTab(ConstantVar.EMAIL_TAB)}>
                        <AiOutlineMail/>
                    </div>

                </div>
                <div className="authMainContent" >

                        {AuthMap[authTab]}
             
                    <button className={`nextButton ${isLoading && "isLoading"}`} onClick={handleSubmit}>
                        {isLoading ? <iframe width={"30px"} height={"30px"} src="https://lottie.host/?file=280707aa-34b8-419d-9930-d40c482a843f/MnU3QSAi0U.json"></iframe> :<>
                        <p>Next</p>
                         <LiaAngleDoubleRightSolid/>
                        </>}
                    </button>
                    <p className='desc'> By entering number  you are agreeing our  Terms Of Service And Privacy .</p>

                </div>
            </div>
        </div>

    </AuthenticateWrapper>
  )
}

export default Authenticate


const PhoneAuthentication=()=>{
     

    return  <>
    
     <div className='header'>
                   <img width="34" height="34" src="https://img.icons8.com/3d-fluency/94/phone.png" alt="phone"/>
                    <p className='headerText'>Enter your phone number</p>

                    </div>
                    <div  className="phoneNumberBox">


                    <select name="" id="">
                        <option value="+977">+977</option>
                        <option value="+61">+61</option>
                    </select>
                    <input type="number" name="" id="" placeholder='9819391239'/>

                    </div>
    </> 
}


const EmailAuthentication:React.FC<EmailAuthPropsType>=({handleInputChange})=>{
    return <>
    
           <div className='header'>
                   <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/mail.png" alt="mail"/>
                    <p className='headerText'>Enter your email address</p>

                    </div>
                    <div  className="phoneNumberBox">


                    
                    <input type="email" name="" id="" placeholder='example@gmail.com' onChange={handleInputChange}/>

                    </div>
    
    </>
}