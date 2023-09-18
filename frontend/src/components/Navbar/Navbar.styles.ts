import {styled} from "styled-components"

export const NavbarWrapper= styled.div`
height:10vh;

.navLogo{
    display:flex;
    align-items:center;
    gap:1rem;
    img{
        width:50px;
        height:50px;
    }
    .logoText{
           background-image: linear-gradient(to right, #37e710, #37e710, #37e7109c, #24830f, #1e6f0c, #196a07);
  
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
        letter-spacing:1px;
        font-size:1.5rem;
        color:var(--primary_color);
    }
}
`