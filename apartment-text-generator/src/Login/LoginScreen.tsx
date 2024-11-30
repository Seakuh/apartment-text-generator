import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserProvider";
import "./LoginScreen.css";
import { loginUser } from "./service";

const LoginScreen: React.FC = () => {
  const { login } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { token } = await loginUser(email, password); // Token vom Service
      login(email, token); // Token im Context speichern
      navigate("/home-finder/dashboard");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message || "Login failed");
      } else {
        setError("Login failed");
      }
    }
  };

  return (
    <div className="login-container">
      <img src="home_ginue_logo.png" alt="Logo" className="logo" />
      <h2 className="welcome-text">Willkommen zurück! Bitte logge dich ein.</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Passwort"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="login-button">
          Login
        </button>
        <p className="register-link">
          Noch kein Account? <a href="/">Registrieren</a>
        </p>
      </form>
    </div>
  );
};

export default LoginScreen;
