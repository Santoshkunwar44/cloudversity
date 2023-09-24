import {styled} from "styled-components"

export const CourseRoomWrapper = styled.div`

padding:0 2rem;
display:flex;
flex-direction:column;
gap:2rem;
.courseRoomMainContainer{
    display:flex;
    flex-direction:column;
    gap:3rem;
    .roomHeader{
        display:flex;
        align-items:center;
        justify-content:space-between;
    }
    .bottomWrapper{
        height:70vh;
        border-radius:8px;
        display:flex;
        flex-direction:column;
        gap:2rem;
        .actionBox{
          
     
        }

        .participantsAndLiveChatContainer{
            display:flex;
        }

    }
 
}
    `