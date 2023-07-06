import styled from "styled-components"

export const StyledCreateVacancyPage = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    h1{
        color: var(--color-blue);
        text-align: center;
    }
    
    #return{
        position: absolute;
        top: 0;
        left: 0;
        font-family: Montserrat;
        font-size: 18px;
        font-weight: 700;
        color: var(--color-blue);
        cursor: pointer;
    }
`