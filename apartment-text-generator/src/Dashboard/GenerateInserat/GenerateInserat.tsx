import React, { useState } from "react";
import { getUserIdFromToken } from "../../context/authService";
import { useUser } from "../../context/UserProvider";
import { generateInserat } from "../service";
import "./GenerateInserat.css";
import Inserat from "./Inserat";

const GenerateInserat: React.FC = () => {
  const { user } = useUser(); // Benutzerprofil aus dem Context abrufen
  const [prompt, setPrompt] = useState<string>("");
  const [generatedInserat, setGeneratedInserat] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleGenerate = async () => {
    if (!prompt) {
      alert("Bitte geben Sie einen Prompt ein!");
      return;
    }

    if (!user) {
      alert("Benutzer nicht authentifiziert!");
      return;
    }

    setLoading(true);
    try {
      const token = user.token;
      if (!token) {
        throw new Error("User token is null");
      }
      const response = await generateInserat(
        { prompt: prompt, userId: getUserIdFromToken()! },
        token
      );

      // Debugging-Log, um die tatsächliche Struktur zu überprüfen
      console.log("API-Antwort:", response);
      const inserat = response.response; // `response` aus dem JSON extrahieren
      setGeneratedInserat(inserat);
    } catch (error) {
      console.error("Fehler beim Generieren des Inserats:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (generatedInserat) {
      navigator.clipboard.writeText(generatedInserat);
      alert("Inserat wurde in die Zwischenablage kopiert! 📋");
    }
  };

  return (
    <div className="generate-inserat-container">
      <h1>Inserat Generieren</h1>
      <textarea
        className="prompt-input"
        placeholder="Geben Sie hier Ihren Prompt ein..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={handleGenerate} disabled={loading}>
        {loading ? "Generieren..." : "Inserat Generieren"}
      </button>
      {(loading || generatedInserat) && (
        <Inserat
          content={generatedInserat || ""}
          onCopy={handleCopy}
          loading={loading}
        />
      )}
    </div>
  );
};

export default GenerateInserat;
