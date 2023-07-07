import { styled } from "styled-components"


export const HeaderLoginStyle = styled.header`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 20px 0;

   > div {
      display: flex;
      align-items: center;
      gap: 31px;

      #leave-button {
         :hover {
            background-color: var(--color-blue);
            color: var(--color-white);
         }
      }
   }
`
export const ButtonCompanyStyle = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;

   color: white;
   font-size: 17px;
   font-weight: 700;
   font-family: Montserrat;

   width: 51px;
   height: 51px;
   background-color: var(--color-blue);
   border-radius: 50%;

`