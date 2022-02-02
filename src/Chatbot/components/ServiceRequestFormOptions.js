import React from "react";
import Button from "./Styled/Button.Styled";
import ButtonContainer from "./Styled/ButtonContainer.styled";

const ServiceRequestFormOptions = (props) => {
  console.log(props);
  const options = [
    {
      text: `Form ISR 1 Register PAN/Update KYC`,
      handler: (id) => {props.actionProvider.handleFormQuestions(id)},
      id: 1,
    },
    {
      text: `Form ISR 2 Change/Updation of Bank Details`,
      handler: (id) => {props.actionProvider.handleFormQuestions(id)},
      id: 2,
    },
    {
      text: `Form ISR 3 Opt-Out of Nomination`,
      handler: (id) => {props.actionProvider.handleFormQuestions(id)},
      id: 3,
    },
    {
      text: `Form SH 13 Registration of New Nomination`,
      handler: (id) => {props.actionProvider.handleFormQuestions(id)},
      id: 4,
    },
    {
      text: `Form SH14 Cancellation / Change in Nomination`,
      handler: (id) => {props.actionProvider.handleFormQuestions(id)},
      id: 5,
    },
  ];

  const buttonsMarkup = options.map((option) => (
    <>
    <Button key={option.id} onClick={() =>option.handler(option.id)} className="option-button">
      {option.text}
    </Button>
    </>
  ));

  return <ButtonContainer>{buttonsMarkup}</ButtonContainer>;
};

export default ServiceRequestFormOptions;
