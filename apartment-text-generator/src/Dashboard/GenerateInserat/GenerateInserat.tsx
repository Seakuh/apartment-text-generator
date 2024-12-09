import React, { useState } from "react";
import { getUserIdFromToken } from "../../context/authService";
import { useUser } from "../../context/UserProvider";
import { useToast } from "../../Toast/Toast";
import { generateInserat } from "../service";
import "./GenerateInserat.css";
import Inserat from "./Inserat";

const GenerateInserat: React.FC = () => {
  const { user } = useUser(); // Benutzerprofil aus dem Context abrufen
  const { addToast } = useToast();

  const [prompt, setPrompt] = useState<string>("");
  const [generatedInserat, setGeneratedInserat] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleGenerate = async () => {
    if (!prompt) {
      addToast("Bitte geben Sie einen Prompt ein!", "warning");
      return;
    }

    if (!user) {
      addToast("Benutzer nicht authentifiziert!", "error");
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

      const inserat = response.response;
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
