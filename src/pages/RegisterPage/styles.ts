import styled from "styled-components"

export const StyledRegisterPage = styled.div`
    max-width: 1328px;
    margin: 1rem auto;
    
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    
    #return{
        position: absolute;
        top: 0;
        left: 0;
        font-family: Montserrat;
        font-size: 18px;
        font-weight: 700;
        color: var(--color-blue);
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 10px;
        animation: lefAppear 2s ease;
        svg{
            transform: scale(1.5);
        }
    }

    > div {
        width: 518px;
        height: 507px;
        display: flex;
        flex-direction: column;
        gap: 20px;

        h1 {
            animation: appears 2s ease;
            color: var(--color-blue);
            text-align: center;
            margin-top: 90px;
        }
    }
`