import {styled} from "styled-components"

export const TutorScreenWrapper= styled.div`

// background:var(--light_bg);
padding : 1rem ;
display:flex;
gap:2rem;

.videoWrapper{
    border:3px solid var(--primary_color);
 
    border-radius:10px;
    overflow:hidden;
    width:500px;
    height:450px;
  
    video{
        border-radius:10px;
        width:100%;
        height:100%;
    

    }
}
.screenSharing{
    flex:1;
    background:var(--light_bg);
    height:450px;
    border-radius:10px;
    display:flex;
    justify-content:center;
    align-items:center;
    .initialBox{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:10px;
        svg{
            font-size:4rem;
        }
        p{
            font-size:18px;
            letter-spacing:1px;
        }
    }
}

`