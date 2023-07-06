import { ChangeEvent, useContext, useState } from "react";
import { AdmListContext, IAdmJob } from "../../providers/AdmListContext";

export const EditVacancys = ({ formData, onSubmit }: { formData: IAdmJob; onSubmit: (data: IAdmJob) => void }) => {

    const { editVacanciesJob } = useContext(AdmListContext)

    const [editData, setEditData] = useState<IAdmJob>(formData || { position: '', sallary: '' });

    const inputs = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditData((preventData) => ({
          ...preventData,
          [name]: value,
        }))
      }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        editVacanciesJob(editData);
        onSubmit(editData);
      }

    return (
        <div>
            <h2>Editando: </h2>
            <form onSubmit={handleSubmit} >
                <input type="text" 
                name="position" 
                value={editData.position}
                onChange={inputs}
                 />
                <input type="number" 
                name="sallary" 
                value={editData.sallary}
                onChange={inputs}
                 />
                <textarea 
                name="" 
                id=""></textarea>
                <button type="submit">Atualizar</button>


            </form>
        </div>
    )
}