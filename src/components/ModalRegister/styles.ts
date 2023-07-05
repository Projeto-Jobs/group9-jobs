import { styled } from "styled-components";

export const ModalStyled = styled.div`

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Montserrat;

    .container{
        width: 40%;
        height: auto;
        min-width: 305px;
        background-color: var(--color-lightblue);
        border-radius: 10px;
        }

    header{
        width: 90%;
        margin: 0 auto;
        margin-top: 30px;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        gap: 10px;
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
        gap: 10px;
        margin: 0 auto;
        width: 90%;
        height: 65%;
        margin-bottom: 30px;
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