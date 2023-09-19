
import  { useEffect, useRef } from 'react'
import { TutorScreenWrapper } from './TutorScreen.styles'
import {PiScreencastBold} from "react-icons/pi"
const TutorScreen = () => {

   const videoRef = useRef<HTMLVideoElement>(null)

   useEffect(()=>{
     navigator.mediaDevices.getUserMedia({audio:true,video:{
        width:{ideal:500},
        height:{ideal:450}
     }}).then((stream:MediaStream)=>{
        if(videoRef.current){
            videoRef.current.srcObject= stream
        }

    })
   })
  return (
    <TutorScreenWrapper>

        <div className='videoWrapper'>
          
                       <video autoPlay  ref={videoRef} muted/>

            

        </div>
        <div className='screenSharing'>
                    <div className='initialBox'>
                        <PiScreencastBold/>
                        <p>Tutor has not shared his screen .</p>
                    </div>
        </div>


    </TutorScreenWrapper>
  )
}

export default TutorScreen