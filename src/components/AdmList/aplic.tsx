import { useContext } from "react"
import { AdmListContext } from "../../providers/AdmListContext"
import { H3VacancyStyle } from "./style"
import plus from "../../assets/plus.svg"


export const Listapplications = () => {

    const { admApplication } = useContext(AdmListContext)

    return(
        <ul>
            {admApplication.map((application) => (
                <li key={application.id}>
                    <H3VacancyStyle>{application.name} - {application.job.position}</H3VacancyStyle>
                    <img src={plus} alt="" />
                </li>
            ))}
           
        </ul>
    )
}