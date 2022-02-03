import React from "react";
import Button from "../Styled/Button.Styled";
import ButtonContainer from "../Styled/ButtonContainer.styled";

const FormISR3 = (props) => {
  const options = [
    {
      text: "What is Form ISR 3",
      handler: (id) => {
        props.actionProvider.handleFormQuestions(id);
      },
      id: 3,
    },
    {
      text: "Form",
      handler: (id) => {
        props.actionProvider.handleFormType(id);
      },
      id: 0,
    },
    {
      text: "Back",
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

export default FormISR3;
