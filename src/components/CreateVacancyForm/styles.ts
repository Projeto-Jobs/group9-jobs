import styled from "styled-components"

export const StyledVacancyForm = styled.form`
    max-width: 639px;
    display: flex;
    gap: 10px;
    flex-direction: column;
    margin: 2.75rem auto;

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

    .input1 {animation:minRightAppear .8s ease-in-out ;}
    .input2 {animation:minRightAppear 1s ease-in-out ;}
    .input3 {animation:minRightAppear 1.2s ease-in-out ;}
    button {
        animation:minRightAppear 1.4s ease-in-out ;
    }
`