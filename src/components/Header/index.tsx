import jobs from "../../assets/jobs.svg"
import scopLensBlue from "../../assets/scopLens blue.svg"
import { StyledButton } from "../../styles/Global"
import { ButtonHeader, DivHeader, HeaderStyle } from "./styles"
import { Link } from "react-router-dom"

export const Header = () =>{
    return(
        <HeaderStyle>
            <figure>
                <img src={ jobs } alt="" />
            </figure>
            <DivHeader>
                <Link to="/LoginPage">
                    <ButtonHeader>acesso empresa</ButtonHeader>
                </Link>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <StyledButton>Confira nossas vagas</StyledButton>
                </Link>
                <Link to="/VacancyPage">
                    <ButtonHeader><img src={ scopLensBlue } alt="" /></ButtonHeader>
                </Link>
            </DivHeader>
        </HeaderStyle>
    )
}