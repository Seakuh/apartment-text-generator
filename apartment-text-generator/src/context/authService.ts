import { jwtDecode } from "jwt-decode";

export const getToken = () => {
  return localStorage.getItem("token"); // JWT aus Local Storage abrufen
};

export const isAuthenticated = () => {
  return !!getToken(); // Überprüfen, ob ein Token existiert
};

export const logout = () => {
  localStorage.removeItem("token"); // Token entfernen
};

export const getUserIdFromToken = () => {
  const token = getToken();

  if (!token) return null;

  try {
    const decoded: { id: string } = jwtDecode(token); // JWT dekodieren
    console.log("Decoded token:", decoded);
    return decoded.id; // User-ID extrahieren
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};
