import {styled} from "styled-components";


export const WelcomeWrapper=styled.div`

display:flex;
flex-direction:column;
align-items:center;
gap:2rem;
.welcomeCard{
    background:var(--light_bg);
    max-width:650px;
    width:95%;
    padding:2rem;
    border-radius:10px;
    display:flex;
    flex-direction:column;
    gap:1.5rem;
    align-items:center;
    .welcomeHeader{
        display:flex;
        gap:0.5rem;
        align-items:center;
        img{
            width:34px;
            height:34px;
        }
        .welcomeText{
       
            font-size:20px;
            font-weight:600;
            letter-spacing:1px;
        }
    }
    .description{
        letter-spacing:0.8px;
        line-height:25px;
        color:gray;
        text-align:justify;

    }
    .startedButton{
        height:45px;
        padding:0 1rem;
        background:var(--primary_color);
        width:fit-content;
        border-radius:4px;
    }
}
`