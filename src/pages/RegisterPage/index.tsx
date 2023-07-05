import { RegisterForm } from "../../components/RegisterForm"
import { StyledTitle1 } from "../../styles/Typography"
import { StyledRegisterPage } from "./styles"
import { Link } from "react-router-dom"
export const RegisterPage = () => {
    return (

        <StyledRegisterPage>
            <Link to="/LoginPage">
                <span id="return">voltar</span>
            </Link>
            <div>
                <StyledTitle1>Cadastre - se</StyledTitle1>
                <RegisterForm />
            </div>
        </StyledRegisterPage>

    )
}