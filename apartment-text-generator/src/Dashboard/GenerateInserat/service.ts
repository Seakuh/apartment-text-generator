interface GenerateInseratParams {
  prompt: string;
  userId: string;
}

export const generateInserat = async (
  data: GenerateInseratParams,
  token: string
): Promise<string> => {
  const url = "http://localhost:3000/home-finder/chatbot/generate-inserat";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // JWT-Token in den Header einfügen
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result.listing; // Rückgabe des generierten Inserats
  } catch (error) {
    console.error("Error in generateInserat:", error);
    throw error;
  }
};
