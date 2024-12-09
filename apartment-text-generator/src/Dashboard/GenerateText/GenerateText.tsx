import React, { useState } from "react";
import { useUser } from "../../context/UserProvider";
import "./GenerateText.css";
import GenerateTextResult, {
  GenerateTextResultProps,
} from "./GenerateTextResult";
import { processListing } from "./generateTextService";

const GenerateText: React.FC = () => {
  const { user } = useUser();
  const [link, setLink] = useState("");
  const [prompt, setPrompt] = useState("");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  const [resultData, setResultData] = useState<GenerateTextResultProps | null>(
    null
  ); // Speichert detaillierte Daten

  const handleSubmit = async () => {
    if (!user?.token) {
      alert("Bitte einloggen, um fortzufahren.");
      return;
    }

    setLoading(true);
    try {
      const response = await processListing(
        {
          link,
          prompt,
        },
        user.token // JWT-Token für Authentifizierung
      );
      setResultData(response); // Detaillierte Daten speichern
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
        {/* <div
          className="drag-drop-area"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleFileDrop}
        >
          {link ? (
            <p>Link hinzugefügt: {link}</p>
          ) : (
            <p>Drag & Drop oder Link eingeben</p>
          )}
        </div> */}

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
        </>
      )}

      <textarea
        placeholder="Verbesserungsvorschläge"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      />
    </div>
  );
};

export default GenerateText;
