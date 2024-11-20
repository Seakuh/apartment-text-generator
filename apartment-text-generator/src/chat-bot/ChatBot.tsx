import React, { useState } from "react";
import Header from "../Header";
import { sendMessage } from "../services/chatBotService";
import "./ChatBot.css";
import UserInfo from "./components/UserInfo/UserInfo";
import Dialog from "./components/Dialog/Dialog";

const ChatBot: React.FC = () => {
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

  const handleSendMessage = async () => {
    if (!input.trim()) return;
    const newMessage = { text: input, isUser: true };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setLoading(true);

    const response = await sendMessage(input);
    setMessages((prev) => [...prev, { text: response, isUser: false }]);
    setLoading(false);
  };

  return (
    <div className="chatbot-container">
      <Header />
      <UserInfo initialData={{
        name: "",
        location: "",
        age: 0
      }} onUpdate={function (data: { name: string; location: string; age: number; }): void {
        throw new Error("Function not implemented.");
      } }></UserInfo>
      <Dialog></Dialog>
    </div>
  );
};

export default ChatBot;
