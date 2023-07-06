import { useContext, useState } from "react"
import img from "../../assets/HomePicture.svg"
import imgMinus from "../../assets/plus.svg"
import imgMax from "../../assets/minus.svg"
import { IJob, JobsListContext } from "../../providers/JobsListContext"
import { StyledHome } from "./styles"
import { StyledButton } from "../../styles/Global"
import { ModalRegister } from "../../components/ModalRegister/modal"

export const ListCompany = () => {

    const {jobsList, setCurrentJob} = useContext(JobsListContext)
    console.log(jobsList)

    const [showButton, setShowButton] = useState(0)

    const [showParagraph, setShowParagraph] = useState(0)

    const [modal, setModal] = useState(false)

    const modifyButton = (id: number) => {
        console.log(id)
        setShowButton(id)
        setShowParagraph(id)
    }

    const openModal = () => {
        setModal(true)
      }
    
      const closeModal = () => {
        setModal(false)
      }

      const editModal = (job:IJob) => {
        setCurrentJob(job);
        setModal(true)
      }

    return (
        <div>
        <StyledHome>
            <div>
                <div>
                    <h1>Trabalho é na Jobs</h1>
                </div>
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
                            {showButton !== job.id ?  (
                                <img onClick={() => modifyButton(job.id)} src={imgMax} alt="" />
                            ) : (
                                <img onClick={() => modifyButton(0)} src={imgMinus} alt="" />
                            )}
                            <div>
                                <h4>{job.user.name}</h4>
                                <h3>{job.position}</h3>
                            </div>
                            </div>
                            <StyledButton onClick={() => editModal(job)}>Cadastre-se</StyledButton>
                        </div>
                        <div>
                            {showParagraph == job.id && (
                                <p>{job.description}</p>
                            )}
                        </div>
                    </li>
                ))}
                </ul>
            </section>
            <StyledButton onClick={openModal}>Cadastre-se</StyledButton>
        </StyledHome>
        {modal && <ModalRegister isOpen={setModal} onClose={closeModal}/>}
        </div>
    )
}

