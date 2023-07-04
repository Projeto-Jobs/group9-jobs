import { styled } from "styled-components";


export const SectionLoginStyle = styled.form`
    display: flex;
    margin-left: 15%;
    align-items: center;
    gap: 50px;
`
export const H1LoginStyle = styled.h1`
   font-size: 64px;
   line-height: 78.02px;
   font-family: Montserrat;
   font-weight: 700;

   color: var(--color-blue);
   margin-bottom: 10px;
`

export const InputLoginStyle = styled.input`
    border: solid 1px var(--color-blue);
    border-radius: 255px;
    width: 100%;
    height: 66px;

    font-family: Montserrat;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;

    padding-left: 10px;
    margin-top: 10px;

    ::placeholder{
        color: var(--color-black);
    }
`
export const SpanButtonLogin = styled.span`
   display: flex;
   width: 100%;
   justify-content: flex-end;
   margin-top: 10px;
`
