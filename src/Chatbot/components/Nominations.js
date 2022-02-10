import React from "react";
import Button from "./Styled/Button.Styled";
import ButtonContainer from "./Styled/ButtonContainer.styled";

const Nominations = (props) => {
  console.log(props);
  const options = [
    {
      text: `Form ISR 3 Opt-Out of Nomination`,
      handler: (id) => props.actionProvider.handleFormIsr3(id),
      id: 3,
    },
    {
      text: `Form SH 13 Registration of New Nomination`,
      handler: (id) => props.actionProvider.handleFormSh13(id),
      id: 4,
    },
    {
      text: `Form SH14 Cancellation / Change in Nomination`,
      handler: (id) => props.actionProvider.handleFormSh14(id),
      id: 5,
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

export default Nominations;
