import { styled } from "styled-components"

export const StyledVacancyPage = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 600px;
  justify-content: center;
  
  > h1 {
    animation: appears 2s ease-in-out;
    text-align: center;
  }
  > p {
    animation: lefAppear 2s ease-in-out;
    margin-top: 3.25rem;
    text-align: center;
  }

  > div {
    animation: lefAppear 2s ease-in-out;

    display: flex;
    width: 628px;
    gap: 1.25rem;
    margin-top: 1.25rem;
    align-self: center;

    > figure {
      min-width: 66px;
      height: 66px;
      background-color: var(--color-blue);
      display: flex;
      border-radius: 100%;
      justify-content: center;
      align-items: center;
      transition: .5s;
      &:hover {
        cursor: pointer;
        background-color: rgba(10,100,257,0.5);
      }
    }
  }
  > section {
    width: 63%;
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
      margin-top: 43px;
    }
    > ul {
    animation: moveFadeIn 2s ease-in-out;

      margin-top: 3rem;
      width: 100%;
    }

  }
`
