import { useForm } from "react-hook-form"
import { StyledButton } from "../../styles/Global"
import { InputField } from "../InputField"
import { StyledVacancyForm } from "./styles"
import { zodResolver } from "@hookform/resolvers/zod"
import { validationVacancySchema } from "./validationCreateVacancyForm"
import { z } from "zod"
import { useContext } from "react"
import { AdminContext } from "../../providers/AdminContext"


type TCreateVacancy = z.infer<typeof validationVacancySchema>

export const CreateVacancyForm = () => {

    const {newVacancy} = useContext(AdminContext)
    const {register, handleSubmit, formState: {errors} } = useForm<TCreateVacancy>({
        resolver: zodResolver(validationVacancySchema)
    })

    const submit = (formData:TCreateVacancy) => {
        console.log(formData)
        newVacancy(formData)       
    }

    return (
        <StyledVacancyForm onSubmit={handleSubmit(submit)}>
            <InputField
                {...register("position")} 
                type="text"
                placeholder="Cargo" 
                errorMessage={errors.position?.message}/>
            <InputField 
                {...register("sallary")}
                type="number"
                placeholder="Salário (Opcional)"
                errorMessage={errors.sallary?.message}/>
            <div>
                <textarea 
                    {...register("description")}
                    placeholder="Descrição da vaga" />
                <span>{errors.description?.message}</span>
            </div>
            <StyledButton><img src="../../../src/assets/Plus+Ball.svg" alt="plus insede a ball" /> Criar vaga</StyledButton>
        </StyledVacancyForm>
    )
}