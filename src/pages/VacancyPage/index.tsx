import { StyledText, StyledTitle1 } from "../../styles/Typography"
import { StyledVacancyPage } from "./styles"
import scopLensWhite from "../../assets/scopLens white.svg"
import emptyListImg from "../../assets/empty.svg"
import { StyledInput } from "../../components/InputField/styles"
import { SetStateAction, useContext, useState } from "react"
import { JobsListContext } from "../../providers/JobsListContext"
import { JobDropDown } from "../../components/JobDropDown"
import { ModalRegister } from "../../components/ModalRegister/modal"

export const VacancyPage = () => {
  const { jobsList, setFilteredList, filteredList } = useContext(JobsListContext);
  const [searchValue, setSearchValue] = useState("")
  const [displayText, setDisplayText] = useState("")
  const [searchButtonClicked, setSearchButtonClicked] = useState(false)

  const filterJobs = () => {
    setSearchButtonClicked(true)
    setDisplayText(searchValue)
    setFilteredList(
      jobsList.filter(
        (job) =>
          job.position.toLowerCase().includes(searchValue.toLowerCase()) ||
          job.user.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    )
  }

  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false)
  }

  const handleInputChange = (e: {
    target: { value: SetStateAction<string> }
  }) => {
    setSearchValue(e.target.value)
  }
  
  return (
    <StyledVacancyPage>
      <StyledTitle1 color="blue">Busca de Vagas</StyledTitle1>
      <StyledText text="paragraphBold">Digite o que você está procurando:</StyledText>
      <div>
        <StyledInput
          value={searchValue}
          onChange={handleInputChange}
          placeholder="Pesquisa"
        />
        <figure onClick={filterJobs}>
          <img src={scopLensWhite} alt="Botão de pesquisar vagas" />
        </figure>
      </div>
      <section>
        {searchButtonClicked ? (
          <>
            <StyledText text="paragraph">
              Resultados de busca para: <strong>{displayText}</strong>
            </StyledText>
            <ul>
              {filteredList.map((job) => (
                <JobDropDown key={job.id} item={job} setModal={setModal} />
              ))}
            </ul>
          </>
        ) : null}

        {searchButtonClicked && filteredList.length == 0 ? (
          <img src={emptyListImg} alt="Nenhum resultado foi encontrado" />
        ) : null}
      </section>
      <aside>
        {modal && <ModalRegister isOpen={setModal} onClose={closeModal} />}
      </aside>
    </StyledVacancyPage>
  )
}
