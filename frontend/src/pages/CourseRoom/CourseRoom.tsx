import Navbar from '../../components/Navbar/Navbar'
import { Avatar, AvatarGroup } from '@chakra-ui/react'
import {BsArrowLeft} from "react-icons/bs"
import { CourseRoomWrapper } from './CourseRoom.styles'
import { activeParticipants } from '../../utils/data'
import ParticipantsBox from '../../components/ParticipantsBox/ParticipantsBox'

const CourseRoom = () => {
  return (
    <CourseRoomWrapper>
        <Navbar/>
        <div className="courseRoomMainContainer">
            <div className="roomHeader">
                <div className="headerLeft">
                    
                    <p className='courseTitle'>Nodejs Course for 1 week </p>
                    <p className='startTime'>Starts At 2023 Dec 23 , 2 : 00 AM</p>
                </div>
                <div className="headerRight">
                    <div className="participantBox">
                        <AvatarGroup size='sm' max={2}>
                            <Avatar   borderColor={"#37e710"} name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                            <Avatar  borderColor={"#37e710"}   name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                             <Avatar  borderColor={"#37e710"}  name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                            <Avatar   borderColor={"#37e710"}  name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                            <Avatar   borderColor={"#37e710"}  name='Christian Nwamba' src='https://bit.ly/code-beast' />
                        </AvatarGroup>

                    </div>
                    {/* <button className='leaveButton'>
                        Leave
                    </button> */}
                </div>
            </div>
            <div className="bottomWrapper">
                <div className="actionBox">
                    <div className='actionLeft'>
                        <BsArrowLeft/>
                        <p>Go back </p>
                    </div>
                    <div className="actionRight">
                        <div className="raiseHand">

                        <p>raise hand</p>
                        <img width="34" height="34" src="https://img.icons8.com/3d-fluency/94/hand--v2.png" alt="hand--v2"/>
                        </div>
                        <button className='leaveButton'>
                            Leave
                        </button>
                    </div>
                </div>

            <div className="roomParticipantsWrapper">
                {
                    activeParticipants.map(p=><ParticipantsBox key={p._id} participants={p}/>)
                }
            </div>
        </div>
                </div>

    </CourseRoomWrapper>
  )
}

export default CourseRoom