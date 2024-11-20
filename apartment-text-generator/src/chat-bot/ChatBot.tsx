import React from 'react';
import './ChatBot.css';
import UserInfo from './components/UserInfo/UserInfo';
import Dialog from './components/Dialog/Dialog';
import Header from '../Header';
import { handleUserUpdate } from './services/chatBotService';

const ChatBot: React.FC = () => {


  return (
    <div className="chatbot-container">
      <Header></Header>
      <UserInfo
        initialData={{ name: 'Max Muster', location: 'Berlin', age: 30 }}
        onUpdate={handleUserUpdate}
      />
      <div className="chatbot-content">
        {/* Chatbot-Komponente hier */}
        <Dialog></Dialog>
      </div>
    </div>
  );
};

export default ChatBot;
