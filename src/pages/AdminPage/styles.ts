import { styled } from "styled-components";


export const AdmStyled = styled.div`

    font-family: Montserrat;
    display: flex;
    flex-direction: column;
    gap: 30px;

    header{
        display: flex;
        justify-content: space-between;
    }
    h1{
        color: var(--color-blue);
        font-size: 64px;
        line-height: 78.02px;
        font-weight: 700;
    }

    .div_Span{
        display: flex;
        gap: 10px;
        font-weight: 700;
    }
    
    h2{
    color: var(--color-blue);
    font-size: 64px;
    line-height: 78.02px;
    font-weight: 700;
    }

    .div_Span--button{
        display: flex;
        justify-content: space-between;
    }

`