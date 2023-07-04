import { StyledButton } from "../../styles/Global"
import { StyledRegisterForm } from "./styles"
import { InputField } from "../InputField"
import { useForm } from "react-hook-form"

interface IRegisterProps {
    email: string,
    password: string,
    name: string,
    confirm: string,
}



export const RegisterForm = () => {
    const { register, handleSubmit } = useForm<IRegisterProps>()

    const submit = (formData:IRegisterProps) => {
        console.log(formData);
    }

    return (
        <StyledRegisterForm onSubmit={handleSubmit(submit)}>
            <InputField {...register("email")} />
            <InputField {...register("name")} />
            <InputField {...register("password")}  />
            <InputField {...register("confirm")} />
            <StyledButton>Cadastrar-se</StyledButton>
        </StyledRegisterForm>
    )
}