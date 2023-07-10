import { StyledButton } from "../../styles/Global"
import { StyledRegisterForm } from "./styles"
import { InputField } from "../InputField"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { validationFormSchema } from "./validationRegisterSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext, useState } from "react"
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { RegisterContext } from "../../providers/RegisterContext"


type TRegister = z.infer<typeof validationFormSchema>

export const RegisterForm = () => {

    const {registerUser} = useContext(RegisterContext)

    const [showPassword, setShowPassword] = useState(false)

    const [showConfirm, setShowConfirm] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm<TRegister>({
        resolver: zodResolver(validationFormSchema)
    })

    const submit = (formData:TRegister) => {
        registerUser(formData)
    }

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
                errorMessage={errors.name?.message}
                className="input1"/>

            <InputField 
                {...register("email")} 
                type="email" 
                placeholder="E-mail"
                errorMessage={errors.email?.message}
                className="input2"/>

            <InputField 
                {...register("password")} 
                type={showPassword ? 'text':'password'} 
                placeholder="Senha"
                errorMessage={errors.password?.message}
                className="input3">
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
                errorMessage={errors.confirm?.message}
                className="input4">
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