import React from "react";
import Button from "../Styled/Button.Styled";
import ButtonContainer from "../Styled/ButtonContainer.styled";

const FormISR1 = (props) => {
  const options = [
    {
      text: "What is Form ISR 1",
      handler: (id) => {props.actionProvider.handleFormQuestions(id)},
      id: 1,
    },
    {
      text: "Form",
      handler: (id) => {props.actionProvider.handleFormType(id);},
      id: 11,
    },
    {
      text: "Back To Service Request Forms",
      handler: (id) => { props.actionProvider.handleServiceRequestForm(id)},
    }
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

export default FormISR1;
