import React, { useState } from "react";
import KYCQuestions from "./../Data/KYCQuestions";
const KycQues1 = () => {
  const [Id, setId] = useState(0);
  const [answer, setAnswer] = useState(KYCQuestions[0].answer);
  const handleId = () => {
    const temp = Id + 1;
    setId(temp);
    setAnswer(answer + KYCQuestions[Id].answer)
    console.log(KYCQuestions);
    console.log(KYCQuestions[Id].answer);
  };

  return (
    <div>
      <>
        <p>{answer}</p>
        <p onClick={handleId} style={{color:"navajowhite", cursor: "pointer"}}>Read more...</p>
      </>
    </div>
  );
};

export default KycQues1;
