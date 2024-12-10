interface BackendParams {
  prompt?: string;
  userId?: string;
  link?: string; // Optionaler Parameter nur für 'generateText'
}

interface BackendResponse {
  response: string;
  platform?: string;
  link?: string;
  title?: string;
  description?: string; // Beschreibung hinzufügen
  landlordName?: string;
  landlordEmail?: string;
}

const callBackendService = async (
  endpoint: string,
  data: BackendParams,
  token: string
): Promise<BackendResponse> => {
  const url = `http://localhost:3000/home-finder/chatbot/${endpoint}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(`Error in ${endpoint}:`, error);
    throw error;
  }
};

// Spezifische Aufrufe
export const generateInserat = (
  data: BackendParams,
  token: string
): Promise<BackendResponse> =>
  callBackendService("generate-inserat", data, token);

export const generateText = (
  data: BackendParams,
  token: string
): Promise<BackendResponse> => callBackendService("generate-text", data, token);
