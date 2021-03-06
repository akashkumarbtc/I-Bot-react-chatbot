import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import "./App.css";
import MessageParser from "./Chatbot/MessageParser";
import ActionProvider from "./Chatbot/ActionProvider";
import config from "./Chatbot/config";
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import PdfFormDisplay from "./Chatbot/components/Forms/PdfFormDisplay";
import { closePdfFile } from './actions/PdfDisplayActions';


const Logo = styled.span`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  font-weight: bold;
  
`;

function App() {
  const {setDisplay, pdfFile} = useSelector(state => state.displayPDF)
  const [showBot, setBot] = useState(true);
  
  const dispatch = useDispatch()

  function handleBot() {
    const botState = !showBot;
    setBot(botState);

    dispatch(closePdfFile())
  }
  return (
    <div className="App">
      {/* <h1>Link Intime Chatbot [I-Bot] Demo</h1> */}
      <header className="App-header">
        <div className="pdf-display">
            {setDisplay ? showBot && pdfFile && (<PdfFormDisplay pdf={pdfFile} />): ""}
            {/* <PdfFormDisplay pdf={ISR1Vanilla} /> */}
        </div>
        <div className="chatbot-display">
          {showBot && (
            <>
            
            <Chatbot
              config={config}
              actionProvider={ActionProvider}
              messageParser={MessageParser}

            />
            </>
          )}
          <button className="main-button" onClick={handleBot}>
            <Logo>{showBot ? "X": "I-Bot"}</Logo>
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
