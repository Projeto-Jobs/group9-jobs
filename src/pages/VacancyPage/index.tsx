import { Header } from "../../components/Header";
import { StyledTitle1 } from "../../styles/Typography";
import { StyledVacancyPage } from "./styles";
import scopLensWhite from "../../assets/scopLens white.svg";
import { StyledInput } from "../../components/InputField/styles";

export const VacancyPage = () => {
  return (
    <StyledVacancyPage>
      <Header />
      <StyledTitle1>Busca de Vagas</StyledTitle1>
      <p>Digite o que você está procurando:</p>
      <div>
        <StyledInput />
        <figure>
          <img src={scopLensWhite} alt="Botão de pesquisar vagas" />
        </figure>
      </div>
    </StyledVacancyPage>
  );
};
