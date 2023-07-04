import { styled } from "styled-components"


export const HeaderStyle = styled.header`
   height: 58px;
   display: flex;
   flex-direction: row;
   margin-left: 15%;
   margin-right: 15%;
   justify-content: space-between;
   align-items: center;
   margin-top: 10px;
`

export const DivHeader = styled.div`
   display: flex;
   align-items: center;
   gap: 10px;
`

export const ButtonHeader = styled.button`
   background-color: white;
   font-family: Montserrat;
   font-weight: 700;
   font-size: 1rem;
   color: var(--color-blue);
`