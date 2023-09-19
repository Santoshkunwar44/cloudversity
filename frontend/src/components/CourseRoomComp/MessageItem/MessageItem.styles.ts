import {styled} from "styled-components"

export const MessageItemWrapper = styled.div`

display:flex;
align-items:flex-start;
gap:10px;

    .userImage{
        border:2px solid var(--primary_color);
        padding:3px;
        width:53px;
        height:53px;
        border-radius:50%;
        object-fit:cover;

    
}
.messageRight{

    display:flex;
    flex:1;
    flex-direction:column;
    gap:5px;
    .rightTop{
        align-items:center;
        display:flex;
        gap:10px;
        .username{
            font-size:14px;
            color:var(--primary_color);
        }
        .time{
            color:gray;
            font-size:12px;
        }
    }
    .content{
        letter-spacing:0.8px;
        font-size:12px;
        color:white;
    }

}
`