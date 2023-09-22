import { OtpWrapper } from './Otp.styles'
import Navbar from '../../../components/Navbar/Navbar'
import {LiaAngleDoubleRightSolid} from "react-icons/lia"
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { confirmOtpApi } from '../../../utils/Api'
const Otp = () => {
    const  state = useLocation().state;
    const inputRefs = Array.from({ length: 4 }, () => useRef<HTMLInputElement>(null));
    const [code,setCode] =useState("")
    const navigate =useNavigate()
    const [isLoading,setIsLoading] =useState(false)

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

              setIsLoading(true)
                
           const {status,data} =  await confirmOtpApi(state); 
           if(status===200){
            if(data.message.verified){
              navigate("/courses")
            }else{
              navigate("/usersetup",{state:state.email});
            }
           }else throw new Error(data.message)
            } catch (error) {
              setIsLoading(false)
                console.log(error)
            }
        }
   }
    



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

                <button className={`nextButton ${isLoading && "isLoading"  }`} onClick={handleConfirmOpt}>
                  {
                    isLoading ? <iframe width={"30px"} height={"30px"} src="https://lottie.host/?file=280707aa-34b8-419d-9930-d40c482a843f/MnU3QSAi0U.json"></iframe>:
                    <>
                    
                   <p>Next</p>
                    <LiaAngleDoubleRightSolid/>
                    </>
                  } 
                </button>
            </div>
        </div>
    </OtpWrapper>
  )
}

export default Otp