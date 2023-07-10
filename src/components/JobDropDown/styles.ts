import { styled } from "styled-components"

export const StyledJobDropDown = styled.li`
  margin-bottom: 3.4375rem;
  
  > div {
    display: flex;
    gap: 3rem;
    width: 100%;
    height: 3.625rem;
    margin-bottom: 2.5rem;

    > img {
      width: 2rem;
    }
    > div > h3 {
      margin-top: 1rem;
    }

    > button {
      margin-left: auto;
    }
  }
  > p {
    margin-left: 5rem;
    margin-bottom: 1.5rem;
    margin-right: 2rem;
    animation: minRightAppear 0.5s ease;
  }
`
