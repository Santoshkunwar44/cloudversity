import Navbar from '../../components/Navbar/Navbar'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { CourseRoomWrapper } from './CourseRoom.styles'

const CourseRoom = () => {
  return (
    <CourseRoomWrapper>
        <Navbar/>
        <div className="courseRoomMainContainer">
            <div className="roomHeader">
                <div className="headerLeft">
                    <h3>Nodejs Course for 1 week </h3>
                </div>
                <div className="headerRight">
                    <div className="participantBox">
                        <AvatarGroup size='md' max={2}>
                            <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                            <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                             <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                            <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                            <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                        </AvatarGroup>

                    </div>
                </div>
            </div>
        </div>

    </CourseRoomWrapper>
  )
}

export default CourseRoom