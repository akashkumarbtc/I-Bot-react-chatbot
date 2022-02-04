import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import "./App.css";
import MessageParser from "./Chatbot/MessageParser";
import ActionProvider from "./Chatbot/ActionProvider";
import config from "./Chatbot/config";
import styled from "styled-components";
import PdfFormDisplay from "./Chatbot/components/Forms/PdfFormDisplay";

const Logo = styled.span`
  height: 35px;
  width: 35px;
  border-radius: 50%;
`;

function App() {
  const [showBot, setBot] = useState(true);
  const [displayForm, setDisplayForm] = useState(false);
    const [pdffile, setPdfFile] = useState(null);
  function handleBot() {
    const botState = !showBot;
    setBot(botState);
  }
  return (
    <div className="App">
      <header className="App-header">
        {showBot && displayForm && <PdfFormDisplay displayForm={displayForm} />}
        {showBot && (
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
            setDisplayForm = {setDisplayForm}
            setPdfFile = {setPdfFile}
          />
        )}
        <button onClick={handleBot}>
          <Logo>I-Bot</Logo>
        </button>
      </header>
    </div>
  );
}

export default App;
