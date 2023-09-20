import { OtpWrapper } from './Otp.styles'
import Navbar from '../../../components/Navbar/Navbar'
import {FaArrowRightLong} from "react-icons/fa6"
import { useLocation } from 'react-router-dom'
const Otp = () => {
    const  state = useLocation().state;
    console.log("auth data",state)

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
            
                    <input type="number" name="" id="" />
                    <input type="number" name="" id="" />
                    <input type="number" name="" id="" />
                    <input type="number" name="" id="" />

                </div>
                <p className='resendLink'>Didn't receive ?  Resend again .</p>

                <button className='nextButton'>
                    <p>Next</p>
                    <FaArrowRightLong/>
                </button>
            </div>
        </div>
    </OtpWrapper>
  )
}

export default Otp