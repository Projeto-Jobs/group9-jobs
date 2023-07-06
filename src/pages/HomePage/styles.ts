import { styled } from "styled-components";

export const StyledHome = styled.div`
  margin-bottom: 40px;
  font-family: Montserrat;

  > div:nth-child(1) {
    width: 100%;
    height: 206px;
    background-color: var(--color-blue);
    color: var(--color-white);
    display: flex;
    align-items: center;
    font-size: 30px;
    position: absolute;
    left: 0;

    > div {
      max-width: 1328px;
      width: 100%;
      margin: 0 auto;
      padding: 0 20px;
    }
  }

  section:first-of-type > div {
    display: flex;
    padding: 260px 0px 0px 0px;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
  }

  .apresentation-text {
    max-width: 650px;
    margin-top: 60px;
  }

  section:nth-of-type(2) > div:nth-child(1) {
    text-align: center;
    margin-top: 80px;
  }

  li {
    max-width: 1104px;
    width: 100%;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    
    .description-container > p {
      margin: 40px 0px 0px 70px;
      max-width: 917px;
      padding: 0 20px 0 0;
    }
  }
  ul{
    padding: 105px 0;
    max-width: 1328px;
    display: flex;
    flex-direction: column;
    gap: 70px;
  }

  li {
    div:nth-child(1) {
        display: flex;
        justify-content: space-between;
        
        div {
            gap: 45px;
        h3 {
          margin-top: 20px;
        }
    }
  }
}

#profile-job {
    justify-content: flex-start;
    text-align: left;
    max-width: 550px;
}

    li > #buttonProblem {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        button {
            align-self: center;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

  #banner {
    width: 100%;
    height: auto;
  }

  @media (max-width: 859px) {
    section:first-of-type > div:nth-child(1) {
      flex-wrap: wrap;
      justify-content: center;
    }
    p {
      max-width: 100%;
    }
    #buttonProblem > button {
        flex: 1 0 100%; 
    }
  }
`
