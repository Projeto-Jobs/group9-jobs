import { useContext } from "react"
import { AdmListContext } from "../../providers/AdmListContext"
import pencil from "../../assets/pencil.svg"
import trash from "../../assets/trash.svg"
import { H3VacancyStyle, LiVacancyStyle } from "./style"
import { Link } from "react-router-dom"

export const ListVacancys = () => {
    const { admJob, deleteVacancy } = useContext(AdmListContext)

    const deleted = async (jobId: number) => {
        try {
            await deleteVacancy(jobId)
        } catch (error) {

        }
    }

    return (
        <ul>
            {admJob.map((job) => (
                <LiVacancyStyle key={job.id} id={JSON.stringify(job.id)}>
                    <H3VacancyStyle>{job.position}</H3VacancyStyle>
                    <figure>
                        <Link to="/EditPage">
                            <img src={pencil} alt="Lápis" />
                        </Link>
                        <img onClick={() => deleted(job.id)} src={trash} alt="" />
                    </figure>
                </LiVacancyStyle>
            ))}
        </ul>
    )
}