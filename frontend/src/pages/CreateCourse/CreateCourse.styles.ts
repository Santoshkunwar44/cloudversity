import {styled} from "styled-components"

export const CreateCourseWrapper = styled.div`
width:100%;
.createCourseContainer{
    display:flex;
    justify-content:center;
    padding:2rem;
    .createContent{
        width:60%;
        display:flex;
        flex-direction:column;
        gap:2rem;
        .createHeader{
            width:100%;
            display:flex;
            flex-direction:column;
            gap:15px;
            .headerText{
                font-size:2rem;
                letter-spacing:1px;
            }
            .headerDesc{
                color:gray;
                font-size:15px;
            }
        }

        .formBox{
            display:flex;
            flex-wrap:wrap;
            gap:1.5rem;
            .singleItem{
               width:100%;
                gap:1.5rem;
            
                flex-wrap:wrap;
                display:flex;
            }
            .inputItem{
                min-width:300px;
                display:flex;
               
                flex-direction:column;
                gap:5px;
                flex:1;

                label{
                    color:gray;
                    font-size:10px;
                    letter-spacing:1px;
                }
                
                input,textarea,select{
                    height:55px;
                    outline:none;
                    border:none;
                    width:100%;
                    border-radius:5px;
                    padding:0 10px;
                    background:#151515;
                    font-size:12px;
                    letter-spacing:1px;
                    color:gray;

                    &::placeholder{
                        color:gray;
                        font-size:12px;

                    }
                }
                textarea{
                    padding:10px;
                    height:100px;
                }
            }
        }


    }


}

`