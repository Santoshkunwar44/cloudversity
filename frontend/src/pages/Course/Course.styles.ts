import {styled} from "styled-components"

export const CourseWrapper = styled.div`

padding:2rem;

.courseMainContainer{
    height:90vh;
    display:flex;
    flex-direction:column;

    gap:2rem;
    .courseHeader{
        display:flex;
        justify-content:space-between;
        align-items:center;
        .headerText{
            font-weight:600;
            letter-spacing:1px;
        }

        .createButton{
            height:45px;
            background:var(--primary_color);
             color:black;
             border:none;
             outline:none;
             font-size:16px;
             letter-spacing:1px;
             padding:0 1rem;
             border-radius:4px;

        }

    }

    .cardWrapper{
        display:flex;
        gap:1rem;
        flex-wrap:wrap;
    }
}



`