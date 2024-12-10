import React, { useState } from "react";
import { useUser } from "../../context/UserProvider";
import { useToast } from "../../Toast/Toast";
import { generateText } from "../service";
import "./GenerateText.css";
import GenerateTextResult, {
  GenerateTextResultProps,
} from "./GenerateTextResult";

const GenerateText: React.FC = () => {
  const { user } = useUser();
  const { addToast } = useToast();
  const [link, setLink] = useState("");
  const [prompt, setPrompt] = useState("");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  const [resultData, setResultData] = useState<GenerateTextResultProps | null>(
    null
  ); // Speichert detaillierte Daten

  const handleSubmit = async () => {
    if (!user?.token) {
      addToast("Bitte einloggen, um fortzufahren.", "error");
      return;
    }

    if (!link) {
      addToast("Bitte geben Sie einen Link ein!", "warning");
      return;
    }

    if (!prompt) {
      addToast("Bitte geben Sie zusätzliche Informationen ein!", "warning");
      return;
    }

    if (!user) {
      addToast("Benutzer nicht authentifiziert!", "error");
      return;
    }

    setLoading(true);

    try {
      const response = await generateText(
        {
          link,
          prompt,
        },
        user.token // JWT-Token für Authentifizierung
      );
      const transformedResult: GenerateTextResultProps = {
        platform: response.platform || "Unknown Platform",
        link: link,
        title: response.title || "No Title",
        description: response.description || "No Description",
        generatedMessage: response.response,
        landlordName: response.landlordName || "Unknown",
        landlordEmail: response.landlordEmail || "Unknown",
      };

      setResultData(transformedResult);
    } catch (error) {
      console.error("Error processing the listing:", error);
      setResultData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="generate-text">
      <h1>Generiere deine Nachricht</h1>
      <>
        <input
          type="text"
          placeholder="Link einfügen"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />

        <textarea
          placeholder="Zusätzliche Informationen eingeben"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <button onClick={handleSubmit} disabled={loading}>
          Nachricht generieren
        </button>

        {loading && (
          <div className="loading-animation">✨ Generiere Nachricht...</div>
        )}
      </>
      {resultData && (
        <>
          <GenerateTextResult
            platform={resultData.platform}
            link={resultData.link}
            title={resultData.title}
            description={resultData.description}
            generatedMessage={resultData.generatedMessage}
            landlordName={resultData.landlordName}
            landlordEmail={resultData.landlordEmail}
          />
          <textarea
            placeholder="Verbesserungsvorschläge"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </>
      )}
    </div>
  );
};

export default GenerateText;
