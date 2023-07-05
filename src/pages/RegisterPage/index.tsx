import { Header } from "../../components/Header"
import { RegisterForm } from "../../components/RegisterForm"
import { StyledTitle1 } from "../../styles/Typography"
import { StyledRegisterPage } from "./styles"

export const RegisterPage = () => {
    return (
        <>
            <Header />
            <StyledRegisterPage>
                <span>voltar</span>
                <div>
                    <StyledTitle1>Cadastre - se</StyledTitle1>
                    <RegisterForm />
                </div>
            </StyledRegisterPage>
        </>
    )
}