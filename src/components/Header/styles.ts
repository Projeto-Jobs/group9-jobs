import styled from "styled-components"


export const HeaderStyle = styled.header`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 20px 0;
   animation: appears 2s ease-in-out;
   flex-wrap: wrap;
   :link {
      text-decoration: none;
   }

   @media (max-width: 400px) {
      flex-direction: column;
      gap: 22px;
      position: relative;
      
      figure{
         align-self: self-start;
      }
   }
`

export const DivHeader = styled.div`
   display: flex;
   align-items: center;
   gap: 35px;

   @media (max-width: 604px) {
      .vacancyButtonText{
         display: none;
      }
   }
   @media (max-width: 400px) {
      gap: 0;
   }
`

export const ButtonHeader = styled.button`
   background-color: white;
   font-family: Montserrat;
   font-weight: 700;
   font-size: 1rem;
   color: var(--color-blue);
   transition: 1s ease-in-out;

   :hover {
      transform: scale(1.3);
   }

   @media (max-width: 400px) {
      position: absolute;
      top: 20px;
      right: 20px;
   }
`