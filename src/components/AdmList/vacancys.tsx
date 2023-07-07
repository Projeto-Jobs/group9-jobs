import { useContext } from "react"
import { AdmListContext, IAdmJob } from "../../providers/AdmListContext"
import pencil from "../../assets/pencil.svg"
import trash from "../../assets/trash.svg"
import { H3VacancyStyle, LiVacancyStyle } from "./style"
import { Link } from "react-router-dom"

export const ListVacancys = () => {
    const { admJob, deleteVacancy, teste} = useContext(AdmListContext)

    const deleted = (jobId: number) => {
        try {
            deleteVacancy(jobId)
        } catch (error) {

        }
    }

    const handleClickJob = (job: IAdmJob) => {
       teste(job)
        console.log(job)
    }

    return (
        <ul>
            {admJob.map((job) => (
                <LiVacancyStyle key={job.id} id={JSON.stringify(job.id)}>
                    <H3VacancyStyle>{job.position}</H3VacancyStyle>
                    <figure>
                        <Link to="/EditPage">
                            <img  onClick={() => handleClickJob(job)} src={pencil} alt="Lápis" />
                        </Link>
                        <img onClick={() => deleted(job.id)} src={trash} alt="" />
                    </figure>
                </LiVacancyStyle>
            ))}

        </ul>
    )
}
