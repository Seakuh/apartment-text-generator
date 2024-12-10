import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserProvider";
import { useToast } from "../Toast/Toast";
import "./LoginScreen.css";
import { loginUser } from "./service";

const LoginScreen: React.FC = () => {
  const { login } = useUser();
  const { addToast } = useToast();
  const { t } = useTranslation(); // Translation-Hook

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { token } = await loginUser(email, password); // Token vom Service
      console.log(token.accessToken);

      login(email, token.accessToken); // Token im Context speichern
      navigate("/home-finder/dashboard");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message || t("login.error.default"));
        addToast(err.message || t("login.error.default"), "error");
      } else {
        setError(t("login.error.default"));
        addToast(t("login.error.default"), "error");
      }
    }
  };

  return (
    <div className="login-container">
      <img
        src="home_ginue_logo.png"
        alt={t("login.logoAlt")}
        className="logo"
      />
      <h2 className="welcome-text">{t("login.welcomeText")}</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder={t("login.emailPlaceholder")}
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder={t("login.passwordPlaceholder")}
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="login-button-form">
          {t("login.button")}
        </button>
        <p className="register-link">
          {t("login.noAccount")}{" "}
          <a href="/home-finder">{t("login.registerLink")}</a>
        </p>
      </form>
    </div>
  );
};

export default LoginScreen;
