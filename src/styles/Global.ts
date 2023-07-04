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
    }
`

export const StyledButton = styled.button`
    width: 182px;
    height: 58px;
    border-radius: 255px;
    background: var(--color-blue);

    font-family: Montserrat;
    font-size: 17px;
    font-weight: 700;
    line-height: 21px;
    color: var(--color-white);
    align-self: flex-end;
`