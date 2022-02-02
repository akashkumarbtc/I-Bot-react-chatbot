import React from "react";
import Button from "../Styled/Button.Styled";
import ButtonContainer from "../Styled/ButtonContainer.styled";

const FormSH13 = (props) => {
  const options = [
    {
      text: "What is Form SH 13",
      handler: (id) => {
        props.actionProvider.handleFormQuestions(id);
      },
      id: 4,
    },
    {
      text: "Form",
      handler: (id) => {
        props.actionProvider.handleFormType(id);
      },
      id: 0,
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

export default FormSH13;
