import styled from "styled-components"

export const StyledRegisterPage = styled.div`
    max-width: 1328px;
    margin: 1rem auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    > span {
        position: absolute;
        top: 0;
        left: 0;
        font-family: Montserrat;
        font-size: 18px;
        font-weight: 700;
        color: var(--color-blue);
        cursor: pointer;
    }
    > div {
        width: 518px;
        height: 507px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        h1 {
            color: var(--color-blue);
            text-align: center;
        }
    }
`