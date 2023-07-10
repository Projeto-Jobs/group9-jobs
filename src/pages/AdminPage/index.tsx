import { useContext } from "react"
import { Listapplications } from "../../components/AdmList/aplic"
import { ListVacancys } from "../../components/AdmList/vacancys"
import { AdmStyled } from "./styles"
import { Link } from "react-router-dom"
import { LoginContext } from "../../providers/LoginContext"
import { StyledText, StyledTitle1} from "../../styles/Typography"
import { StyledButton } from "../../styles/Global"
import { AdmListContext } from "../../providers/AdmListContext"

export const Administration = () => {

   const { option, setOpetion } = useContext(AdmListContext)
   const {login} = useContext(LoginContext) 

   const OptionClick = (click: string) => {
      setOpetion(click)
   }

   return (
      <AdmStyled>
         {option !== "Vagas" && option !== "Candidaturas" && (
            <div id="apresentation-logged">
               <StyledTitle1 color="blue">{login?.name}</StyledTitle1>
               <StyledText text="paragraph">Seja bem vindo (a), selecione uma das opções a baixo:</StyledText>
            </div>
         )}
         <div className="div_Span">
            <StyledText text="boldAlert" onClick={(() => OptionClick("Vagas"))}>Minhas vagas</StyledText>
            <StyledText text="boldAlert" onClick={(() => OptionClick("Candidaturas"))}>Minhas candidaturas</StyledText>
         </div>
         {option === "Vagas" && (
            <div className="container-list">
               <div className="div_Span--button">
                  <StyledTitle1 color="blue">Minhas vagas</StyledTitle1>
                  <Link to="/CreateVacancyPage" style={{ textDecoration: 'none' }}>
                     <StyledButton type="button">Criar vaga</StyledButton>
                  </Link>
               </div>
               <ul>
                  <ListVacancys />
               </ul>
            </div>
         )}
         {option === "Candidaturas" && (
            <div className="container-list container-apply">
                  <StyledTitle1 color="blue">Minhas candidaturas</StyledTitle1>
               <ul>
                  <Listapplications />
               </ul>
            </div>
         )
      }
      </AdmStyled>
   )
}