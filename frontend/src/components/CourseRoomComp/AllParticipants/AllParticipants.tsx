import { RemoteUsers } from "../../../utils/Types"
import ParticipantsBox from "../../ParticipantsBox/ParticipantsBox"
import { AllParticipantsWrapper } from "./AllParticipants.styles"

type AllParticipantsPropsType={
  users:RemoteUsers
}

const AllParticipants:React.FC<AllParticipantsPropsType> = ({users}) => {



  return (
    <AllParticipantsWrapper>
 
            <div className="participantsHeader">
                <p className='participantsHeaderText'>All Participants (45+)</p>
            </div>
            <div className="participantsWrapper">

                {
                  Object.entries(users).map(([uid,user])=><ParticipantsBox key={uid} user={user}/>)
                }
                </div>
         
    </AllParticipantsWrapper>





 


  )
}

export default AllParticipants