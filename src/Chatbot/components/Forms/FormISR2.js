import React from "react";
import Button from "../Styled/Button.Styled";
import ButtonContainer from "../Styled/ButtonContainer.styled";

const FormISR2 = (props) => {
  const options = [
    {
      text: "What is Form ISR 2",
      handler: (id) => {
        props.actionProvider.handleFormQuestions(id);
      },
      id: 2,
    },
    {
      text: "Form",
      handler: (id) => {
        props.actionProvider.handleFormType(id);
      },
      id: 2,
    },
    {
      text: "Back To Service Request Forms",
      handler: (id) => {
        props.actionProvider.handleServiceRequestForm(id);
      },
    },
  ];

  const buttonsMarkup = options.map((option) => (
    <>
      <Button
        key={option.id}
        onClick={() => option.handler(option.id)}
        className="option-button"
      >
        {option.text}
      </Button>
    </>
  ));

  return <ButtonContainer>{buttonsMarkup}</ButtonContainer>;
};

export default FormISR2;
