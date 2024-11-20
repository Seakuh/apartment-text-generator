import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Chat from "./Chat";
import LandingPage from "./Landingpage";
import { LanguageProvider } from "./LanguageContext";
import ChatBot from "./chat-bot/ChatBot";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/home-finder/" element={<LandingPage />} />
          <Route path="/home-finder/chat" element={<Chat />} />
          <Route path="/home-finder/chat-bot" element={<ChatBot />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
