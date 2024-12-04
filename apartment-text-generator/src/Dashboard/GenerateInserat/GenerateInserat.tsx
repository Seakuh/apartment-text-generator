import React, { useState } from "react";
import { getUserIdFromToken } from "../../context/authService";
import { useUser } from "../../context/UserProvider";
import "./GenerateInserat.css";
import { generateInserat } from "./service";

const GenerateInserat: React.FC = () => {
  const { user } = useUser(); // Benutzerprofil aus dem Context abrufen
  const [prompt, setPrompt] = useState<string>("");
  const [generatedInserat, setGeneratedInserat] = useState<string>("");
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
      setGeneratedInserat(response);
    } catch (error) {
      console.error("Fehler beim Generieren des Inserats:", error);
    } finally {
      setLoading(false);
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
      {generatedInserat && (
        <div className="generated-inserat-output">
          <h2>Generiertes Inserat:</h2>
          <p>{generatedInserat}</p>
        </div>
      )}
    </div>
  );
};

export default GenerateInserat;
