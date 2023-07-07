import { useContext } from "react"
import { AdmListContext, IAdmJob } from "../../providers/AdmListContext"
import { InputField } from "../InputField"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { SchemaEdit } from "./editSchema"

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
    <div>
      <h2>Editando: </h2>
      <form onSubmit={handleSubmit(submit)} >
        <InputField
          type="text"

          {...register("position")}
        />
        <InputField type="number"

          {...register("sallary")}
        />
        <textarea
          {...register("description")}
        ></textarea>
        <button type="submit">Atualizar</button>

      </form>
    </div>
  )
}