import { UserSetupWrapper } from './UserSetup.styles'
import Navbar from '../../../components/Navbar/Navbar'

const UserSetup = () => {
  return (
    <UserSetupWrapper>
        <Navbar/>
        <div className="userSetupContainer">
            <div className="userSetupContent">
                <div className="setupHeader">
                    <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/change-user-male.png" alt="change-user-male"/>
                    <h4 className='headerText'>Lets setup your profile</h4>
                </div>
                <div className="imageBox">
                    <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/guest-male--v1.png" alt="guest-male--v1"/>
                </div>
                <input type="text" placeholder='username' />
                <button className='uploadImage'>Upload Image</button>
                <button className='nextButton'>Next</button>
            </div>
        </div>
    </UserSetupWrapper>
  )
}

export default UserSetup