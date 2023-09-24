import { BsArrowLeft, BsFillMicFill } from 'react-icons/bs'
import { RoomActionsWrapper } from './RoomActions.styles'
import { FaHandPaper } from 'react-icons/fa'
import { AiOutlineRollback } from 'react-icons/ai'

const RoomActions = () => {
  return (
    <RoomActionsWrapper>
            <div className='actionLeft'>
                        <BsArrowLeft/>
                        <p>Go back </p>
                    </div>
                    <div className="actionRight">
                        <div className="micBox">
                            <BsFillMicFill />
                        </div>
                        <div className="raiseHand">

                        
                        <FaHandPaper/>
                        </div>
                        <button className='leaveButton'>
                            <AiOutlineRollback/>
                            <p>Leave</p>
                            
                        </button>
                    </div>
    </RoomActionsWrapper>
  )
}

export default RoomActions