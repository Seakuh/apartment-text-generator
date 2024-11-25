export const sendUserData = async (
  email: string,
  prompt: string,
  packageId: string
) => {
  try {
    const response = await fetch("http://localhost:3000/api/new-user-process", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, prompt, packageId }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const result = await response.json();
    console.log("User data successfully sent:", result);
    return result;
  } catch (error) {
    console.error("Failed to send user data:", error);
    throw error;
  }
};
