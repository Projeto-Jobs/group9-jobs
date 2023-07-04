import { Header } from "../../components/Header";
import { StyledTitle1 } from "../../styles/Typography";
import { StyledVacancyPage } from "./styles";
import scopLensWhite from "../../assets/scopLens white.svg";
import { StyledInput } from "../../components/InputField/styles";
import { useContext, useState } from "react";
import { JobsListContext } from "../../providers/JobsListContext";

export const VacancyPage = () => {
    const {jobsList} = useContext(JobsListContext);
    const [searchValue, setSearchValue] = useState("");
    const [filteredList, setFilteredList] = useState([]);
    const [searchButtonClicked, setSearchButtonClicked] = useState(false);

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
      <section>
        <ul>
            {jobsList.map((job) => (
                <li key={job.id}>
                    <h3>{job.position}</h3>
                </li>
            ))}
        </ul>
      </section>
    </StyledVacancyPage>
  );
};
