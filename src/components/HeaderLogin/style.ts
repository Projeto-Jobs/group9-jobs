import { styled } from "styled-components"


export const HeaderLoginStyle = styled.header`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   margin-bottom: 30px;
   margin-top: 10px;
`

export const ButtonCompanyStyle = styled.button`
   padding: 10px;
   margin-right: 10px;
   font-weight: 700;
   font-size: 17px;
   font-family: Montserrat;
   color: white;
   background-color: var(--color-blue);
   border-radius: 30px;
`
export const ButtonLeaveStyle = styled.button`
   font-weight: 700;
   font-size: 17px;
   font-family: Montserrat;
   color: var(--color-blue);
   background-color: white;
   border: 1px solid var(--color-blue);
   padding: 10px;
   border-radius: 30px;
`