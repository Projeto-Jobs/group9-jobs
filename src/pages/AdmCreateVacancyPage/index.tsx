import { CreateVacancyForm } from "../../components/CreateVacancyForm"
import { StyledTitle1 } from "../../styles/Typography"
import { StyledCreateVacancyPage } from "./styles"

export const CreateVacancyPage = () => {
    return (
        <StyledCreateVacancyPage>
            <span id="return">voltar</span>
            <div>
                <StyledTitle1>Criar vaga</StyledTitle1>
                <CreateVacancyForm />
            </div>
        </StyledCreateVacancyPage>
    )
}