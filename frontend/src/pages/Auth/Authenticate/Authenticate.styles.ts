import  {styled} from "styled-components"


export const AuthenticateWrapper = styled.div`

display:flex;
flex-direction:column;


.authenticateContainer{
    height:90vh;
    display:flex;
    align-items:center;
    justify-content:center;
    .authenticateContent{
        display:flex;
        flex-direction:column;
        gap:1rem;
        max-width:500px;
        width:95%;
        .authOptionBox{
            display:flex;
            justify-content:flex-end;
            gap:1rem;
            
            .optionItem{
                width:50px;
                cursor:pointer;
                height:45px;
                display:grid;
                place-items:center;
                border-radius:5px;
                background:var(--light_bg);
                
                svg{
                    fill:white;
                    font-size:1.3rem;
                }
            }
            .activeOption{
                background:var(--primary_color);
                svg{
                    fill:black !important;
                }
            }
        }
        
    }
    .authMainContent{
       background:#1f1f1ea1;
        height:300px;
        width:100%;
        border-radius:10px;
        padding:1rem;
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:1.5rem;
        justify-content:center;
        .header{
            display:flex;
            justify-content:center;
            gap:10px;
            .headerText{
                font-size:17px;

                letter-spacing:1px;
                font-weight:600;
            }
            img{
                width:25px;
                height:25px;
            }
        }
        .phoneNumberBox{
            height:45px;
            display:flex;
            background:#1e1e1e;
            width:270px;
            gap:10px;
            padding:0 1rem;
            input,select{
                color:gray;
                height:100%;
                ouline:none;
                font-size:14px;
                background:transparent;
                letter-spacing:1px;
            

                &::placeholder{
                    color:gray;
                    font-size:13px;
                    letter-spacing:2px;
                }
            }

            input{
                outline:none;
                border:none;
                width:100%;
            }
        }
        .nextButton{
            height:40px;
            background:var(--primary_color);
            padding:0 1rem;
            border-radius:4px;
            gap:5px;
            outline:none;
            color:black;
            font-weight:400px;
            display:flex;
            justify-content:center;
            align-items:center;
            letter-spacing:1px;
            svg{
                font-size:17px;
            }
        }
        .isLoading{
            background:#1e1e1e !important;
            // border:1px solid var(--primary_color);
        }

        .desc{
            color:gray;
            font-size:11px;
            width:80%;
            text-align:center;
            letter-spacing:1px;
        }
    }
}


`