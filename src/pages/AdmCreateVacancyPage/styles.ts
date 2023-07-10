import styled from "styled-components"

export const StyledCreateVacancyPage = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    h1{
        color: var(--color-blue);
        text-align: center;
        animation: appears 2s ease-in-out;
    }

    > div {
        margin-top: 50px;
    }
    
    #return{
        position: absolute;
        top: 40px;
        left: 0;
        font-family: Montserrat;
        font-size: 18px;
        font-weight: 700;
        color: var(--color-blue);
        display: flex;
        gap: 10px;
        cursor: pointer;
        svg {
            transform: scale(1.5);
        }
        animation: minRightAppear 1s ease-in-out;
    }
`