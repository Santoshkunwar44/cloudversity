import {styled} from "styled-components"

export const LiveChatWrapper = styled.div`
flex:6;
display:flex;
flex-direction:column;
gap:2rem;

.liveChatHeader{
    height:60px;
    display:flex;
    align-items:center;
    gap:2rem;
    justify-content:space-between;
    .headerText{
        letter-spacing:1px;
        position:relative;
        display:inline;
        &::after{
            left:0;
                position:absolute;
                content:"";
                width:100%;
                height:3px;
                bottom:-10px;
                border-radius:1px;
                background:linear-gradient(45deg,var(--primary_color),#37e7107a,#37e71030);

        }
    }
    .MessageBox{
        background:var(--light_bg);
        height:40px;
        width:70%;
        border-radius:5px;
        padding:0 10px;
        input{
            background:transparent;
            height:100%;
            width:100%;
            font-size:12px;
            letter-spacing:1px;
            border:none;
            outline:none;
            color:gray;
            &::placeholder{
                color:gray;
                letter-spacing:1px;
                font-size:12px;
            }
        }
    }

}
.liveChatMessageContainer{
    display:flex;
    flex-direction:column;
    gap:1rem;
}

`