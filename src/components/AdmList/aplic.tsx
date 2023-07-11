import { useContext, useState } from "react"
import { AdmListContext } from "../../providers/AdmListContext"
import { H3VacancyStyle, LiVApplyStyle } from "./style"
import plus from "../../assets/plus.svg"
import minus from "../../assets/minus.svg"
import { StyledText } from "../../styles/Typography"

export const Listapplications = () => {

    const { admApplication } = useContext(AdmListContext)
    const [showButton, setShowButton] = useState(0)
    const [showParagraph, setShowParagraph] = useState(0)

    const modifyButton = (id: number) => {
        setShowButton(id)
        setShowParagraph(id)
     }

     
    return (
        <ul>
            {admApplication.map((application) => (
                <LiVApplyStyle key={application.id}>
                    <div className="container-user">
                        <H3VacancyStyle>{application.name} - {application.job.position}</H3VacancyStyle>
                        {showButton !== application.id ? (
                            <figure onClick={() => modifyButton(application.id)}><img src={plus} alt="" /></figure>
                        ) : (
                            <figure onClick={() => modifyButton(0)}><img src={minus} alt="" /></figure>
                        )}
                    </div>
                    <div className="description-container">
                        {showParagraph == application.id && (
                            <div>
                                <StyledText text="paragraph">Detalhes da candidatura: </StyledText>
                                <StyledText text="paragraph">E-mail: <strong>{application.email}</strong></StyledText>
                            </div>
                        )}
                    </div>

                </LiVApplyStyle>
            ))}
        </ul>
    )
}