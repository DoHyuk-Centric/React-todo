export function validateSignup(e,userdata) {
  e.preventDefault();
  const {userID, userPW, userPWChk, userName, userEmail, userTell, agree} = userdata;

  if (userID === "" || userPW === "" || userPWChk === "" || userName === "" || userEmail === "" || userTell === "") return alert("모든항목을 채워주세요.");
  if (userPW !== userPWChk) {
    return alert("비밀번호가 일치하지 않습니다.");
  }
  if(userEmail.indexOf("@") === -1 || userEmail.indexOf(".") === -1) {
    return alert("이메일 형식이 올바르지 않습니다.");
  }
  if(userTell.length < 10 || userTell.length > 11) {
    return alert("전화번호 형식이 올바르지 않습니다.");
  }
  if(!/^[a-zA-Z0-9_]+$/.test(userID)) {
    return alert("아이디는 영문자, 숫자, 밑줄(_)만 사용할 수 있습니다.");
  }
  if(userPW.length < 8) {
    return alert("비밀번호는 최소 8자 이상이어야 합니다.");
  }
  if(!/[a-zA-Z]/.test(userPW) || !/[0-9]/.test(userPW)) {
    return alert("비밀번호는 영문, 숫자를 포함해야 합니다.");
  }
  if(!/^[가-힣]+$/.test(userName)) {
    return alert("이름은 한글만 사용할 수 있습니다.");
  }
  if(!/^[0-9]+$/.test(userTell)) {
    return alert("전화번호는 숫자만 사용할 수 있습니다.");
  }
  if(!agree) {
    return alert("이용약관에 동의해주세요.");
  }
  return true;
}
