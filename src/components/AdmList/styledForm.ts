import { styled } from "styled-components";


export const FormStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 35px;
    margin-top: 25px;

    .return{
        display: flex;
        align-items: center;
        gap: 20px;
        text-decoration: none;
        svg{
            transform: scale(1.5);
            text-decoration: none;
        }
    }
        form{
            display: flex;
            width: 100%;
            flex-direction:column;
            gap: 45px;
            > div {
                display: flex;
                gap: 45px;
            }
        }

        .input{
            width: 100%;
            max-width: 636px;
        }

        .textarea{
            width: 100%;
            max-width: 636px;
        }

        button{
            display: flex;
            margin: 0 auto;
        }

        textarea{
                height: 200px;
                box-sizing: border-box;
                width: 100%;

                border-radius: 30px;
                border: 1px solid var(--color-blue);
                resize: none;
                padding: 30px 30px;

                font-family: Montserrat;
                font-size: 16px;
                font-weight: 700;
                line-height: 20px;
            }
`