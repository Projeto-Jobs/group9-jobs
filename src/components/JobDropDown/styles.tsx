import { styled } from "styled-components";

export const StyledJobDropDown = styled.li`
  list-style: none;
  
  >div{
    display: flex;
    gap: 3rem;
    width: 100%;
    >img{
        width:2rem;
    }
    >button{
        margin-left: auto;
    }
  }
`;
