import { useEffect, useState } from "react";
import { handleSignin } from "../js/SignInIndex";
import "../css/signin.css";
import "../css/App.css";

function Signin() {
  const [userInputID, setuserID] = useState("");
  const [userInputPW, setuserPW] = useState("");

  const userSignindata = {
    userInputID,
    userInputPW,
  };

  return (
    <div className="signin-container">
      <div className="userDataInput_place">
        <h2>나의 일기장</h2>
        <p>당신만의 특별한 공간에 오신 것을 환영합니다</p>
        <div>
          <p className="signin-inputName-text">아이디</p>
          <input
            onChange={(e) => setuserID(e.target.value)}
            id="userInputID"
            type="text"
            placeholder="아이디를 입력해주세요."
            className="signin-input"
          />
        </div>
        <div>
          <p className="signin-inputName-text">비밀번호</p>
          <input
            onChange={(e) => setuserPW(e.target.value)}
            id="userInputPW"
            type="text"
            placeholder="비밀번호를 입력해주세요."
            className="signin-input"
          ></input>
        </div>

        <div className="signin-idremember">
          <input className="checkbox-style" type="checkbox" />
          <p>아이디 기억하기</p>
        </div>
      </div>

      <button onClick={(e) => handleSignin(e, userSignindata)}>로그인</button>
      <div className="signin-a-tag">
        <a href="">아이디/비밀번호 찾기</a>
        <a href="./signup">회원가입</a>
      </div>
      <p className="signin-text">오늘부터 당신의 이야기를 시작하세요</p>
    </div>
  );
}

export default Signin;
