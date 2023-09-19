
import { ParticipantsBoxWrapper } from './Participants.styles'

const ParticipantsBox = ({participants}) => {
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
    <ParticipantsBoxWrapper isSpeaking={participants.isSpeaking} borderColor={borderColors[getRandomNo()]}>

        <img src={participants.image} alt="" />
        <p className='participantName'>{participants.username}</p>

    </ParticipantsBoxWrapper>
  )
}

export default ParticipantsBox