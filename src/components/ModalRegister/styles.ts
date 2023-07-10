import { styled } from "styled-components"

export const ModalStyled = styled.div`

position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #8490FF4D;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .8S;
  padding: 0 15px;

  
    .container{
        max-width: 650px;
        background-color: var(--color-lightblue);
        border-radius: 10px;
        animation: appears 1s ease;
        box-shadow: 0px 0px 5px 2px gray;
        padding: 40px 40px 48px 40px;
        position: relative;
        }

    header{
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 18px;
  
    }
    #close-modal{
        position: absolute;
        top: 25px;
        right: 25px;
        cursor: pointer;
        transition: .3s;
        &:hover{
            transform: scale(1.35);
        }
     }
    h2{

        font-size: 50px;
        color: var(--color-blue);
    }

    p{
        font-size: 20px;
    }

    img{
        width: 35px;
        margin-left: 95%;
    }

    form{
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin: 0 auto;
    }

    input{
    margin-top: 15px;
    border: solid 1px var(--color-blue);
    border-radius: 255px;
    width: 100%;
    height: 66px;

    font-family: Montserrat;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;

    padding: 0 2.1875rem;
    }
`