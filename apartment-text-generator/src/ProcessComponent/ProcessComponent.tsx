import React, { useState } from "react";
import PackagesSelection from "./PackagesSelection";
import "./ProcessComponent.css";
import PromptComponent from "./PromptComponent";
import SuccessModal from "./SuccessModal";

const ProcessComponent: React.FC<{ email: string; onClose: () => void }> = ({
  email,
  onClose,
}) => {
  const [promptData, setPromptData] = useState("");
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [promptError, setPromptError] = useState(false);
  const [packageError, setPackageError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async () => {
    let hasError = false;

    if (!promptData.trim()) {
      setPromptError(true);
      hasError = true;
    } else {
      setPromptError(false);
    }

    if (!selectedPackage) {
      setPackageError(true);
      hasError = true;
    } else {
      setPackageError(false);
    }

    if (hasError) return;

    try {
      // Hier könnte die Funktion sendUserData aufgerufen werden
      console.log("Server response:", email, promptData, selectedPackage);
      setShowSuccess(true); // Zeigt das SuccessModal an

      // Schließt das Modal nach 3 Sekunden, nachdem der SuccessModal angezeigt wurde
      setTimeout(() => {
        setShowSuccess(false); // SuccessModal ausblenden
        onClose(); // Modal schließen
      }, 8000);
    } catch (error) {
      console.error("Error while sending data to server:", error);
    }
  };

  return (
    <>
      {showSuccess && <SuccessModal />}

      {!showSuccess && (
        <div className="modal-overlay">
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Verhindert Schließen durch Klick auf Modal
          >
            <h2 className="modal-title">Dein Profil erstellen</h2>
            <div className="prompt-and-packages">
              <div className={`prompt-container ${promptError ? "error" : ""}`}>
                <PromptComponent onInputChange={setPromptData} />
                {promptError && (
                  <p className="error-message">
                    Bitte fülle den Prompt aus, um fortzufahren.
                  </p>
                )}
              </div>
              <div
                className={`packages-container ${packageError ? "error" : ""}`}
              >
                <PackagesSelection onPackageSelect={setSelectedPackage} />
                {packageError && (
                  <p className="error-message">
                    Bitte wähle ein Paket, um fortzufahren.
                  </p>
                )}
              </div>
            </div>
            <button className="submit-button" onClick={handleSubmit}>
              Jetzt dein Zuhause finden
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProcessComponent;
