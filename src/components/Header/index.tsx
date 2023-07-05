import jobs from "../../assets/jobs.svg"
import scopLensBlue from "../../assets/scopLens blue.svg"
import { StyledButton } from "../../styles/Global"
import { ButtonHeader, DivHeader, HeaderStyle } from "./styles"

export const Header = () =>{
    return(
        <HeaderStyle>
            <figure>
                <img src={ jobs } alt="" />
            </figure>
            <DivHeader>
                <ButtonHeader>acesso empresa</ButtonHeader>
                <StyledButton>Confira nossas vagas</StyledButton>
                <ButtonHeader><img src={ scopLensBlue } alt="" /></ButtonHeader>
            </DivHeader>
        </HeaderStyle>
    )
}