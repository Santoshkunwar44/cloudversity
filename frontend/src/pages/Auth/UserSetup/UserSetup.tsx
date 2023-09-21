import { UserSetupWrapper } from './UserSetup.styles'
import Navbar from '../../../components/Navbar/Navbar'
import { useLocation, useNavigate } from 'react-router-dom'
import { ChangeEvent, SyntheticEvent, useRef, useState } from 'react'
import useUploadImage from '../../../hooks/useUploadImage'
import { setupUserApi } from '../../../utils/Api'

export type SetupUserType={
    username:string,
    image:string,
    password:string,
    file?:null|File,
    email?:string
}
type handleUploadImageReturType={
    url:string,
    success:boolean
}


const UserSetup = () => {

    const state  = useLocation().state
    const fileRef:React.MutableRefObject<HTMLInputElement|null> = useRef(null)
    const {upload}= useUploadImage()
    const navigate = useNavigate()
    const [userData,setUserData] = useState<SetupUserType>({
        username:"",
        password:"",
        image:"",
        file:null
    }) 

    console.log(state )

    const handleInputChange=(e:ChangeEvent<HTMLInputElement>)=>{
        const {name} = e.target;
        if(name==="file" && e.target.files){
            const currFile = e.target.files;
                setUserData(prev=>({...prev,file:currFile[0]}))
                return ;
            
        }
        setUserData((prev:SetupUserType)=>({...prev,[e.target.name]:e.target.value}))
        
    }

    const handleUserSetupSubmit=async(e:SyntheticEvent)=>{
        e.preventDefault()

        try {
        const {url,success} =  await  handleUploadImage();
        

        if(!success || !state){
            return;
        }
        const setupPayload = {
            ...userData,
            image:url, 
            email:state,
        }

          delete setupPayload.file
          const {status} =  await setupUserApi(setupPayload)
          if(status===200){
            navigate("/welcome")
          }
        } catch (error) {
            
        }

    }

    const handleUploadImage=async():Promise<handleUploadImageReturType>=>{
        if(!userData.file){
            // alert 
            return {url:"",success:false}
        }
        try {
            
            const {url,success}  =await upload(userData.file)
            if(success){
             return {url,success:true}
            }else{
                throw new Error("failed to upload")
            }
        } catch (error) {
               return {url:"",success:false}
        }

    }


  return (
    <UserSetupWrapper>
        <Navbar/>
        <div className="userSetupContainer">
            <form  className="userSetupContent" onSubmit={handleUserSetupSubmit}>
                <div className="setupHeader">

                    <img width="94" height="94" src={userData.file ? URL.createObjectURL(userData.file) :"https://img.icons8.com/3d-fluency/94/change-user-male.png" } alt="change-user-male"/>
                    <h4 className='headerText'>Lets setup your profile</h4>
                </div>
              
                <input type="text" name='username' placeholder='username' onChange={handleInputChange} required/>
                <input type="password" name="password" placeholder='password' onChange={handleInputChange} required/>
                <input type="file" name="file" onChange={handleInputChange} ref={fileRef}  style={{display:"none"}}/>
                <div className="buttonWrapper">
                <button className='uploadImage' onClick={()=>fileRef.current?.click()}>Upload Image</button>
                <button className='nextButton'>Next</button>
                </div>
            </form>
        </div>
    </UserSetupWrapper>
  )
}

export default UserSetup


