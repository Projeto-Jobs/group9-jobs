import jobs from "../../assets/jobs.svg"
import scopLensBlue from "../../assets/scopLens blue.svg"
import { StyledButton } from "../../styles/Global"
import { StyledText } from "../../styles/Typography"
import { ButtonHeader, DivHeader, HeaderStyle } from "./styles"
import { Link } from "react-router-dom"

export const Header = () =>{
    return(
        <HeaderStyle>
            <figure>
                <Link to="/"><img src={ jobs } alt="" /></Link>
            </figure>
            <DivHeader>
                <Link to="/LoginPage">
                    <StyledText text="boldAlert" >acesso empresa</StyledText>
                </Link>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <StyledButton className="vacancyButtonText">Confira nossas vagas</StyledButton>
                </Link>
                <Link to="/VacancyPage">
                    <ButtonHeader><img src={ scopLensBlue } alt="" /></ButtonHeader>
                </Link>
            </DivHeader>
        </HeaderStyle>
    )
}