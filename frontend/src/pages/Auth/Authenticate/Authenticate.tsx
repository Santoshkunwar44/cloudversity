import { AiOutlineMail } from 'react-icons/ai'
import Navbar from '../../../components/Navbar/Navbar'
import { AuthenticateWrapper } from './Authenticate.styles'
import { MdPhoneAndroid } from 'react-icons/md'
import { useState } from 'react'
import { ConstantVar } from '../../../utils/Types'

const Authenticate = () => {



    const [authTab,setAuthtab] = useState(ConstantVar.PHONE_TAB)
    const handleChangeAuthTab=(type:ConstantVar.EMAIL_TAB | ConstantVar.PHONE_TAB)=>{
        setAuthtab(type)
    }


    const AuthMap={
    [ConstantVar.EMAIL_TAB] : <EmailAuthentication/>,
    [ConstantVar.PHONE_TAB]:<PhoneAuthentication/>
    }
console.log(authTab)
  return (
    <AuthenticateWrapper>

        <Navbar/>
        <div className="authenticateContainer">

            <div className="authenticateContent">
                <div className='authOptionBox'>

                    <div className={`optionItem ${authTab===ConstantVar.PHONE_TAB ? "activeOption":""}`}onClick={()=>handleChangeAuthTab(ConstantVar.PHONE_TAB)}>
                        <MdPhoneAndroid/>
                    </div>
                    <div className={`optionItem ${authTab===ConstantVar.EMAIL_TAB ? "activeOption":""}`} onClick={()=>handleChangeAuthTab(ConstantVar.EMAIL_TAB)}>
                        <AiOutlineMail/>
                    </div>

                </div>
                <div className="authMainContent" >

                        {AuthMap[authTab]}
             
                    <button className='nextButton'>Next</button>
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


const EmailAuthentication=()=>{
    return <>
    
           <div className='header'>
                   <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/mail.png" alt="mail"/>
                    <p className='headerText'>Enter your email address</p>

                    </div>
                    <div  className="phoneNumberBox">


                    
                    <input type="email" name="" id="" placeholder='example@gmail.com'/>

                    </div>
    
    </>
}