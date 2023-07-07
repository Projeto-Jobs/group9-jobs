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

    @keyframes appears {
    0% {
      transform: translateY(-50px);
      opacity: 0;
    }
  
    50% {
      transform: translateY(5px);
      opacity: 1;
    }
    }

    @keyframes appearsModal {
    0% {
      transform: translateY(-200px);
      opacity: 0;
    }
  
    50% {
      transform: translateY(5px);
      opacity: 1;
    }
    }

    @keyframes moveFadeIn {
        0% {
        transform: scale(0.3);
        opacity: 0;
        }
    
        50% {
        transform: scale(1);
    
        opacity: 1;
        }
    }

    @keyframes spin {
        0%{
        transform: rotate(0);
        }
        100%{
        transform: rotate(360deg);
        }
    }

    @keyframes lefAppear{
        from{
        opacity: 0;
        transform: translateX(-150px);
        }
        to{
        opacity: 1;
        }
    }

    @keyframes rigthAppear{
        0% {
        transform: scale(0.3);
        opacity: 0;
        }
        50% {
        transform: scale(1);
    
        opacity: 1;
        }
    }

    @keyframes dropAppear{
        from{
        opacity: 0;
        transform: translateY(-400px);
        }
        to{
        opacity: 1;
        }
    }

    @keyframes anime {
        0%, 100% {
        transform: translateY(0);
        }
        50%{
        transform: translateY(-20px);
        }
    }

    @keyframes beat {
        0%, 100% {
        transform: scale(1);
        }
        50%{
        transform: scale(1.1);
        }
    }

    @keyframes colorChange {
        0% {background-position: 0% 100%;}
        50%{background-position: 100% 0%;}
        100% {background-position: 0% 100%;}
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
export const StyledOutLineButton = styled.button`
    padding: 0 34px;
    height: 58px;
    flex-shrink: 0;
    border-radius: 255px;
    border: 1px solid var(--color-blue);
    color: var(--color-blue);
    font-weight: 700;
    font-size: 17px;
    font-family: Montserrat;
    background-color: var(--color-white);
    :hover {
        color: var(--color-white);
        background-color: var(--color-blue);
    }
`