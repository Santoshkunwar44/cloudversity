import { Avatar, AvatarGroup } from '@chakra-ui/react'
import { RoomHeaderWrapper } from './RoomHeader.styles'

const RoomHeader = () => {
  return (
    <RoomHeaderWrapper>

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
                
                </div>

    </RoomHeaderWrapper>
  )
}

export default RoomHeader