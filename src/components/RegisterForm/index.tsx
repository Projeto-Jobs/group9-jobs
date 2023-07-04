import { StyledButton } from "../../styles/Global"
import { StyledRegisterForm } from "./styles"
import { InputField } from "../InputField"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { validationFormSchema } from "./validationRegisterSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'


type TRegister = z.infer<typeof validationFormSchema>

export const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<TRegister>({
        resolver: zodResolver(validationFormSchema)
    })

    const submit = (formData:TRegister) => {
        console.log(formData);
    }
    console.log(errors);

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)

    const IsShowingPass = () => {
        setShowPassword(!showPassword);
     }
     const IsShowingConfi = () => {
        setShowConfirm(!showConfirm);
     }

    return (
        <StyledRegisterForm onSubmit={handleSubmit(submit)} noValidate>
            <InputField 
                {...register("name")} 
                type="text" 
                placeholder="Nome da empresa"
                errorMessage={errors.name?.message}/>

            <InputField 
                {...register("email")} 
                type="email" 
                placeholder="E-mail"
                errorMessage={errors.email?.message}/>

            <InputField 
                {...register("password")} 
                type={showPassword ? 'text':'password'} 
                placeholder="Senha"
                errorMessage={errors.password?.message}>
                {
                    showPassword
                        ? <AiFillEyeInvisible onClick={IsShowingPass} />
                        : <AiFillEye onClick={IsShowingPass} />
                }
            </InputField>

            <InputField 
                {...register("confirm")} 
                type={showConfirm ? 'text':'password'} 
                placeholder="Confirmar senha"
                errorMessage={errors.confirm?.message}>
                {
                    showConfirm
                        ? <AiFillEyeInvisible onClick={IsShowingConfi} />
                        : <AiFillEye onClick={IsShowingConfi} />
                }
            </InputField>

            <StyledButton>Cadastrar-se</StyledButton>
        </StyledRegisterForm>
    )
}