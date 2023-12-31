import {styled} from "styled-components"

export const CourseCardWrapper = styled.div`


min-width:350px;
flex:1;


background:#1e1e1d7a;
border-radius:10px;
padding:1.3rem;
display:flex;
flex-direction:column;
gap:1rem;
cursor:pointer;
.courseTop{
    display:flex;
    flex-direction:column;
    gap:1rem;
}
.couseTitle{

    letter-spacing:0.9px;
    color:rgb(168,168,168);
}
.tutorBox{
    display:flex;
    
    img{
        width:40px;
        height:40px;
        border:3px solid  var(--primary_color);
        object-fit:cover;
        border-radius:50%;
        padding:3px;
    }
    .tutorName{
         color:rgb(168,168,168);
        letter-spacing:1px;
        font-size:15px;
        
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
        color:#6c5ce7;
    }
    .duration,.courseName{
        letter-spacing:1px;
        color:rgb(168,168,168);
        font-size:12px;
    }
    .startedTime{
        color:var(--primary_color)
    }
}
    `