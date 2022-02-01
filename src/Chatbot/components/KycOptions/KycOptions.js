import React from "react";
import Button from "../Styled/Button.Styled"
import ButtonContainer from "../Styled/ButtonContainer.styled"

const KycOptions = (props) => {
    console.log(props);
  const options = [
    {
      text: "What is KYC",
      handler: ()=>{},
      id: 1,
    },
    { text: "What happens if I don’t update KYC", handler: () => {}, id: 2 },
    { text:"How to do KYC", handler: () => {}, id: 3},
    { text:"What is E-Sign", handler: () => {}, id: 4},
    { text:"what is PAN link to Aadhar", handler: () => {}, id: 5},
    { text:"Status of Pan Linked to Aadhar", handler: () => {}, id: 6},
  ];

  const buttonsMarkup = options.map((option) => (
    <Button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </Button>
  ));

  return <ButtonContainer>{buttonsMarkup}</ButtonContainer>;
};

export default KycOptions;
