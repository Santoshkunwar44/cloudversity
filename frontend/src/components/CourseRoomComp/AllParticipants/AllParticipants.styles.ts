import {styled} from "styled-components";


export const AllParticipantsWrapper = styled.div`

        display:flex;
        flex:6;
        flex-direction:column;
        gap:2rem;
            .participantsHeader{
             height:60px;
            display:flex;
            align-items:center;


             
            .participantsHeaderText{
            display:inline;
            position:relative;
            letter-spacing:1px;
            
            &:before{
                position:absolute;
                content:"";
                width:100%;
                height:3px;
                bottom:-10px;
                border-radius:1px;
                background:linear-gradient(45deg,var(--primary_color),#37e7107a,#37e71030);

            }
                

            }
        }
          .participantsWrapper{
            display:flex;
            flex-wrap:wrap;
            
            gap:0.5rem 0.2rem;
            
            
        }

`