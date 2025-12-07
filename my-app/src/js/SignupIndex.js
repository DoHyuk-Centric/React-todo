import api from "../api/axios";
import { validateSignup } from "./validateSignup";

export const handleSignup = async (e, userSignupData) => {
  e.preventDefault();

  const valid = validateSignup(e, userSignupData);
  if (!valid) return;

  try{
    const res = await api.post("/auth/signup", {
      username: userSignupData.userName,
      userID: userSignupData.userID,
      userPW: userSignupData.userPW,
      email: userSignupData.userEmail,
      phone: userSignupData.userTell,
    });
    alert(res.data);
  }catch(err){
    alert("회원가입 실패");
  }
};
