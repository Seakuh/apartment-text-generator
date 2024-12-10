const API_URL = import.meta.env.VITE_API_URL;

export const sendUserData = async (
  email: string,
  prompt: string,
  packageId: string
) => {
  try {
    const response = await fetch(
      `${API_URL}/home-finder/users/new-user-process`, // Verwende die korrekte HTTPS-Domain und Route
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, prompt, packageId }), // Payload der Anfrage
      }
    );

    // Überprüfe, ob die Anfrage erfolgreich war
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const result = await response.json(); // Parse die Antwort als JSON
    console.log("User data successfully sent:", result);
    return result;
  } catch (error) {
    console.error("Failed to send user data:", error);
    throw error;
  }
};
