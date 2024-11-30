// services/api.ts
export const loginUser = async (
  email: string,
  password: string
): Promise<{ token: string }> => {
  const response = await fetch(
    "http://localhost:3000/home-finder/users/login",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Invalid credentials");
  }

  return response.json(); // { token: string }
};
