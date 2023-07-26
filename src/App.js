import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import config from "./Chatbot/config";
import MessageParser from "./Chatbot/MessageParser";
import ActionProvider from "./Chatbot/ActionProvider";
import "./App.css";
import "react-chatbot-kit/build/main.css";

function App() {
  const [showChatbot, setShowChatbot] = useState(false);

  const handleChatbotToggle = () => {
    setShowChatbot((prevShowChatbot) => !prevShowChatbot);
  };

  return (
    <div className="App">
      <div style={{ maxWidth: "300px" }}>
        {showChatbot && (
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        )}
        <img
          src="chatbot.png"
          alt="Chatbot-Img"
          style={{ cursor: "pointer", width: "80px", height: "80px" }}
          onClick={handleChatbotToggle}
        />
      </div>
    </div>
  );
}

export default App;
