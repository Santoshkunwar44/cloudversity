import {styled} from "styled-components"

export const CreateCourseWrapper = styled.div`

width:100%;

.createCourseContainer{

    display:flex;
    justify-content:center;
    padding:2rem;

    .createContent{
        width:50%;
        display:flex;
        flex-direction:column;
        gap:2rem;

        .createHeader{
            color:var(--primary_color);
            width:100%;
            display:flex;
            flex-direction:column;
            gap:10px;

            .headerText{
                font-size:1.7rem;
                text-transform:uppercase;
                letter-spacing:1px;
            }

            .headerDesc{
                color:gray;
                font-size:14px;
                letter-spacing:1px;
            }

        }

        .formBox{
            display:flex;
            flex-direction:column;
            gap:2rem;

            .inputWrapper{
                display:flex;
                flex-wrap:wrap;
                gap:0.8rem;
            }

            .singleItem{
               width:100%;
                gap:0.8rem;
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
                
                .courseInput,.datePicker,textarea,select{
                    height:55px;
                    outline:none;
                    border:none;
                    width:100%;
                    border-radius:2px;
                    padding:0 10px;
                    background:#15151562;
                    font-size:11px;
                    letter-spacing:1px;
                    color:#80808082;

                    &::placeholder{
                        color:#80808082;
                        font-size:11px;

                    }
                }
                textarea{
                    padding:10px;
                    height:100px;
                }
            }
            
                .createButton{
                        background:var(--primary_color);                
                        height:50px;
                        width:100%;
                        text-transform:uppercase;
                        color:black;;
                        font-size:18px;
                        letter-spacing:1px;
                        border-radius:5px;

                    }
            
        }


    }


}

`