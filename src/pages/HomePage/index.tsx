import { useContext, useState } from "react"
import img from "../../assets/HomePicture.svg"
import imgMinus from "../../assets/plus.svg"
import imgMax from "../../assets/minus.svg"
import { JobsListContext } from "../../providers/JobsListContext"
import { StyledHome } from "./styles"
import { Header } from "../../components/Header"
import { StyledButton } from "../../styles/Global"

export const ListCompany = () => {

    const {jobsList} = useContext(JobsListContext)

    const [showButton, setShowButton] = useState(true)

    const [showParagraph, setShowParagraph] = useState(false)

    const modifyButton = () => {
        setShowButton(!showButton)
        setShowParagraph(!showParagraph)
    }

    return (
        <div>
        <Header/>
        <StyledHome>
            <div>
                <h1>Trabalho é na Jobs</h1>
            </div>
            <section>
                <div>
                    <div>
                        <h2>Sobre a Jobs</h2>
                        <p>A Jobs é uma empresa dedicada a ajudar pessoas a encontrar empregos e empresas a descobrir talentos.
                            Nossa plataforma permite que os usuários se cadastrem como candidatos em busca de oportunidades de
                            emprego ou como empresas em busca de profissionais qualificados. Com uma interface intuitiva e
                            recursos avançados de busca, conectamos as necessidades dos candidatos às demandas das empresas de
                            forma eficiente e eficaz. Na Jobs, nosso objetivo é promover um ambiente de trabalho próspero,
                            facilitando o encontro entre talentos e oportunidades.
                        </p>
                    </div>
                    <div>
                        <img src={img} alt="" />
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <h2>Confira nossas vagas</h2>
                </div>
                <ul>
                {jobsList.map((job) => (
                    <li key={job.id}>
                        <div>
                            <div>
                            {showButton ? (
                                <img onClick={modifyButton} src={imgMax} alt="" />
                            ) : (
                                <img onClick={modifyButton} src={imgMinus} alt="" />
                            )}
                            <div>
                                <h4>Kenzie Academy Brasil</h4>
                                <h3>{job.position}</h3>
                            </div>
                            </div>
                            <StyledButton>Cadastre-se</StyledButton>
                        </div>
                        <div>
                            {showParagraph && (
                                <p>{job.description}</p>
                            )}
                        </div>
                    </li>
                ))}
                </ul>
            </section>
        </StyledHome>
        </div>

    )
}


