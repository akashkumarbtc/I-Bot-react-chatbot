import React from "react";
import Button from "../Styled/Button.Styled";
import ButtonContainer from "../Styled/ButtonContainer.styled";

const FormSH14 = (props) => {
  const options = [
    {
      text: "What is Form SH 14",
      handler: (id) => {
        props.actionProvider.handleFormQuestions(id);
      },
      id: 5,
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

export default FormSH14;
