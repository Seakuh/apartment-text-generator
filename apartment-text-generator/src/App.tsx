import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Chat from "./Chat";
import LandingPage from "./Landingpage";
import { LanguageProvider } from "./LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/home-finder/" element={<LandingPage />} />
          <Route path="/home-finder/chat" element={<Chat />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
