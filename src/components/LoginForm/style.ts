import styled  from "styled-components"

export const SectionLoginStyle = styled.section`
   display: flex;
   flex-direction: column;
   width: 100%;
   gap: 40px;
   align-items: center;
   justify-content: center;

   form {
      max-width: 518px;
      width: 100%;

      display: flex;
      flex-direction: column;
      gap: 17px;
   }
`

export const SpanRegisterLoginStyle = styled.span`
   display: flex;
   align-items:center;
   justify-content: center;
   gap: 5px;
`

export const PRegisterLoginStyle = styled.p`
   font-size: 18px;
   font-weight: 700;
   font-family: Inter;
   color: var(--color-blue);
`
