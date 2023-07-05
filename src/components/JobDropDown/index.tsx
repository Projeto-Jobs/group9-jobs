import { StyledJobDropDown } from "./styles";
import imgMinus from "../../assets/plus.svg";
import imgMax from "../../assets/minus.svg";
import { useState } from "react";
import { StyledTitle3 } from "../../styles/Typography";
import { IJob } from "../../providers/JobsListContext";

interface IDropDownProps {
  item: IJob;
}

export const JobDropDown = ({ item }: IDropDownProps) => {
  const [showButton, setShowButton] = useState(true);

  const [showParagraph, setShowParagraph] = useState(false);

  const modifyButton = () => {
    setShowButton(!showButton);
    setShowParagraph(!showParagraph);
  };
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
          <StyledTitle3>{item.position}</StyledTitle3>
        </div>
        <button>Candidatar-se</button>
      </div>
      {showParagraph && <p>{item.description}</p>}
    </StyledJobDropDown>
  );
};
