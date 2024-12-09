import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserIdFromToken } from "../context/authService";
import Header from "../Header";
import { useToast } from "../Toast/Toast";
import { fetchUserContext } from "../User/service";
import "./ChatBot.css";
import Dialog from "./components/Dialog/Dialog";
import { sendMessage } from "./services/chatBotService";
import UserInfo from "./UserInfo";

const ChatBot: React.FC = () => {
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>(
    []
  );
  const [loading, setLoading] = useState(false);

  const { addToast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const loadUserData = async () => {
      const userId = getUserIdFromToken();
      if (!userId) {
        addToast("Bitte melde Dich an", "error");
        navigate("/"); // Navigiere zur Startseite
        return;
      }

      try {
        const context = await fetchUserContext(userId);
        setUserData(context);
      } catch (error) {
        console.error("Fehler beim Laden der Benutzerdaten:", error);
        addToast("Fehler beim Laden der Benutzerdaten.", "error");
        navigate("/"); // Navigiere zur Startseite bei Fehler
      }
    };

    loadUserData();
  }, [addToast, navigate]);

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return;

    setMessages((prev) => [...prev, { text: message, isUser: true }]);
    setLoading(true);

    try {
      const response = await sendMessage(message);
      setMessages((prev) => [...prev, { text: response, isUser: false }]);
    } catch (error) {
      console.error("Fehler beim Senden der Nachricht:", error);
      addToast("Fehler beim Senden der Nachricht.", "error");
    } finally {
      setLoading(false);
    }
  };

  if (!userData) return <div>Lädt Benutzerdaten...</div>;

  return (
    <div className="chatbot-container">
      <Header />
      <UserInfo userData={userData} />
      <div className="chatbot-content">
        <Dialog
          messages={messages}
          onSend={handleSendMessage}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default ChatBot;
