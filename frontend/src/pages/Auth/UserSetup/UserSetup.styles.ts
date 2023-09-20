import {styled} from "styled-components"

export const UserSetupWrapper = styled.div`

.userSetupContainer{
    display:flex;
    height:90vh;
    align-items:center;
    justify-content:center;

    .userSetupContent{
        display:flex;
        align-items:center;
        justify-content:center;
         background:#1f1f1ea1;
        max-width:550px;
        width:95%;
        padding:2rem;
        flex-direction:column;
        gap:1rem;
        .setupHeader{
            display:flex;
            align-items:center;
            justify-conetent:center;
            gap:10px;
            .headerText{
                font-weight:600;
                letter-spacing:1px;
            }
            img{
                width:40px;
                height:40px;
            }
        }
        .imageBox{
            width:100px;
            height:100px;
            border-radius:50%; 
            border:3px solid var(--primary_color);
            display:grid;
            place-items:center;
            img{
                width:75px;
                height:75px;
            }
        }

        .uploadImage{
            height:50px;
            width:80%;
            border-radius:5px;
            background:#1e1e1e;
            letter-spacing:1px;
            font-size:14px;
            border:2px solid var(--primary_color);
            color:var(--primary_color);

        }
        input{
            height:50px;
            width:80%;
            background:#1e1e1e;
            border-radius:5px;
            font-size:14px;
            letter-spacing:1px;
            padding:0 1rem;
            color:gray;
            &::placeholder{
                color:gray;
                font-size:14px;
                letter-spacing;
            }
        }
        .nextButton{
            height:40px;
            padding:0 2rem;
            border-radius:5px;
            color:black;
            letter-spacing:1px;
            background:var(--primary_color);
            margin-top:1rem;
        }
    }
}


`