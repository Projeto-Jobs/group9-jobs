import { createGlobalStyle, styled } from 'styled-components'

export const StyledGlobalStyle = createGlobalStyle`
    :root {
        --color-blue: #8490ff;
        --color-black: #101119;
        --color-white: #ffffff;
        --color-lightblue: #f9f9ff;
    }
    body {
        height: 100Vh;
    }
    #root {
        height: 100%;
        max-width: 83rem;
        margin: 0 auto;
        padding: 0 1.25rem;
    }
`

export const StyledButton = styled.button`
    padding: 15px;
    border-radius: 255px;
    background: var(--color-blue);

    display: flex;
    align-items: center;
    justify-content: space-between;

    font-family: Montserrat;
    font-size: 1.063rem;
    font-weight: 700;
    line-height: 21px;
    color: var(--color-white);
    align-self: flex-end;
`