import React from "react";
import Button from "./Styled/Button.Styled";
import ButtonContainer from "./Styled/ButtonContainer.styled";

const KycOptions = (props) => {
  const options = [
    {
      text: "What is KYC",
      handler: (id) => props.actionProvider.handleKycQuestions(id),
      id: 1,
    },
    {
      text: "What happens if I don’t update KYC",
      handler: (id) => props.actionProvider.handleKycQuestions(id),
      id: 2,
    },
    {
      text: "How to do KYC",
      handler: (id) => props.actionProvider.handleKycQuestions(id),
      id: 3,
    },
    {
      text: "What is E-Sign",
      handler: (id) => props.actionProvider.handleKycQuestions(id),
      id: 4,
    },
    {
      text: "what is PAN link to Aadhar",
      handler: (id) => props.actionProvider.handleKycQuestions(id),
      id: 5,
    },
    {
      text: "Status of Pan Linked to Aadhar",
      handler: (id) => props.actionProvider.handleKycQuestions(id),
      id: 6,
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

export default KycOptions;
