import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Chat from "./Chat";
import ChatBot from "./chat-bot/ChatBot";
import Dashboard from "./Dashboard/Dashboard";
import GenerateInserat from "./Dashboard/GenerateInserat/GenerateInserat";
import GenerateText from "./Dashboard/GenerateText/GenerateText";
import LandingPage from "./Landingpage";
import { LanguageProvider } from "./LanguageContext";
import Layout from "./Layout";
import LoginScreen from "./Login/LoginScreen";
import User from "./User/User";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/home-finder" element={<Layout />}>
            <Route index path="/home-finder/home" element={<Dashboard />} />
            <Route path="/home-finder/" element={<LandingPage />} />
            <Route path="/home-finder/login" element={<LoginScreen />} />
            <Route path="/home-finder/chat" element={<Chat />} />
            <Route path="/home-finder/chat-bot" element={<ChatBot />} />
            <Route path="/home-finder/user" element={<User />} />
            <Route path="/home-finder/dashboard" element={<Dashboard />} />
            <Route
              path="/home-finder/generate-message"
              element={<GenerateText />}
            />
            <Route
              path="/home-finder/generate-inserat"
              element={<GenerateInserat />}
            />
          </Route>
          <Route path="/home-finder/login" element={<LoginScreen />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
