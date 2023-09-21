
import { WelcomeWrapper } from './Welcome.styles'
import Navbar from '../../../components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {
  const navigate = useNavigate()
  
  return (
    <WelcomeWrapper>
        <Navbar/>
        <div className="welcomeContentWrapper">
          <div className="welcomeCard">
            <div className='welcomeHeader'>
              <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/volunteering.png" alt="volunteering"/>
              <h3 className='welcomeText'>Welcome to Cloudversity</h3>

            </div>
            <p className='description'>Cloudversity is a online learning platform where professionals add their course on a specific time . And anyone interested can enroll to the availabe course . In these way , both tutor and learner got a great opportunity . Tutor can make their course either paid or free . 👋</p>
          <button className='startedButton' onClick={()=>navigate("/courses")}>
            Get started
          </button>
          </div>
        </div>
    </WelcomeWrapper>
  )
}

export default Welcome