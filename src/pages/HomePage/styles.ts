import { styled } from "styled-components"

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
    animation: rigthAppear 1.5s ease;

    > div {
      animation: rigthAppear 4s ease;
      max-width: 1328px;
      width: 100%;
      margin: 0 auto;
      padding: 0 20px;
    }
  }

  section:first-of-type > div {
    animation: lefAppear 2s ease;
    display: flex;
    padding: 260px 0px 0px 0px;
    justify-content: space-between;
    align-items: center;
    gap: 40px;

    img {
      animation: rigthAppear 3s ease-out;

    }
  }

  .apresentation-text {
    max-width: 650px;
    animation: appears 2s ease;
    margin-top: 60px;
  }

  section:nth-of-type(2) > div:nth-child(1) {
    animation: appears 2s ease;
    text-align: center;
    margin-top: 80px;
  }

  li {
    max-width: 1104px;
    width: 100%;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    animation: lefAppear 2s ease;
    
    .description-container > p {
      margin: 40px 0px 0px 70px;
      max-width: 917px;
      padding: 0 20px 0 0;
      animation: minRightAppear 0.5s ease;
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
            max-width: 500px;
            width: 100%;
            
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
        flex: 1 0 80%; 
    }
    h1{
      font-size: 44px;
    }
  }
`
