import React from "react";
import "./Inserat.css";

interface InseratProps {
  content: string;
  onCopy: () => void;
  loading: boolean;
}

const Inserat: React.FC<InseratProps> = ({ content, onCopy, loading }) => {
  return (
    <div className="inserat-container">
      {loading ? (
        <div className="loading-animation">
          <span role="img" aria-label="robot">
            🤖
          </span>
          <p>Roboter generiert dein Inserat...</p>
        </div>
      ) : (
        <>
          <h2>Generiertes Inserat:</h2>
          <p className="inserat-content">{content}</p>
          <button className="copy-button" onClick={onCopy}>
            📋 Kopieren
          </button>
        </>
      )}
    </div>
  );
};

export default Inserat;
