import { useContext } from "react"
import { AdmListContext } from "../../providers/AdmListContext"
import pencil from "../../assets/pencil.svg"
import trash from "../../assets/trash.svg"
import { LiVacancyStyle } from "./style"
import { Link } from "react-router-dom"
import { StyledTitle3 } from "../../styles/Typography"

export const ListVacancys = () => {
    const { admJob, deleteVacancy } = useContext(AdmListContext)
    console.log(admJob)

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
                    <StyledTitle3 color="black">{job.position}</StyledTitle3>
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