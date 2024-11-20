// src/services/chatbotService.ts
export async function sendMessage(prompt: string): Promise<string> {
  const response = await fetch("http://localhost:3000/chatbot/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt, userId: "test-user", packageType: "Basic" }),
  });

  const data = await response.json();
  return data.response;
}


export const handleUserUpdate = (data: { name: string; location: string; age: number }) => {
  // Hier können die aktualisierten Benutzerdaten direkt ans Backend gesendet werden
  fetch('http://localhost:3000/user/update', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
};