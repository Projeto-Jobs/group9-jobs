import { useContext } from "react"
import { AdmListContext } from "../../providers/AdmListContext"
import pencil from "../../assets/pencil.svg"
import trash from "../../assets/trash.svg"


export const ListVacancys = () => {
    const {admJob} = useContext(AdmListContext)
    console.log(admJob)

    
    return(
        <ul>
            {admJob.map((job) => (
                <li id={JSON.stringify(job.id)}>
                    <h2>{job.position}</h2>
                    <figure>
                      <img src={pencil} alt="Lápis" />
                      <img src={trash} alt="" />
                    </figure>
                </li>
            ))}
        </ul>
    )
}