import {styled} from "styled-components"

export const OtpWrapper  = styled.div`


display:flex;
flex-direction:column;


.otpContainer{
    height:90vh;
    display:flex;
    align-items:center;
    justify-content:center;
    .otpContent{
            border-radius:20px;
            max-width:500px;
            width:95%;
            height:300px;
            background:#1f1f1ea1;
            padding:2rem;
            justify-content:center;
            display:flex;
            flex-direction:column;
            gap:1.5rem;
            align-items:center;
        .otpHeader{
            display:flex;
            align-items:center;
            justify-content:center;
            gap:7px;
            img{
                width:30px;
                height:30px;
            }
            .headerText{
                font-weight:600;
                font-size:16px;
                letter-spacing:1px;
            }
        }

        .otpBox{
            display:flex;
            align-items:center;
            gap:10px;

            input{
                background:var(--light_bg);
                flex:1;
                width:50px;
                height:50px;
                border-radius:5px;
            }
        }
        .resendLink{
            font-size:12px;
            color:gray;
            letter-spacing:0.8px;
            cursor:pointer;
        }
        .nextButton{
            height:40px;
            padding:0 1rem;
            display:flex;
            align-items:center;
            letter-spacing:1px;
            gap:4px;
            justify-content:center;
            background:var(--primary_color);
            color:black;
            border-radius:4px;
        }
            .isLoading{
            background:#1e1e1e !important;
            // border:1px solid var(--primary_color);
        }
    }
}
`