import { styled } from "styled-components"


export const LiVacancyStyle = styled.li`
   display: flex;
   justify-content: space-between;
   align-items:center;
   padding: 47px 55px;
   transition: 0.5s;

   &:hover{
      background-color: var(--color-lightblue);
   }
   
   figure {
      display: flex;
      align-items: center;
      gap: 20px;
      img {
         transition: all.3s;
         cursor: pointer;
         &:hover{
            transform: scale(1.35);
         }
      }
   }
`

export const LiVApplyStyle = styled.li`
   display: flex;
   justify-content: space-between;
   padding: 47px 55px;
   transition: 0.5s;
   flex-direction: column;

   &:hover{
      background-color: var(--color-lightblue);
   }

   .container-user{
      display: flex;
      justify-content: space-between;
      align-items: center;
      animation: minRightAppear 0.5s ease;
      > figure {
         height: 30px;
         cursor: pointer;
      }
   }
   .description-container{
   
      > div {
         display: flex;
         flex-direction: column;
         padding: 40px 0 0 0;
         gap: 30px;
         animation: minRightAppear 0.5s ease;
      }
   }
   figure {
      display: flex;
      align-items: center;
      gap: 20px;
         transition: all.3s;
         cursor: pointer;
         &:hover{
            transform: scale(1.35);
         }
   }
`

export const H3VacancyStyle = styled.h3`
   font-weight: 700;
   font-size: 21px;
   color: var(--color-black);
`