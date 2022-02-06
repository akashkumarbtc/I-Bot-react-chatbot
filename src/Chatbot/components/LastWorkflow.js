import React from "react";
import Button from "./Styled/Button.Styled";
import ButtonContainer from "./Styled/ButtonContainer.styled";

const LastWorkflow = (props) => {
  const options = [
    {
      text: "Thank You!",
      handler: (id) => props.actionProvider.handleKycQuestions(id),
      id: 7,
    },
    {
      text: "I still have queries",
      handler: (id) => props.actionProvider.handleKycQuestions(id),
      id: 8,
    },
    {
      text: "Main Menu",
      handler: (id) => props.actionProvider.handleMain(id),
      id: 0,
    },
    {
        text: "Back to how to do KYC",
        handler: (id) => props.actionProvider.handleKycQuestions(id),
        id: 9,
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

export default LastWorkflow;
