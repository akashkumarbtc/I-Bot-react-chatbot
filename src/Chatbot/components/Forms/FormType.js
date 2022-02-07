import React, {useEffect, useState} from "react";
import Button from "../Styled/Button.Styled";
import ButtonContainer from "../Styled/ButtonContainer.styled";
import { useSelector } from "react-redux";

const FormType = (props) => {
  const {formTypeId} = useSelector((state) => state.setFormId);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    console.log(typeof(formTypeId));
    if (formTypeId === 1 || formTypeId === "1") {
      console.log("formTypeId");
      setOptions([
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
      ])
    }else if (formTypeId === 2 || formTypeId === "2") {
      console.log("formTypeId");
      setOptions([
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
      ])
    } else if (formTypeId === 3 || formTypeId === "3") {
      console.log("formTypeId");
      setOptions([
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
      ])
    } else if (formTypeId === 4 || formTypeId === "4") {
      console.log("formTypeId");
      setOptions([
        {
          text: "Plain Vanilla Form",
          handler: (id) => {
            props.actionProvider.handleSH13Form(id);
          },
          id: 1,
        },
        {
          text: "Fillable Form",
          handler: (id) => {
            props.actionProvider.handleSH13Form(id);
          },
          id: 2,
        },
        {
          text: "Prefilled Form",
          handler: (id) => {
            props.actionProvider.handleSH13Form(id);
          },
          id: 3,
        },
        {
          text: "Back To Service Request Forms",
          handler: (id) => {
            props.actionProvider.handleServiceRequestForm(id);
          },
        },
      ])
    } else if (formTypeId === 5 || formTypeId === "5") {
      console.log("formTypeId");
      setOptions([
        {
          text: "Plain Vanilla Form",
          handler: (id) => {
            props.actionProvider.handleSH14Form(id);
          },
          id: 1,
        },
        {
          text: "Fillable Form",
          handler: (id) => {
            props.actionProvider.handleSH14Form(id);
          },
          id: 2,
        },
        {
          text: "Prefilled Form",
          handler: (id) => {
            props.actionProvider.handleSH14Form(id);
          },
          id: 3,
        },
        {
          text: "Back To Service Request Forms",
          handler: (id) => {
            props.actionProvider.handleServiceRequestForm(id);
          },
        },
      ])
    }
  }, [formTypeId])

  console.log(formTypeId);
  console.log("len " + options.length);
  return (
    <ButtonContainer>
      {formTypeId && options.length &&
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
