import { styled } from "styled-components";

export const StyledHome = styled.div`
    margin-bottom: 40px;
    font-family: Montserrat;
    
    >div:nth-child(1){
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
        section:first-of-type > div:nth-child(1) {
            display: flex;
            padding: 260px 0px 0px 0px;
            justify-content: space-between;
            align-items: center;
            gap: 40px;
        h2{
            font-size: 40px;
            color: var(--color-blue);
        }
        p{
            max-width: 650px;
            margin-top: 60px;
            font-size: 20px;
        }
    }

    section:nth-of-type(2) > div:nth-child(1){
        display: flex;
        justify-content: center;
        margin-top: 60px;
        h2{
        font-size: 40px;
        color: var(--color-blue);
   
        }
    }

    li{
        padding: 0 10%;
        margin-top: 60px;
        align-items: center;

        p{
            margin-left: 98px;
        }
    }

    li:first-of-type > div:nth-child(1){
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    li:first-of-type > div:nth-child(1)> div:nth-child(1){
        display: flex;
        gap: 50px;
        align-items: center;

        h4{
            color:var(--color-blue);
        }

        h3{
            font-weight: bold;
            font-size: 20px;
        }

    }
    #banner {
       width : 100%;
       height: auto;
    }
    
    @media (max-width: 859px) {
        section:first-of-type > div:nth-child(1){
            flex-wrap: wrap;
            justify-content: center;
        }
    }
`