import {styled} from "styled-components"

export const CourseCardWrapper = styled.div`


min-width:350px;
flex:1;

height:200px;
background:var(--light_bg);
border-radius:10px;
padding:1rem;
display:flex;
flex-direction:column;
gap:1.5rem;
cursor:pointer;
.courseTop{
    display:flex;
    flex-direction:column;
    gap:1rem;
}
.couseTitle{
    color:var(--primary_color);
    letter-spacing:0.9px;
    
}
.tutorBox{
    display:flex;
    gap:10px;
    img{
        width:40px;
        height:40px;
        border:3px solid var(--primary_color);
        border-radius:50%;
        padding:3px;
    }
    .tutorName{
        color:var(--primary_color);
        letter-spacing:1px;
        font-size:15px;
        // color:rgb(168,168,168);
    }
    .starCount{
        font-size:12px;
       
        letter-spacing:1px;
         color:rgb(168,168,168);
    }
}

.courseBottom{

    display:flex;
    flex-direction:column;
    gap:10px;
    .startTime{
        font-size:12px;
        letter-spacing:1px;
        color:rgb(168,168,168);
    }
    .duration{
        letter-spacing:1px;
        color:rgb(168,168,168);
        font-size:12px;
    }
}
    `