import { useState } from "react";
import "./App.css";

import Header from "./header";
import Footer from "./footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App_container">
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <div className="signup-header">
          <div className="Logo"></div>
          <div>
            <h2>회원가입</h2>
          </div>
          <div>
            <p className="newstory_font">새로운 이야기를 시작해보세요</p>
          </div>
        </div>

        <div className="singup-input">
          <form className="signup-form">
            <div className="sign-input-display">
              <div className="userID" id="userID">
                <p className="input-text">아이디</p>
                <input
                  className="signup-input"
                  type="text"
                  placeholder="아이디를 입력하세요."
                ></input>
              </div>
              <div className="username" id="userName">
                <p className="input-text">이름</p>
                <input
                  className="signup-input"
                  type="text"
                  placeholder="이름을 입력하세요."
                ></input>
              </div>
            </div>
            <div className="sign-input-display">
              <div className="userPW" id="userPW">
                <p className="input-text">비밀번호</p>
                <input
                  className="signup-input"
                  type="text"
                  placeholder="비밀번호를 입력하세요."
                ></input>
              </div>
              <div className="userPWChk" id="userPWChk">
                <p className="input-text">비밀번호 확인</p>
                <input
                  type="text"
                  className="signup-input"
                  placeholder="비밀번호를 다시 입력하세요."
                ></input>
              </div>
            </div>
            <div className="sign-input-display">
              <div className="userEmail" id="userEmail">
                <p className="input-text">이메일</p>
                <input
                  className="signup-input"
                  type="text"
                  placeholder="이메일을 입력하세요."
                ></input>
              </div>
              <div className="userTell" id="userTell">
                <p className="input-text">전화번호</p>
                <input
                  className="signup-input"
                  type="text"
                  placeholder="전화번호를 입력하세요."
                ></input>
                <div className="agree">
                  <input type="checkbox"></input>
                  <p>약관동의</p>
                </div>
              </div>
            </div>
            <div className="submitbtn">
              <button className="signup-btn" type="button" id="signup-back">
                뒤로가기
              </button>
              <button className="signup-btn" id="signup-submit" type="submit">
                완료
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
