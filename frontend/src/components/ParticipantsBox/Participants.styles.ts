import {styled} from "styled-components"


type ParticipantsBoxWrapperProps={
    isSpeaking:boolean,
    borderColor:string
}

export const ParticipantsBoxWrapper= styled.div<ParticipantsBoxWrapperProps>`


display:flex;
align-items:center;
flex-direction:column;
gap:5px;
width:80px;
cursor:pointer;
transition:all .3s ease;
&:hover{
    scale:1.04;
}
img{
    width:53px;
    height:53px;
    border-radius:50%;
    padding:3px;
    border:2px solid  ${(props)=>props.borderColor ? props.borderColor :""};
    object-fit:cover;
}
.participantName{
    font-size:10px;
    letter-spacing:1px;
    color:white;
    
    
}
`