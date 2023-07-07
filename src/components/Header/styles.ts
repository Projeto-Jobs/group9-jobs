import styled from "styled-components"


export const HeaderStyle = styled.header`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 20px 0;
   animation: appears 2s ease-in-out;
   :link {
      text-decoration: none;
   }
`

export const DivHeader = styled.div`
   display: flex;
   align-items: center;
   gap: 35px;
   
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
`