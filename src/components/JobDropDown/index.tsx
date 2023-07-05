import { StyledJobDropDown } from "./styles";
import imgMinus from "../../assets/plus.svg";
import imgMax from "../../assets/minus.svg";
import { useState } from "react";
import { StyledTitle3 } from "../../styles/Typography";

export const JobDropDown = () => {
  const [showButton, setShowButton] = useState(true);

  const [showParagraph, setShowParagraph] = useState(false);

  const modifyButton = () => {
    setShowButton(!showButton);
    setShowParagraph(!showParagraph);
  };
  return (
    <StyledJobDropDown >
      <div>
        {showButton ? (
          <img onClick={modifyButton} src={imgMinus} alt="" />
        ) : (
          <img onClick={modifyButton} src={imgMax} alt="" />
        )}
        <div>
          <span>Kenzie</span>
          <StyledTitle3>Desenvolvedor full stack</StyledTitle3>
        </div>
        <button>Candidatar-se</button>
      </div>
      {showParagraph && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quos
          ipsa incidunt minima in quo necessitatibus blanditiis molestias
          reprehenderit modi! Reiciendis voluptatum odio vero explicabo aperiam
          quos velit impedit. Facilis!
        </p>
      )}
    </StyledJobDropDown>
  );
};
