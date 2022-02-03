import React from "react";
import Button from "../Styled/Button.Styled";
import ButtonContainer from "../Styled/ButtonContainer.styled";

const FormType = (props) => {
  const options = [
    {
      text: "Plain Vanilla Form",
      handler: (id) => {
        props.actionProvider.handleVanillaForm(id);
      },
      id: 1,
    },
    {
      text: "Fillable Form",
      handler: (id) => {
        props.actionProvider.handleFormType(id);
      },
      id: 2,
    },
    {
      text: "Prefilled Form",
      handler: (id) => {
        props.actionProvider.handleFormType(id);
      },
      id: 3,
    },
    {
      text: "Back",
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

export default FormType;
