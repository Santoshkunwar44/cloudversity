
import { IAgoraRTCRemoteUser } from 'agora-rtc-sdk-ng'
import { ParticipantsBoxWrapper } from './Participants.styles'
import { useEffect } from 'react'

type ParticipantType={
  user:IAgoraRTCRemoteUser
}
const ParticipantsBox:React.FC<ParticipantType> = ({user}) => {

    useEffect(()=>{
    if(user){
      if(user.hasAudio){
        user.audioTrack?.play()
      }
    }
     },[user])
     
    const borderColors={
        "0":"#37e710",
        "1":"#546de5",
        "2":"#ff793f",
        "3":"#e84393",
        "4":"#f6b93b"

    }

    function getRandomNo(){
        return Math.floor(Math.random()*5).toString()
    }
  return (
    <ParticipantsBoxWrapper isSpeaking={false} borderColor={borderColors[getRandomNo()]}>

        <img src="https://images.pexels.com/photos/18125686/pexels-photo-18125686/free-photo-of-woman-posing-at-night.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" alt="" />
        <p className='participantName'>John</p>

    </ParticipantsBoxWrapper>
  )
}

export default ParticipantsBox