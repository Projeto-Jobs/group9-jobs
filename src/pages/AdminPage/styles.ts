import { styled } from "styled-components"


export const AdmStyled = styled.div`

    font-family: Montserrat;
    display: flex;
    flex-direction: column;

    header{
        display: flex;
        justify-content: space-between;
    }
    #apresentation-logged{
        margin-top: 26px;
        display: flex;
        flex-direction: column;
        gap: 26px;
    }

    .div_Span{
        display: flex;
        gap: 60px;
        margin-top: 30px;
        > p {
            transition: .3s;
            cursor: pointer;
            &:hover{
                color: var(--color-blue);
            }
        }
    }

    .div_Span--button{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .container-list{
        display: flex;
        flex-direction: column;
        gap: 46px;
        margin-top: 26px;
    }

`