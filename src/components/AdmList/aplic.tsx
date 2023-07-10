import { useContext, useState } from "react"
import { AdmListContext } from "../../providers/AdmListContext"
import { H3VacancyStyle, LiVApplyStyle } from "./style"
import plus from "../../assets/plus.svg"
import minus from "../../assets/minus.svg"
import { StyledText } from "../../styles/Typography"

export const Listapplications = () => {

    const { admApplication } = useContext(AdmListContext)
    const [showButton, setShowButton] = useState(false)
    const [showParagraph, setShowParagraph] = useState(false)

    const modifyButton = (param: boolean) => {
        setShowButton(param)
        setShowParagraph(param)
     }

    return (
        <ul>
            {admApplication.map((application) => (
                <LiVApplyStyle key={application.id}>
                    <div className="container-user">
                        <H3VacancyStyle>{application.name} - {application.job.position}</H3VacancyStyle>
                        {
                            showButton
                                ? <figure onClick={() => modifyButton(false)}><img src={minus} alt="minus"/></figure>
                                : <figure onClick={() => modifyButton(true)}><img src={plus} alt="plus"  /></figure>
                        }
                    </div>
                    <div className="description-container">
                        {showParagraph && (
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