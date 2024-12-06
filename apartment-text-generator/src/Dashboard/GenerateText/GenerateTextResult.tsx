import React from "react";
import { useUser } from "../../context/UserProvider";
import "./GenerateTextResult.css";

interface GenerateTextResultProps {
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
  };
  const { user } = useUser(); // Benutzerprofil aus dem Context abrufen

  return (
    <div className="generate-text-result">
      <h1 className="neon-title">Generierter Text</h1>
      <div className="details-container">
        <h3>Details</h3>
        <p>
          <strong>Platform:</strong> {platform}
        </p>
        <p>
          <strong>Link:</strong>{" "}
          <a href={link} target="_blank" rel="noopener noreferrer">
            {link}
          </a>
        </p>
        <p>
          <strong>Title:</strong> {title}
        </p>
        <p>
          <strong>Description:</strong> {description}
        </p>
        <p>
          <strong>Landlord Name:</strong> {landlordName}
        </p>
        <p>
          <strong>Landlord Email:</strong> {landlordEmail}
        </p>
      </div>
      <div className="generated-message-container">
        <div className="generated-message-header">
          <h2>Generated Message</h2>
          <button
            className="copy-button"
            onClick={copyToClipboard}
            title="In Zwischenablage kopieren"
          >
            📋
          </button>
        </div>
        <p className="generated-message">{generatedMessage}</p>
      </div>
      <button
        className="to-listings-button"
        onClick={() =>
          (window.location.href = `/home-finder/listings/${user?.email}`)
        }
      >
        Zu meinen Texten
      </button>
    </div>
  );
};

export default GenerateTextResult;
