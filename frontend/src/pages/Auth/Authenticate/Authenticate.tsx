import { AiOutlineMail } from 'react-icons/ai'
import Navbar from '../../../components/Navbar/Navbar'
import { AuthenticateWrapper } from './Authenticate.styles'
import React, { ChangeEvent, useState } from 'react'
import { ConstantVar } from '../../../utils/Types'
import { sentOtpApi } from '../../../utils/Api'
import { useNavigate } from 'react-router-dom'

type EmailAuthPropsType={
    handleInputChange:(e:ChangeEvent<HTMLInputElement>)=>void;
   
}

const Authenticate = () => {



    const [authTab,setAuthtab] = useState(ConstantVar.EMAIL_TAB);
    const [ emailInput,setEmailInput] = useState("")
    const navigate =useNavigate()
    const handleChangeAuthTab=(type:ConstantVar.EMAIL_TAB | ConstantVar.PHONE_TAB)=>{
        setAuthtab(type)
    }
    const changeEmailInput=(e:ChangeEvent<HTMLInputElement>)=>{
        setEmailInput(e.target.value)
    }
    const handleSubmit=async()=>{
        try {
           const {status,data}=  await sentOtpApi(emailInput)
           if(status===200){
            const authData = data.message
            console.log(authData)
            navigate("/otp-confirmation",{state:authData})
           }
        } catch (error) {
            console.log(error)
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
             
                    <button className='nextButton' onClick={handleSubmit}>Next</button>
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