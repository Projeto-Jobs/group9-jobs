import { StyledButton } from "../../styles/Global"
import { StyledRegisterForm } from "./styles"
import { InputField } from "../InputField"

export const RegisterForm = () => {
    return (
        <StyledRegisterForm>
            <InputField />
            <InputField />
            <InputField />
            <InputField />
            <StyledButton>Cadastrar-se</StyledButton>
        </StyledRegisterForm>
    )
}