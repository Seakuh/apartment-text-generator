import React, { useState } from "react";
import "./Dialog.css";
import { sendMessage } from "../../services/chatBotService";

const Dialog: React.FC = () => {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>(
    []
  );
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [onboarding, setOnboarding] = useState(true);
  const [onboardingStep, setOnboardingStep] = useState(0);

  const onboardingQuestions = [
    "Wie alt bist du?",
    "Wohin möchtest du ziehen?",
    "Möchtest du uns etwas über deine Präferenzen sagen?",
  ];

  const handleOnboarding = (answer: string) => {
    if (onboardingStep < onboardingQuestions.length - 1) {
      setMessages((prev) => [
        ...prev,
        { text: answer, isUser: true },
        { text: onboardingQuestions[onboardingStep], isUser: false },
      ]);
      setOnboardingStep((prev) => prev + 1);
    } else {
      setOnboarding(false);
      setMessages((prev) => [
        ...prev,
        { text: answer, isUser: true },
        { text: "Danke! Lass uns mit dem Chat starten.", isUser: false },
      ]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Verhindert den Zeilenumbruch bei Enter
      handleSendMessage();
    } else if (e.key === "Enter" && e.shiftKey) {
      e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`; // Dynamische Größe
    }
  };
  
  const handleSendMessage = async () => {
    if (!input.trim()) return;
  
    // Reset textarea height after sending
    const textarea = document.querySelector("textarea");
    if (textarea) textarea.style.height = "auto";
  
    const newMessage = { text: input, isUser: true };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setLoading(true);
  
    const response = await sendMessage(input);
    setMessages((prev) => [...prev, { text: response, isUser: false }]);
    setLoading(false);
  };
  
  return (
    <div className="dialog-container">
      <div className="dialog-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${
              msg.isUser ? "user-message" : "bot-message"
            }`}
          >
            {msg.text}
          </div>
        ))}
        {loading && (
          <div className="loading">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
        )}
      </div>
      <div className="dialog-input">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Wie koennen wir dir helfen?"
          rows={1}
        />
        <button onClick={handleSendMessage} className="send-button">
          <i className="arrow-up"></i>
        </button>
      </div>
    </div>
  );
};

export default Dialog;
