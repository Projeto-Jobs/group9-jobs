import LoginPicture from "../../assets/LoginPicture.svg"
import { StyledButton } from "../../styles/Global"
import { Link } from "react-router-dom"
import { H1LoginStyle, InputLoginStyle, PQuestionLoginStyle, PRegisterLoginStyle, SectionLoginStyle, SpanButtonLogin, SpanRegisterLoginStyle } from "./style"
import {  useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { TLogin, loginFormSchema } from "./loginFormSchema";


export const LoginForm = () =>{
    const { register, handleSubmit, formState: { errors }} = useForm<TLogin>({
        resolver: zodResolver(loginFormSchema)
    })
    
    const submit: SubmitHandler<TLogin> = (formData) =>{
        console.log(formData)
    }
    
    return(
        <SectionLoginStyle>
            <figure>
                <img src={ LoginPicture } alt="" />
            </figure>
            <form onSubmit={handleSubmit(submit)}>
                <H1LoginStyle>Faça login</H1LoginStyle>
                <InputLoginStyle 
                placeholder="E-mail"
                type="email"
                {...register("email")}
                />
                {errors.email?.message}
                <InputLoginStyle 
                placeholder="Senha"
                type="password"
                {...register("password")}
                />
                {errors.password?.message}
                <SpanButtonLogin>
                  <StyledButton>Entrar</StyledButton>
                </SpanButtonLogin>
                <SpanRegisterLoginStyle>
                  <PQuestionLoginStyle>Não possui cadastro?</PQuestionLoginStyle>
                  <Link to="/RegisterPage" style={{ textDecoration: 'none' }}>
                      <PRegisterLoginStyle>Cadastre-se</PRegisterLoginStyle>
                  </Link>
                </SpanRegisterLoginStyle>
            </form>
        </SectionLoginStyle>
    )
}