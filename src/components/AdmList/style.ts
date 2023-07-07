import { styled } from "styled-components"


export const LiVacancyStyle = styled.li`
   display: flex;
   justify-content: space-between;
   height: 110px;
   align-items: center;
   padding: 0 55px;
   transition: 0.5s;
   &:hover{
      background-color: var(--color-lightblue);
   }
`

export const H3VacancyStyle = styled.h3`
   font-weight: 700;
   font-size: 21px;
   color: var(--color-black);
`