import React, { useState } from "react";
import KYCQuestions from "./../Data/KYCQuestions";
import styled from "styled-components";
const KycQues1 = () => {
  const [Id, setId] = useState(0);
  const [answer1] = useState(KYCQuestions[0].answer);
  const [answer2, setAnswer2] = useState();
  const [answer3, setAnswer3] = useState();
  const [answer4, setAnswer4] = useState();
  const [answer5, setAnswer5] = useState();
  const handleId = () => {
    const temp = Id + 1;
    setId(temp);
    if (temp > 0) {
      setAnswer2(KYCQuestions[1].answer);
    }
    if (temp > 1) {
      setAnswer3(KYCQuestions[2].answer);
    }
    if (temp > 2) {
      setAnswer4(KYCQuestions[3].answer);
    }
    if (temp > 3) {
      setAnswer5(KYCQuestions[4].answer);
    }
  };

  const AnswerContainer = styled.div`
  margin:5px 0px;
  padding: 5px 0px;
  border-bottom:0.2px solid white; 
  `;

  return (
    <div>
      <>
        <AnswerContainer>{answer1}</AnswerContainer>
        {answer2 ? <AnswerContainer>{answer2}</AnswerContainer> : <></> }
        {answer3 ? <AnswerContainer>{answer3}</AnswerContainer> : <></> }
        {answer4 ? <AnswerContainer>{answer4}</AnswerContainer> : <></> }
        {answer5 ? <AnswerContainer>{answer5}</AnswerContainer> : <></> }
        <p
          onClick={handleId}
          style={{ color: "navajowhite", cursor: "pointer" }}
        >
          {answer5 ? "" : "Read more..."}
        </p>
      </>
    </div>
  );
};

export default KycQues1;
