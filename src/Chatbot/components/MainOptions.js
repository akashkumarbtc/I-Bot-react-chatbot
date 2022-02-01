import React from "react";
import Button from "./Styled/Button.Styled"
import ButtonContainer from "./Styled/ButtonContainer.styled"


const MainOptions = (props) => {
  const options = [
    {
      text: "KYC",
      handler: props.actionProvider.handleKYC,
      id: 1,
    },
    { text: "Service Request Forms", handler: props.actionProvider.handleServiceRequestForm, id: 2 },
  ];

  const buttonsMarkup = options.map((option) => (
    <Button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </Button>
  ));

  return <ButtonContainer>{buttonsMarkup}</ButtonContainer>;
};

export default MainOptions;
