import { OtpWrapper } from './Otp.styles'
import Navbar from '../../../components/Navbar/Navbar'
import {FaArrowRightLong} from "react-icons/fa6"
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { confirmOtpApi } from '../../../utils/Api'
const Otp = () => {
    const  state = useLocation().state;
    const inputRefs = Array.from({ length: 6 }, () => useRef<HTMLInputElement>(null));
    const [code,setCode] =useState("")
    const navigate =useNavigate()

    const handleKeyUp = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && index > 0 && e.currentTarget.value === '') {
      inputRefs[index - 1]?.current?.focus();
    } else if (index < inputRefs.length - 1 && e.currentTarget.value.length === 1) {
      inputRefs[index + 1]?.current?.focus();
    }
    }; 
   const handleInputChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
  //  console.log(value)
   if(value){
     setCode(prev=>prev +value);
   }else{
    setCode(prev=>prev.slice(0,-1));
   }
    if (value.length > 1) {
      // Ensure only one character is allowed in each input field
      e.currentTarget.value = value.charAt(0);
    }else{
      // setCode(prev=>{
      //   return prev.slice(0,-1);
      // })
    }
   }  ;

   useEffect(()=>{

    if(!state){
        navigate(-1)
    }
    

   },[state])


   const handleConfirmOpt=async()=>{
        if(state){
            try {

                
           const {status} =  await confirmOtpApi(state); 
           if(status===200){
            navigate("/usersetup",{state:state.email});
           }
            } catch (error) {
                console.log(error)
            }
        }
   }
    console.log(code)



  return (
    <OtpWrapper>
        <Navbar/>
        <div className="otpContainer">
            <div className="otpContent">
                <div className="otpHeader">

                    <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/forgot-password.png" alt="forgot-password"/>
                    <h4 className='headerText'>Enter Otp we just sent  to your number</h4>
                </div>
                <div className='otpBox'>
            
                         {inputRefs.map((inputRef, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          ref={inputRef}
          onKeyUp={(e) => handleKeyUp(index, e)}
          onChange={(e) => handleInputChange(index, e)}
        />
      ))}
            

                </div>
                <p className='resendLink'>Didn't receive ?  Resend again .</p>

                <button className='nextButton' onClick={handleConfirmOpt}>
                    <p>Next</p>
                    <FaArrowRightLong/>
                </button>
            </div>
        </div>
    </OtpWrapper>
  )
}

export default Otp