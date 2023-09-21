import {styled} from "styled-components"

export const CreateCourseWrapper = styled.div`
width:100%;
.createCourseContainer{
    display:flex;
    justify-content:center;
    padding:2rem;
    .createContent{
        width:80%;
        display:flex;
        flex-direction:column;
        gap:2rem;
        .createHeader{
            width:70%;
            display:flex;
            flex-direction:column;
            gap:15px;

            .headerDesc{
                color:gray;
            }
        }
    }
}

`