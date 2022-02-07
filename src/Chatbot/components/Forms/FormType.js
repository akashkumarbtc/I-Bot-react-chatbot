import React from "react";
import Button from "../Styled/Button.Styled";
import ButtonContainer from "../Styled/ButtonContainer.styled";
import { useSelector } from "react-redux";

const FormType = (props) => {
  const formId = useSelector((state) => state.setFormId);
  let options = [];
  if (formId === 1) {
    options = [
      {
        text: "Plain Vanilla Form",
        handler: (id) => {
          props.actionProvider.handleISR1Form(id);
        },
        id: 1,
      },
      {
        text: "Fillable Form",
        handler: (id) => {
          props.actionProvider.handleISR1Form(id);
        },
        id: 2,
      },
      {
        text: "Prefilled Form",
        handler: (id) => {
          props.actionProvider.handleISR1Form(id);
        },
        id: 3,
      },
      {
        text: "Back To Service Request Forms",
        handler: (id) => {
          props.actionProvider.handleServiceRequestForm(id);
        },
      },
    ];
  } else if (formId === 2) {
    options = [
      {
        text: "Plain Vanilla Form",
        handler: (id) => {
          props.actionProvider.handleISR2Form(id);
        },
        id: 1,
      },
      {
        text: "Fillable Form",
        handler: (id) => {
          props.actionProvider.handleISR2Form(id);
        },
        id: 2,
      },
      {
        text: "Prefilled Form",
        handler: (id) => {
          props.actionProvider.handleISR2Form(id);
        },
        id: 3,
      },
      {
        text: "Back To Service Request Forms",
        handler: (id) => {
          props.actionProvider.handleServiceRequestForm(id);
        },
      },
    ];
  } else if (formId === 3) {
    options = [
      {
        text: "Plain Vanilla Form",
        handler: (id) => {
          props.actionProvider.handleISR3Form(id);
        },
        id: 1,
      },
      {
        text: "Fillable Form",
        handler: (id) => {
          props.actionProvider.handleISR3Form(id);
        },
        id: 2,
      },
      {
        text: "Prefilled Form",
        handler: (id) => {
          props.actionProvider.handleISR3Form(id);
        },
        id: 3,
      },
      {
        text: "Back To Service Request Forms",
        handler: (id) => {
          props.actionProvider.handleServiceRequestForm(id);
        },
      },
    ];
  }

    console.log(options);
  return (
    <ButtonContainer>
      {options.length &&
        options.map((option) => (
          <>
            <Button
              key={option.id}
              onClick={() => option.handler(option.id)}
              className="option-button"
            >
              {option.text}
            </Button>
          </>
        ))}
    </ButtonContainer>
  );
};

export default FormType;
