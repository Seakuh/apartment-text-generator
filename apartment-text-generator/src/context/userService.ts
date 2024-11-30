export const saveUserToLocalStorage = (email: string, token: string) => {
  localStorage.setItem("token", token);
  localStorage.setItem("email", email);
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("email");
};

export const getUserFromLocalStorage = () => {
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");
  return token && email ? { email, token } : null;
};
