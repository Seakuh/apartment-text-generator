const API_URL = import.meta.env.VITE_API_URL;

export async function handleUserUpdate(data: {
  name: string;
  location: string;
  age: number;
}) {
  await fetch(`${API_URL}/home-finder/user/update`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}
// here we go
export async function sendMessage(message: string): Promise<string> {
  const response = await fetch(`${API_URL}/home-finder/chatbot/send`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      prompt: message,
      userId: "test-user",
      packageType: "Basic",
    }),
  });

  const data = await response.json();
  return data.response;
}
