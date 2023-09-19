import { activeParticipants } from "../../../utils/data"
import ParticipantsBox from "../../ParticipantsBox/ParticipantsBox"
import { AllParticipantsWrapper } from "./AllParticipants.styles"

const AllParticipants = () => {
  return (
    <AllParticipantsWrapper>
 
            <div className="participantsHeader">
                <p className='participantsHeaderText'>All Participants (45+)</p>
            </div>
            <div className="participantsWrapper">

                {
                    activeParticipants.map(p=><ParticipantsBox key={p._id} participants={p}/>)
                }
                </div>
         
    </AllParticipantsWrapper>





 


  )
}

export default AllParticipants