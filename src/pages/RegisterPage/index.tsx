import { InputField } from "../../components/InputField"
import { StyledButton } from "../../styles/Global"
import { StyledTitle1 } from "../../styles/Typography"
import { StyledRegisterPage } from "./styles"

export const RegisterPage = () => {
    return (
        <StyledRegisterPage>
            <span>voltar</span>
            <div>
                <StyledTitle1>Cadastre - se</StyledTitle1>
                <form>
                    <InputField />
                    <InputField />
                    <InputField />
                    <InputField />
                    <StyledButton>Cadastre-se</StyledButton>
                </form>
            </div>
        </StyledRegisterPage>
    )
}