import styled from "styled-components"

export const StyledVacancyForm = styled.form`
    max-width: 639px;
    display: flex;
    gap: 10px;
    flex-direction: column;
    margin: 0 auto;

    textarea{
        height: 200px;
        box-sizing: border-box;
        width: 100%;
        border-radius: 30px;
        border: 1px solid var(--color-blue);
        resize: none;
        padding: 30px 30px;

        font-family: Montserrat;
        font-size: 16px;
        font-weight: 700;
        line-height: 20px;
    }

    > div {
        span {
            font-family: Inter;
            font-size: 12px;
            font-weight: 600;
            padding: 0 20px;
            color: #eb3e23;
        }
    }
`