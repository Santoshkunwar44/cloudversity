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
        border-radius:10px;
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
                border-radius:50%;
                object-fit:cover;
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

        input{
            height:50px;
            width:90%;
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
        .buttonWrapper{
            display:flex;
            align-items:center;
            gap:1rem;
            width:90%;
            .nextButton{
                height:50px;
                flex:1;
                padding:0 2rem;
                border-radius:5px;
                color:black;
                letter-spacing:1px;
                background:var(--primary_color);
             
            }

        .uploadImage{
            height:50px;
            flex:1;
            border-radius:5px;
            background:#1e1e1e;
            letter-spacing:1px;
            font-size:14px;
            border:1px solid var(--primary_color);
            color:var(--primary_color);

        }
        }
    }
}


`