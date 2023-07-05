import { useState } from "react"
import { Listapplications } from "../../components/AdmList/aplic"
import { ListVacancys } from "../../components/AdmList/vacancys"
import { AdmStyled } from "./styles"

export const Administration = () => {

    const [option, setOpetion] = useState("")

    const OptionClick = (click: string) => {
        setOpetion(click)
    }

    return (
        <AdmStyled>
            <h1>Kenzie Academy Brasil</h1>
            <p>Seja bem vindo (a), selecione uma das opções a baixo:</p>
            <div>
            <span onClick={(() => OptionClick("Vagas"))}>Minhas vagas</span>
            <span onClick={(() => OptionClick("Candidaturas"))}>Minhas candidaturas</span>
            </div>
            {option === "Vagas" && (
                <ul>
                    <h2>Minhas vagas</h2>
                    <button>Criar vaga</button>
                    <ListVacancys/>
                </ul>
            )}
            {option === "Candidaturas" && (
                <ul>
                    <h2>Minhas candidaturas</h2>
                    <Listapplications/>
                </ul>
            )

            }
        </AdmStyled>
    )
}