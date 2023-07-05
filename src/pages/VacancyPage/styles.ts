import { styled } from "styled-components";

export const StyledVacancyPage = styled.div`
  display: flex;
  flex-direction: column;

  > h1 {
    text-align: center;
    margin-top: 18rem;
    color: var(--color-blue);
  }
  > p {
    color: var(--black, #101119);
    font-size: 1rem;
    font-family: Montserrat;
    font-weight: 700;
    margin-top: 3.25rem;
    text-align: center;
  }

  > div {
    display: flex;
    width: 628px;
    gap: 1.25rem;
    margin-top: 1.25rem;
    align-self: center;

    >input{
        padding-left: 2rem;
    }

    > figure {
      width: 66px;
      height: 66px;
      background-color: var(--color-blue);
      display: flex;
      border-radius: 100%;
      justify-content: center;
      align-items: center;

      &:hover {
        cursor: pointer;
      }
    }
  }
  > section {
    align-self: center;

    > p {
      margin-top: 43px;
    }
    > ul {
      margin-top: 3rem;
    }
  }
`;
