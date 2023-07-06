import { useContext } from "react"
import { AdmListContext } from "../../providers/AdmListContext"
import pencil from "../../assets/pencil.svg"
import trash from "../../assets/trash.svg"
import { H3VacancyStyle, LiVacancyStyle } from "./style"


export const ListVacancys = () => {
    const {admJob} = useContext(AdmListContext)
    
    return(
        <ul>
            {admJob.map((job) => (
                <LiVacancyStyle id={JSON.stringify(job.id)}>
                    <H3VacancyStyle>{job.position}</H3VacancyStyle>
                    <figure>
                      <img src={pencil} alt="Lápis" />
                      <img src={trash} alt="" />
                    </figure>
                </LiVacancyStyle>
            ))}
        </ul>
    )
}