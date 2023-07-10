import { RegisterForm } from "../../components/RegisterForm"
import { StyledTitle1 } from "../../styles/Typography"
import { StyledRegisterPage } from "./styles"
import { Link } from "react-router-dom"
import { AiOutlineArrowLeft } from "react-icons/ai"
export const RegisterPage = () => {
    return (

        <StyledRegisterPage>
            <Link to="/LoginPage">
                <span id="return"><AiOutlineArrowLeft/> voltar</span>
            </Link>
            <div>
                <StyledTitle1 color="blue">Cadastre - se</StyledTitle1>
                <RegisterForm />
            </div>
        </StyledRegisterPage>

    )
}