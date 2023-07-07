import { useContext } from "react"
import { AdmListContext, IAdmJob } from "../../providers/AdmListContext"
import pencil from "../../assets/pencil.svg"
import trash from "../../assets/trash.svg"
import { LiVacancyStyle } from "./style"
import { Link } from "react-router-dom"
import { StyledTitle3 } from "../../styles/Typography"

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
                    <StyledTitle3 color="black">{job.position}</StyledTitle3>
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
