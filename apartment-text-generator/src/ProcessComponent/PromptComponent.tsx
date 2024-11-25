import React from "react";
import "./PromptComponent.css";

interface PromptProps {
  onInputChange: (promptData: string) => void;
}

const PromptComponent: React.FC<PromptProps> = ({ onInputChange }) => {
  const [inputValue, setInputValue] = React.useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInputValue(value);
    onInputChange(value); // Übergibt die Eingabe direkt an die übergeordnete Komponente
  };

  return (
    <div className="prompt-container">
      <textarea
        className="prompt-textarea"
        placeholder="Beschreibe, was du suchst... (z.B. Wohnung, Ort, Budget, wichtige Merkmale)"
        value={inputValue}
        onChange={handleInputChange}
        required
      />
    </div>
  );
};

export default PromptComponent;
