import React, { useState } from "react";
import PackagesSelection from "./PackagesSelection";
import "./ProcessComponent.css";
import PromptComponent from "./PromptComponent";
import SuccessModal from "./SuccessModal";
import { sendUserData } from "./userService";

type ProcessComponentProps = {
  email: string;
  onClose: () => void;
  initialPrompt?: string;
};

const ProcessComponent: React.FC<ProcessComponentProps> = ({
  email,
  onClose,
  initialPrompt,
}) => {
  const [promptData, setPromptData] = useState(initialPrompt ?? "");
  const [selectedPackage, setSelectedPackage] = useState<string>("basic");
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
      console.log("Server response:", email, promptData, selectedPackage);
      sendUserData(email, promptData, selectedPackage);
      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
        onClose();
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
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={onClose}>
              ✖
            </button>
            <h2 className="modal-title">Dein Profil erstellen</h2>
            <div className="prompt-and-packages">
              <div className={`prompt-container ${promptError ? "error" : ""}`}>
                <PromptComponent
                  onInputChange={setPromptData}
                  initialValue={initialPrompt ?? ""}
                />
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
