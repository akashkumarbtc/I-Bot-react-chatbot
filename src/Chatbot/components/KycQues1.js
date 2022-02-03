import React, { useState } from "react";

const KycQues1 = ({question}) => {
  const [Id, setId] = useState(1);
//   const handleId = () => {
//       let temp = id+1;
//     // setId(temp);
//     console.log(temp);
//   };

  return (
    <div>
      <>
        <p>${question[Id].answer}</p>
        <p onClick={setId(Id+1)}>Read more...</p>
      </>
    </div>
  );
};

export default KycQues1;
