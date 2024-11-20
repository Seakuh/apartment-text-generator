import React, { useState } from 'react';
import './ChatBot.css';
import UserInfo from './components/UserInfo/UserInfo';
import Dialog from './components/Dialog/Dialog';
import Header from '../Header';
import { handleUserUpdate, sendMessage } from './services/chatBotService';

const ChatBot: React.FC = () => {
  // Nutzer und Nachrichten State
  const [userData, setUserData] = useState({
    name: 'Max Muster',
    location: 'Berlin',
    age: 30,
  });

  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [loading, setLoading] = useState(false);

  // Nutzer-Update verarbeiten
  const updateUser = async (data: { name: string; location: string; age: number }) => {
    setUserData(data);
    await handleUserUpdate(data); // Daten ans Backend senden
  };

  // Nachricht senden
  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return;

    setMessages((prev) => [...prev, { text: message, isUser: true }]);
    setLoading(true);

    const response = await sendMessage(message);
    setMessages((prev) => [...prev, { text: response, isUser: false }]);
    setLoading(false);
  };

  return (
    <div className="chatbot-container">
      <Header />
      <UserInfo initialData={userData} onUpdate={updateUser} />
      <div className="chatbot-content">
        <Dialog messages={messages} onSend={handleSendMessage} loading={loading} />
      </div>
    </div>
  );
};

export default ChatBot;
