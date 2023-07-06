import { styled } from "styled-components";

export const StyledJobDropDown = styled.li`
  list-style: none;
  margin-bottom: 2rem;

  > div {
    display: flex;
    gap: 3rem;
    width: 100%;
    height: 3.625rem;
    margin-bottom: 2.5rem;
    > div > span{
      color: var(--color-blue);;
    }
    > img {
      width: 2rem;
    }
    > div > h3 {
      margin-top: 1rem;
    }

    > button {
      margin-left: auto;
      padding: 1.125rem 2.25rem;
      border-radius: 255px;
      border: 1px solid var(--color-blue);
      background-color: white;
      color: var(--color-blue);
    }
  }
  > p {
    margin-left: 5rem;
    margin-bottom: 1.5rem;
    margin-right: 2rem;
  }
`;
