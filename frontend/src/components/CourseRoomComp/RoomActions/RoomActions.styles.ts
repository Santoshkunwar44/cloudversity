import {styled} from "styled-components"

export const RoomActionsWrapper = styled.div`

  display:flex;
  align-items:center;
  justify-content:space-between;
  height:100px;

       .actionLeft{
                display:flex;
                align-items:center;
                gap:8px;
                cursor:pointer;
                svg{
                    font-size:1.2rem;
                    fill:gray;
                }   
                p{
                    color:gray;
                    font-size:14px;
                }
            }
              
            .actionRight{
                display:flex;
                gap:10px;
                align-items:center;

            .micBox{
                cursor:pointer;
                background:var(--primary_color);
                width:40px;
                height:40px;
                display:grid;
                place-items:center;
                cursor:pointer;
                border-radius:5px;
                transition: all .3s ease;
                svg{
                    fill:black;
                    font-size:1.5rem;
                }
                &:hover{
                    scale:1.07;
                }
            }
                .leaveButton{
                color:black;
                border:none;
                border-radius:3px;
                font-size:16px;
                letter-spacing:1px;
                padding:0 1rem;
                height:40px;
                gap:10px;
                color:var(--primary_color);;
                display:flex;
                align-items:center;
                border:1px solid var(--primary_color);
                transition:all .3s ease;

                    cursor:pointer;
                    &:hover{
                        scale:1.07;
                    }
                
                }
                .raiseHand{
                    display:grid;
                    place-items:center;
                    transition:all .3s ease;
                    border:1px solid var(--primary_color);
                    cursor:pointer;
                    height:40px;
                    width:40px;
                    border-radius:5px;
                    background:var(--primary_color);
                    svg{
                        fill:black;
                        font-size:1.3rem;
                        
                    }
                    &:hover{
                        scale:1.07;
                    }
                   
                 
                }
            }

`