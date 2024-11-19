import React, { createContext, useState } from "react";

interface AppContextProps {
  prompt: string;
  setPrompt: (value: string) => void;
  language: string;
  setLanguage: (value: string) => void;
}

export const AppContext = createContext<AppContextProps>({
  prompt: "",
  setPrompt: () => {},
  language: "de",
  setLanguage: () => {},
});

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [prompt, setPrompt] = useState("");
  const [language, setLanguage] = useState("de");

  return (
    <AppContext.Provider value={{ prompt, setPrompt, language, setLanguage }}>
      {children}
    </AppContext.Provider>
  );
};
