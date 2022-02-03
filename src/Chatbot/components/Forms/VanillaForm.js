import React from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  border: 1px solid black;
  color: black;
  text-align: left;
`;

const VanillaForm = (props) => {
  return <FormContainer>Vanilla form</FormContainer>;
};

export default VanillaForm;
