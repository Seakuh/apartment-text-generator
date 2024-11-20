export async function handleUserUpdate(data: { name: string; location: string; age: number }) {
  await fetch('http://localhost:3000/user/update', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
}

export async function sendMessage(message: string): Promise<string> {
  const response = await fetch('http://localhost:3000/chatbot/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt: message, userId: 'test-user', packageType: 'Basic' }),
  });

  const data = await response.json();
  return data.response;
}
