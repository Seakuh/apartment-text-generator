import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Chat from "./Chat";
import ChatBot from "./chat-bot/ChatBot";
import Dashboard from "./Dashboard/Dashboard";
import LandingPage from "./Landingpage";
import { LanguageProvider } from "./LanguageContext";
import LoginScreen from "./Login/LoginScreen";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/home-finder/" element={<LandingPage />} />
          <Route path="/home-finder/chat" element={<Chat />} />
          <Route path="/home-finder/chat-bot" element={<ChatBot />} />
          <Route path="/home-finder/login" element={<LoginScreen />} />
          <Route path="/home-finder/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
