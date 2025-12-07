import api from "../api/axios";

export const handleSignin = async (e, userSignindata) => {
    e.preventDefault();

    try{
        const res = await api.post("/auth/signin",{
        userID: userSignindata.userInputID,
        userPW: userSignindata.userInputPW,
        autoLogin : userSignindata.autoLogin,
    });

        sessionStorage.setItem("accessToken", res.data.accessToken);

        alert("로그인 성공");
    }catch{
        alert("로그인 실패");
    }
};