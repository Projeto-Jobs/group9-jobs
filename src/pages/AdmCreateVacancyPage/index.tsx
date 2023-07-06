import { CreateVacancyForm } from "../../components/CreateVacancyForm"
import { StyledTitle1 } from "../../styles/Typography"
import { StyledCreateVacancyPage } from "./styles"
import { Link } from "react-router-dom"

export const CreateVacancyPage = () => {
    return (
        <StyledCreateVacancyPage>
            <Link to="/AdminPage">
              <span id="return">voltar</span>
            </Link>
            <div>
                <StyledTitle1 color="blue">Criar vaga</StyledTitle1>
                <CreateVacancyForm />
            </div>
        </StyledCreateVacancyPage>
    )
}