import { useContext } from "react"
import { AdmListContext, IAdmJob } from "../../providers/AdmListContext"
import { InputField } from "../InputField"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { SchemaEdit } from "./editSchema"
import { FormStyled } from "./styledForm"
import { StyledTitle2, StyledTitle3 } from "../../styles/Typography"
import { StyledButton } from "../../styles/Global"
import { AiOutlineArrowLeft } from "react-icons/ai"
import { Link } from "react-router-dom"

type TEdit = z.infer<typeof SchemaEdit>

export const EditVacancys = () => {

  const { editVacanciesJob } = useContext(AdmListContext)

  const { register, handleSubmit, } = useForm<TEdit>();

  const submit = (formData: TEdit) => {
    const userId = Number(localStorage.getItem("@Jobs:userId"))
    const { id, ...data } = formData;
    const updatedData: IAdmJob = {
      userId,
      id: id,
      ...data,
    }
    editVacanciesJob(updatedData)
  }


  return (
    <FormStyled>
      <Link to="/">
      <StyledTitle3 color= "blue" className="return"> <AiOutlineArrowLeft/> Voltar</StyledTitle3>
      </Link>
      <StyledTitle2 color= "blue" >Editando: </StyledTitle2>
      <form onSubmit={handleSubmit(submit)} >
       <div className="input">
          <InputField
            type="text"
            placeholder="Cargo"
            {...register("position")}
          />
          <InputField type="number"
            placeholder="Salário (opcional)"
            {...register("sallary")}
          />
        </div>
        <div className="textarea">
          <textarea
            placeholder="Descrição"
            {...register("description")}>
          </textarea>
        </div>
      </form>
        <StyledButton type="submit">Atualizar</StyledButton>
    </FormStyled>
  )
}