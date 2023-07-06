import {  useState } from "react"
import { Listapplications } from "../../components/AdmList/aplic"
import { ListVacancys } from "../../components/AdmList/vacancys"
import { AdmStyled } from "./styles"
import { Link } from "react-router-dom"
import { ButtonCompanyStyle } from "../../components/HeaderLogin/style"

export const Administration = () => {

    const [option, setOpetion] = useState("")


    const OptionClick = (click: string) => {
        setOpetion(click)
    }

    return (
        <AdmStyled>
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
                    <Link to="/CreateVacancyPage" style={{ textDecoration: 'none' }}>
                     <ButtonCompanyStyle>Criar vaga</ButtonCompanyStyle>
                    </Link>
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