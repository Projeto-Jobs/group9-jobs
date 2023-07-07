import { StyledJobDropDown } from "./styles"
import imgMinus from "../../assets/plus.svg"
import imgMax from "../../assets/minus.svg"
import { SetStateAction, useContext, useState } from "react"
import { StyledTitle3 } from "../../styles/Typography"
import { IJob, JobsListContext } from "../../providers/JobsListContext"

interface IDropDownProps {
  item: IJob;
  setModal: React.Dispatch<SetStateAction<boolean>>;
}

export const JobDropDown = ({ item, setModal }: IDropDownProps) => {
  const [showButton, setShowButton] = useState(true);
  const {setCurrentJob} = useContext(JobsListContext);
  const [showParagraph, setShowParagraph] = useState(false);

  const modifyButton = () => {
    setShowButton(!showButton);
    setShowParagraph(!showParagraph);
  };

  const editModal = () => {
    setCurrentJob(item);
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
          <span>{item.user.name}</span>
          <StyledTitle3 color="black">{item.position}</StyledTitle3>
        </div>
        <button onClick={() => editModal()}>Candidatar-se</button>
      </div>
      {showParagraph && <p>{item.description}</p>}
      
    </StyledJobDropDown>
  );
};
