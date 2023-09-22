import {styled} from "styled-components"

export const CourseWrapper = styled.div`

padding:0 2rem;

.courseMainContainer{
    height:90vh;
    display:flex;
    flex-direction:column;
    padding:2rem 0 ;
    gap:2rem;
    .courseHeader{
        display:flex;
        justify-content:space-between;
        align-items:center;
        .courseLeft{
            display:flex;
            gap:2rem;
            align-items:center;
            
            .searchBox{
                padding:0 10px;
                height:45px;
                background:var(--light_bg);
                width:350px;
                border-radius:6px;
                input{
                    height:100%;
                    width:100%;
                    background:transparent;
                    border:none;
                    outline:none;
                    color:gray;
                    letter-spacing:1px;

                    &::placeholder{
                        font-size:14px;
                        color:gray;
                        letter-spacing:1px;
                    }
                }
            }
        }
        .headerText{
            font-size:1.6rem;
            color:var(--primary_color);
            letter-spacing:1px;
            font-weight:100;
            position:relative;
            display:inline;
        
            &::after{
                content:"";
                bottom:-0.5rem;
                width:100%;
                left:0rem;
                border-radius:4px;
                position:absolute;
                height:4px;
                background: linear-gradient(to right, #37e710, #37e710, #37e7109c, #24830f, #1e6f0c, #196a07);


            }
      
        }

        
                .courseRight{
        
                    .filterBox{
                        width:300px;
                        display:flex;
                        border:2px solid var(--primary_color);
                        padding:3px;
                        border-radius:4px;
                        gap:5px;
                        height:50px;
                        div{
                            flex:1;
                            display:flex;
                            align-items:center;
                            color:gray;
                            letter-spacing:1px;

                            justify-content:center;
                            font-size:12px;
                            border-radius:2px;
                            color:white;
                            letter-spacing:1px;
                            cursor:pointer;
                            background:#1e1e1e;

                            
                        }
                        .active{
                            background:var(--primary_color);
                            color:black;
                            
                        }
                    }
        
        
                }
        
    }

    .cardWrapper{
        display:flex;
        gap:1rem;
        flex-wrap:wrap;
    }
}



`