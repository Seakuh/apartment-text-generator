import React, { createContext, useContext, useEffect, useState } from "react";

interface User {
  email: string;
  token: string;
}

interface UserContextProps {
  user: User | null;
  isLoading: boolean; // Neuer Ladezustand
  login: (email: string, token: string) => void;
  logout: () => void;
  language: string;
  setLanguage: (value: string) => void;
}

const UserContext = createContext<UserContextProps>({
  user: null,
  isLoading: true, // Ladezustand initialisiert
  login: () => {},
  logout: () => {},
  language: "de",
  setLanguage: () => {},
});

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true); // Ladezustand
  const [language, setLanguage] = useState("de");

  // Initialisierung des Users aus dem LocalStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");

    if (token && email) {
      setUser({ email, token });
    }

    setIsLoading(false); // Initialisierung abgeschlossen
  }, []);

  const login = (email: string, token: string) => {
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
    setUser({ email, token });
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{ user, isLoading, login, logout, language, setLanguage }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
