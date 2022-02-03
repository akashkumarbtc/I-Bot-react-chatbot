import React from "react";
import Button from "./Styled/Button.Styled";
import ButtonContainer from "./Styled/ButtonContainer.styled";

const ServiceRequestFormOptions = (props) => {
  console.log(props);
  const options = [
    {
      text: `Form ISR 1 Register PAN/Update KYC`,
      handler: props.actionProvider.handleFormIsr1,
      id: 1,
    },
    {
      text: `Form ISR 2 Change/Updation of Bank Details`,
      handler: props.actionProvider.handleFormIsr2,
      id: 2,
    },
    {
      text: `Form ISR 3 Opt-Out of Nomination`,
      handler: props.actionProvider.handleFormIsr3,
      id: 3,
    },
    {
      text: `Form SH 13 Registration of New Nomination`,
      handler: props.actionProvider.handleFormSh13,
      id: 4,
    },
    {
      text: `Form SH14 Cancellation / Change in Nomination`,
      handler: props.actionProvider.handleFormSh14,
      id: 5,
    },
    {
      text: "Home",
      handler: (id) => props.actionProvider.handleMain(id),
      id: 0,
    }
  ];

  const buttonsMarkup = options.map((option) => (
    <>
    <Button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </Button>
    </>
  ));

  return <ButtonContainer>{buttonsMarkup}</ButtonContainer>;
};

export default ServiceRequestFormOptions;
