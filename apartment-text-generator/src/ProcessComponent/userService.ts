const API_URL = import.meta.env.VITE_API_URL;

export const sendUserData = async (
  email: string,
  prompt: string,
  packageId: string
) => {
  try {
    const stripeResponse = await fetch(
      `${API_URL}/stripe/checkout-session`, // Aufruf des neuen Stripe-Modules
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, packageId }), // Sende Email und Paket-ID an Stripe
      }
    );

    // Überprüfe, ob die Stripe-Anfrage erfolgreich war
    if (!stripeResponse.ok) {
      throw new Error(`Stripe Error: ${stripeResponse.statusText}`);
    }

    const { sessionId } = await stripeResponse.json(); // Extrahiere Session-ID

    const result = await fetch(
      `${API_URL}/home-finder/users/new-user-process`, // Sende die User-Daten an den Backend-Service
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, prompt, packageId, sessionId }), // Füge Session-ID in die User-Daten ein
      }
    );

    // Überprüfe, ob die User-Daten erfolgreich gesendet wurden
    if (!result.ok) {
      throw new Error(`User Data Error: ${result.statusText}`);
    }

    const finalResult = await result.json();
    console.log("User data successfully sent:", finalResult);
    return finalResult;
  } catch (error) {
    console.error("Failed to send user data and initiate Stripe session:", error);
    throw error;
  }
};
