import LoginPicture from "../../assets/LoginPicture.svg"
import { StyledButton } from "../../styles/Global"
import { StyledTitle1 } from "../../styles/Typography"
import { InputField } from "../InputField"
import { Link } from "react-router-dom"

export const LoginForm = () =>{
    return(
        <section>
            <figure>
                <img src={ LoginPicture } alt="" />
            </figure>
            <form action="">
                <StyledTitle1>Faça login</StyledTitle1>
                <InputField/>
                <InputField/>
                <StyledButton>Entrar</StyledButton>
                <p>Não possui cadastro? 
                </p>
                <Link to="/RegisterPage">
                    <button>Ca</button>
                </Link>
            </form>
        </section>
    )
}