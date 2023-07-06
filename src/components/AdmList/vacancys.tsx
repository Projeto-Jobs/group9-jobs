import { useContext } from "react"
import { AdmListContext } from "../../providers/AdmListContext"
import pencil from "../../assets/pencil.svg"
import trash from "../../assets/trash.svg"

export const ListVacancys = () => {
    const {admJob, deleteVacancy} = useContext(AdmListContext)
    console.log(admJob)

    const deleted = async (jobId: number) => {
        try {
            await deleteVacancy(jobId)
        } catch (error) {
            
        }
    }

    return(
        <ul>
            {admJob.map((job) => (
                <li key={job.id} id={JSON.stringify(job.id)}>
                    <h2>{job.position}</h2>
                    <figure>
                      <img src={pencil} alt="Lápis" />
                      <img onClick={() => deleted(job.id)} src={trash} alt="" />
                    </figure>
                </li>
            ))}
        </ul>
    )
}