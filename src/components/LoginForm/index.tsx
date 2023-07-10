import { StyledButton } from "../../styles/Global"
import { Link } from "react-router-dom"
import { PRegisterLoginStyle, SectionLoginStyle, SpanRegisterLoginStyle } from "./style"
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { TLogin, loginFormSchema } from "./loginFormSchema"
import { useContext } from "react"
import { LoginContext } from "../../providers/LoginContext"
import { StyledText, StyledTitle1 } from "../../styles/Typography"
import { InputField } from "../InputField"


export const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<TLogin>({
        resolver: zodResolver(loginFormSchema)
    })

    const { userLogin } = useContext(LoginContext)

    const submit: SubmitHandler<TLogin> = async (formData) => {
        userLogin(formData)
    }

    return (
        <SectionLoginStyle>
            <StyledTitle1 color="blue">Faça login</StyledTitle1>
            <form onSubmit={handleSubmit(submit)} noValidate>
                <InputField
                    placeholder="E-mail"
                    type="email"
                    errorMessage={errors.email?.message}
                    {...register("email")} 
                    className="input1"/>

                <InputField
                    placeholder="Senha"
                    type="password"
                    errorMessage={errors.password?.message}
                    {...register("password")} 
                    className="input2"/>
                    
                <StyledButton>Entrar</StyledButton>
            </form>
            <SpanRegisterLoginStyle>
                <StyledText text="paragraph">Não possui cadastro?</StyledText>
                <Link to="/RegisterPage" style={{ textDecoration: 'none' }}>
                    <PRegisterLoginStyle>Cadastre-se</PRegisterLoginStyle>
                </Link>
            </SpanRegisterLoginStyle>
        </SectionLoginStyle>
    )
}