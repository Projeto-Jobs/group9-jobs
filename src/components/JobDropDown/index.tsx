import { StyledJobDropDown } from "./styles"
import imgMinus from "../../assets/plus.svg"
import imgMax from "../../assets/minus.svg"
import { SetStateAction, useContext, useState } from "react"
import { StyledText, StyledTitle3 } from "../../styles/Typography"
import { IJob, JobsListContext } from "../../providers/JobsListContext"
import { StyledOutLineButton } from "../../styles/Global"

interface IDropDownProps {
  item: IJob;
  setModal: React.Dispatch<SetStateAction<boolean>>;
}

export const JobDropDown = ({ item, setModal }: IDropDownProps) => {
  const [showButton, setShowButton] = useState(true)
  const {setCurrentJob} = useContext(JobsListContext)
  const [showParagraph, setShowParagraph] = useState(false)

  const modifyButton = () => {
    setShowButton(!showButton)
    setShowParagraph(!showParagraph)
  }

  const editModal = () => {
    setCurrentJob(item)
    setModal(true)
  }

  
  return (
    <StyledJobDropDown>
      <div>
        {showButton ? (
          <img onClick={modifyButton} src={imgMinus} alt="" />
        ) : (
          <img onClick={modifyButton} src={imgMax} alt="" />
        )}
        <div>
          <StyledText text="label">{item.user.name}</StyledText>
          <StyledTitle3 color="black">{item.position}</StyledTitle3>
        </div>
        <StyledOutLineButton onClick={() => editModal()}>Candidatar-se</StyledOutLineButton>
      </div>
      {showParagraph && <StyledText text="paragraph">{item.description}</StyledText>}
      
    </StyledJobDropDown>
  )
}
