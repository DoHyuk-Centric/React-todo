import { validateSignup } from "./validateSignup";

export const handleSignup = async (e, userSignupData) => {
  e.preventDefault();

  const valid = validateSignup(e, userSignupData);
  if (!valid) return;

  const res = await fetch("http://localhost:8080/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: userSignupData.userName,
      userID: userSignupData.userID,
      userPW: userSignupData.userPW,
      email: userSignupData.userEmail,
      phone: userSignupData.userTell,
    }),
  });

  const text = await res.text();
  alert(text);
};
