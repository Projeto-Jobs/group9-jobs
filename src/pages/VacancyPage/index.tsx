import { StyledTitle1 } from "../../styles/Typography";
import { StyledVacancyPage } from "./styles";
import scopLensWhite from "../../assets/scopLens white.svg";
import emptyListImg from "../../assets/empty.svg";
import { StyledInput } from "../../components/InputField/styles";
import { SetStateAction, useContext, useState } from "react";
import { IJob, JobsListContext } from "../../providers/JobsListContext";

export const VacancyPage = () => {
  const { jobsList } = useContext(JobsListContext);
  const [searchValue, setSearchValue] = useState("");
  const [displayText, setDisplayText] = useState("");
  const [filteredList, setFilteredList] = useState<IJob[]>([]);
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);

  const filterJobs = () => {
    setSearchButtonClicked(true);
    setDisplayText(searchValue);
    setFilteredList(
      jobsList.filter((job) =>
        (job.position.toLowerCase().includes(searchValue.toLowerCase()))
      )
    );
  };

  const handleInputChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchValue(e.target.value);
  };
  return (
    <StyledVacancyPage>
      <StyledTitle1>Busca de Vagas</StyledTitle1>
      <p>Digite o que você está procurando:</p>
      <div>
        <StyledInput value={searchValue} onChange={handleInputChange} placeholder="Pesquisa" />
        <figure onClick={filterJobs}>
          <img src={scopLensWhite} alt="Botão de pesquisar vagas" />
        </figure>
      </div>
      <section>
        {searchButtonClicked ? (
          <>
            <p>
              Resultados de busca para: <strong>{displayText}</strong>
            </p>
            <ul>
              {filteredList.map((job) => (
                <li key={job.id}>
                  <h3>{job.position}</h3>
                </li>
              ))}
            </ul>
          </>
        ) : null}
        {searchButtonClicked && filteredList.length == 0 ? (
          <img src={emptyListImg} alt="Nenhum resultado foi encontrado" />
        ) : null}
      </section>
    </StyledVacancyPage>
  );
};
