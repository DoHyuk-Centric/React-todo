import { useEffect, useState } from "react";
import { handleSignin } from "./js/SignInIndex";

function Signin() {
  const [userInputID, setuserID] = useState("");
  const [userInputPW, setuserPW] = useState("");

  const userSignindata = {
    userInputID,
    userInputPW
  }


  return (
    <div>
      <div className="userDataInput_place">
        <div>
          아이디 :{" "}
          <input onChange={(e) => setuserID(e.target.value)} id="userInputID" type="text" placeholder="아이디를 입력해주세요."></input>
        </div>
        <div>
          비밀번호 :{" "}
          <input onChange={(e) => setuserPW(e.target.value)} id="userInputPW" type="text" placeholder="비밀번호를 입력해주세요."></input>
        </div>
      </div>
      <div>
        <button onClick={(e) => handleSignin(e, userSignindata)}>로그인</button>
        <button>계정 정보가 없으신가요?</button>
        <button>아이디 또는 비밀번호가 기억나지 않으시나요?</button>
      </div>
    </div>
  );
}

export default Signin;
