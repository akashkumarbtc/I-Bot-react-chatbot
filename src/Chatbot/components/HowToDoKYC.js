import React from "react";
import Button from "./Styled/Button.Styled";
import ButtonContainer from "./Styled/ButtonContainer.styled";

const HowToDoKYC = (props) => {
  const options = [
    {
      text: "What is E-Sign",
      handler: (id) => props.actionProvider.handleKycQuestions(id),
      id: 4,
    },
    {
      text: "What is PAN link to Aadhar",
      handler: (id) => props.actionProvider.handleKycQuestions(id),
      id: 5,
    },
    {
      text: "Status of Pan Linked to Aadhar",
      handler: (id) => props.actionProvider.handleKycQuestions(id),
      id: 6,
    },
    {
      text: "Main Menu",
      handler: (id) => props.actionProvider.handleMain(id),
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

export default HowToDoKYC;
