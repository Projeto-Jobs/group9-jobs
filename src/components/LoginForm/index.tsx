import LoginPicture from "../../assets/LoginPicture.svg"
import { StyledButton } from "../../styles/Global"
import { Link } from "react-router-dom"
import { ButtonEnterLogin, H1LoginStyle, InputLoginStyle, SectionLoginStyle, SpanButtonLogin } from "./style"

export const LoginForm = () =>{
    return(
        <SectionLoginStyle>
            <figure>
                <img src={ LoginPicture } alt="" />
            </figure>
            <form>
                <H1LoginStyle>Faça login</H1LoginStyle>
                <InputLoginStyle 
                placeholder="E-mail"/>
                <InputLoginStyle 
                placeholder="Senha"/>
                <SpanButtonLogin>
                  <StyledButton>Entrar</StyledButton>
                </SpanButtonLogin>
                <p>Não possui cadastro? 
                <Link to="/RegisterPage">
                    <p>Cadastre-se</p>
                </Link>
                </p>
            </form>
        </SectionLoginStyle>
    )
}