// services/api.ts
const API_URL = import.meta.env.VITE_API_URL;

export const loginUser = async (
  email: string,
  password: string
): Promise<{ token: { accessToken: string } }> => {
  const response = await fetch(`${API_URL}/home-finder/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Invalid credentials");
  }
  return response.json(); // { token: string }
};
