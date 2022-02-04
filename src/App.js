import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import "./App.css";
import MessageParser from "./Chatbot/MessageParser";
import ActionProvider from "./Chatbot/ActionProvider";
import config from "./Chatbot/config";
import styled from "styled-components";

const Logo = styled.span`
  height: 25px;
  width: 25px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
`;

function App() {
  const [showBot, setBot] = useState(false);
  function handleBot() {
    const botState = !showBot;
    setBot(botState);
  }
  return (
    <div className="App">
      <header className="App-header">
        {showBot && (
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
          />
        )}
        <button onClick={handleBot}>
          <Logo></Logo>
        </button>
      </header>
    </div>
  );
}

export default App;
