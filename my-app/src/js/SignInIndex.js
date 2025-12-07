export const handleSignin = async (e, userSignindata) => {
    e.preventDefault();

    const res = await fetch("http://localhost:8080/auth/signin",{
        method: "POST",
        headers: { "Content-Type": "application/json"},
        credentials : "include", // Refresh Token 쿠키용
        body: JSON.stringify({
            userID: userSignindata.userInputID,
            userPW: userSignindata.userInputPW,
            autoLogin : userSignindata.autoLogin,
        }),
    });

    if(!res.ok){
        return alert("로그인 실패");
    }

    const data = await res.json();
    sessionStorage.setItem("accessToken", data.accessToken);
    
    alert("로그인 성공");
};