import React from "react";
import "./PromptComponent.css";

interface PromptProps {
  onInputChange: (promptData: string) => void;
  initialValue?: string;
}

const PromptComponent: React.FC<PromptProps> = ({
  onInputChange,
  initialValue = "",
}) => {
  const [inputValue, setInputValue] = React.useState(initialValue);

  React.useEffect(() => {
    setInputValue(initialValue);
  }, [initialValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInputValue(value);
    onInputChange(value);
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
