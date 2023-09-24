import {styled} from "styled-components"


export const RoomHeaderWrapper = styled.div`

    display:flex;
    align-items:center;
    justify-content:space-between;


            .headerLeft{
            display:flex;
            flex-direction:column;
            gap:5px;
            .courseTitle{
                font-size:22px;
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

`