import { useForm } from "react-hook-form"
import { StyledButton } from "../../styles/Global"
import { InputField } from "../InputField"
import { StyledVacancyForm } from "./styles"
import { zodResolver } from "@hookform/resolvers/zod"
import { validationVacancySchema } from "./validationCreateVacancyForm"
import { z } from "zod"
import { useContext } from "react"
import plusBall from "../../assets/Plus+Ball.svg"
import { AdmListContext } from "../../providers/AdmListContext"


type TCreateVacancy = z.infer<typeof validationVacancySchema>

export const CreateVacancyForm = () => {

    const {newVacancy} = useContext(AdmListContext)
    const {register, handleSubmit, formState: {errors} } = useForm<TCreateVacancy>({
        resolver: zodResolver(validationVacancySchema)
    })

    const submit = (formData:TCreateVacancy) => {
        newVacancy(formData)       
    }

    return (
        <StyledVacancyForm onSubmit={handleSubmit(submit)}>
            <InputField
                {...register("position")} 
                type="text"
                placeholder="Cargo" 
                errorMessage={errors.position?.message}
                className="input1"/>
            <InputField 
                {...register("sallary")}
                type="number"
                placeholder="Salário (Opcional)"
                errorMessage={errors.sallary?.message}
                className="input2"/>
            <div>
                <textarea 
                    {...register("description")}
                    placeholder="Descrição da vaga" 
                    className="input3"/>
                <span>{errors.description?.message}</span>
            </div>
            <StyledButton><img src={plusBall} alt="plus insede a ball" /> Criar vaga</StyledButton>
        </StyledVacancyForm>
    )
}