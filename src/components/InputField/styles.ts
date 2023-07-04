import styled from "styled-components"

export const StyledInputField = styled.fieldset`
    > div{
        display: flex;
        flex-direction: column;
        gap: 10px;
        position: relative;

        svg {
            position: absolute;
            top: 23px;
            right: 30px;
            color: var(--color-grey-1);
            transform: scale(1.3);
            cursor: pointer;
            transition: 0.5s;
            color: var(--color-blue);
            font-size: 20px;
        }

        span {
            font-family: Inter;
            font-size: 12px;
            font-weight: 600;
            padding: 0 20px;
            color: #eb3e23;
        }
    }
`

export const StyledInput = styled.input`
    border: solid 1px var(--color-blue);
    border-radius: 255px;
    width: 100%;
    height: 66px;

    font-family: Montserrat;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;

    padding: 0 2.1875rem;
`
