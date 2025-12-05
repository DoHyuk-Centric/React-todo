export const handleSignin = async (e, userSignindata) => {
    e.preventDefault();

    const res = await fetch("http://localhost:8080/auth/signin",{
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({
            userID: userSignindata.userInputID,
            userPW: userSignindata.userInputPW,
        }),
    });

    const text = await res.text();
    alert(text);
};