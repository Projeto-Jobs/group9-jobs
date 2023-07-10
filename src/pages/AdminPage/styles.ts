import { styled } from "styled-components"


export const AdmStyled = styled.div`

    font-family: Montserrat;
    display: flex;
    flex-direction: column;

    #apresentation-logged{
        margin-top: 26px;
        display: flex;
        flex-direction: column;
        gap: 26px;
        animation: lefAppear 2s ease;
        p{
            animation: lefAppear 2s ease;
        }
    }

    .div_Span{
        display: flex;
        gap: 60px;
        margin-top: 30px;
        animation: lefAppear 2s ease;
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
        /* animation: lefAppear 2s ease; */
    }
    .container-list{
        display: flex;
        flex-direction: column;
        gap: 46px;
        margin-top: 26px;
        animation: lefAppear 1s ease;
    }

    .container-apply { animation: minRightAppear 1s ease;}

`