import React from "react";
import { useUser } from "../../context/UserProvider";
import "./GenerateTextResult.css";

export interface GenerateTextResultProps {
  platform: string;
  link: string;
  title: string;
  description: string;
  generatedMessage: string;
  landlordName: string;
  landlordEmail: string;
}

const GenerateTextResult: React.FC<GenerateTextResultProps> = ({
  platform,
  link,
  title,
  description,
  generatedMessage,
  landlordName,
  landlordEmail,
}) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedMessage);
    alert("Text wurde in die Zwischenablage kopiert! 📋");
  };
  const { user } = useUser();

  return (
    <div className="generate-text-result">
      <h1 className="neon-title">Dein Generierter Text</h1>
      <div className="details-container">
        <div className="details-row">
          <strong>Platform:</strong>
          <span>{platform || "Nicht verfügbar"}</span>
        </div>
        <div className="details-row">
          <strong>Link:</strong>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {link}
          </a>
        </div>
        <div className="details-row">
          <strong>Title:</strong>
          <span>{title || "Nicht verfügbar"}</span>
        </div>
        <div className="details-row">
          <strong>Description:</strong>
          <span>{description || "Nicht verfügbar"}</span>
        </div>
        <div className="details-row">
          <strong>Landlord Name:</strong>
          <span>{landlordName || "Nicht verfügbar"}</span>
        </div>
        <div className="details-row">
          <strong>Landlord Email:</strong>
          <span>{landlordEmail || "Nicht verfügbar"}</span>
        </div>
      </div>
      <div className="generated-message-container">
        <div className="generated-message-header">
          <h2>Generierter Text</h2>
          <button
            className="copy-button"
            onClick={copyToClipboard}
            title="In Zwischenablage kopieren"
          >
            📋
          </button>
        </div>
        <p
          className="generated-message"
          dangerouslySetInnerHTML={{ __html: generatedMessage }}
        />
      </div>
      <button
        className="to-listings-button"
        onClick={() => (window.location.href = `/home-finder/listings/`)}
      >
        Zu meinen Texten
      </button>
    </div>
  );
};

export default GenerateTextResult;
