import {styled} from "styled-components"

export const CourseRoomWrapper = styled.div`

padding:0 2rem;

.courseRoomMainContainer{
    display:flex;
    flex-direction:column;
    gap:2rem;
    .roomHeader{
        display:flex;
        align-items:center;
        justify-content:space-between;
        .headerLeft{
            display:flex;
            flex-direction:column;
            gap:5px;
            .courseTitle{
                
                letter-spacing:1px;
                
            }
            .startTime{
                color:gray;
                font-size:13px;
                letter-spacing:0.9px;
            }
        }
        .headerRight{
            display:flex;
            gap:1rem;
            align-items:center;
            .leaveButton{
                
            }
        }
    }
    .bottomWrapper{
  
        height:70vh;
        border-radius:8px;
        .actionBox{
            display:flex;
            align-items:center;
            justify-content:space-between;
            height:150px;

            .actionLeft{
                display:flex;
                align-items:center;
                gap:8px;
                cursor:pointer;

                svg{
                    font-size:1rem;
                    fill:gray;
                }   
                p{
                    color:gray;
                    font-size:12px;
                }
            }


            .actionRight{
                display:flex;
                gap:10px;
                align-items:center;
                .leaveButton{
                    color:black;
                border:none;
                border-radius:3px;
                font-size:16px;
                letter-spacing:1px;
                padding:0 2rem;
                height:40px;
                background:#546de5;
                color:white;
                
                }
                .raiseHand{
                    display:flex;
                    width:100px;
                    flex-direction:column;
                    align-items:center;
                    gap:5px;
                    position:relative;
                  
                    p{
                        top:-20px;
                        font-size:10px;
                        color:gray;
                        position:absolute;
                        letter-spacing:1px;
                    }
                }
            }
        }

    }
    .roomParticipantsWrapper{
        display:flex;
        flex-wrap:wrap;
       align-items:center;
    
        gap:0.5rem 0.2rem;
       
        
    }
}
    `