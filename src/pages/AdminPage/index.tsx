import { useContext, useState } from "react"
import { Listapplications } from "../../components/AdmList/aplic"
import { ListVacancys } from "../../components/AdmList/vacancys"
import { AdmStyled } from "./styles"
import jobs from "../../assets/jobs.svg"
import { LoginContext } from "../../providers/LoginContext"

export const Administration = () => {

    const [option, setOpetion] = useState("")

    const {userLogout} = useContext(LoginContext)

    const OptionClick = (click: string) => {
        setOpetion(click)
    }

    return (
        <AdmStyled>
            <header>
                <img src={jobs} alt="Logo da empresa" />
                <div>
                    <button>KE</button>
                    <button onClick={userLogout}>Sair</button>
                </div>
            </header>
            {option !== "Vagas" && option !== "Candidaturas" && (
                <div>
                    <h1>Kenzie Academy Brasil</h1>
                    <p>Seja bem vindo (a), selecione uma das opções a baixo:</p>
                </div>
            )}
            <div className="div_Span">
                <span onClick={(() => OptionClick("Vagas"))}>Minhas vagas</span>
                <span onClick={(() => OptionClick("Candidaturas"))}>Minhas candidaturas</span>
            </div>
            {option === "Vagas" && (
                <ul>
                    <div className="div_Span--button">
                    <h2>Minhas vagas</h2>
                    <button>Criar vaga</button>
                    </div>
                    <ListVacancys />
                </ul>
            )}
            {option === "Candidaturas" && (
                <ul>
                    <h2>Minhas candidaturas</h2>
                    <Listapplications />
                </ul>
            )

            }
        </AdmStyled>
    )
}