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
            font-weight:600;
            letter-spacing:1px;
      
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
                            background:rgb(55 231 16 / 18%);

                            
                        }
                        .active{
                            background:var(--primary_color);
                            color:white;
                            
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