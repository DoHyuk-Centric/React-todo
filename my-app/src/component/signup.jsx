import React from "react";
import "../css/signup.css";
import "../css/App.css";
import Header from "./header";
import Footer from "./footer";
import TermsModal from "./TermsModal.jsx";
import { useState, useEffect, useRef } from "react";
import { validateSignup } from "../js/validateSignup.js";
import {handleSignup} from "../js/SignupIndex.js";

function Signup() {
  const [userID, setUserID] = useState("");
  const [userName, setUserName] = useState("");
  const [userPW, setUserPW] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [phone, setphone] = useState("");
  const [userPWChk, setUserPWChk] = useState("");
  const [agree, setAgree] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [emailList, setEmailList] = useState([]);
  const [showEmailList, setShowEmailList] = useState(false);

  /** 예시*/
  const [open, setOpen] = useState(false);

  const onSelectEmail = (email) => {
    setEmailValue(email);
    setUserEmail(email);
    setShowEmailList(false);
  };
  const emailWrapperRef = useRef(null);
  const [showTerms, setShowTerms] = useState(false);

  const openTermsModal = () => {
    setShowTerms(true);
  };
  const closeTermsModal = () => {
    setShowTerms(false);
  };
  const [emailFormOpen, setEmailFormOpen] = useState(false);

  /** 유저 데이터 */
  const userSignupData = {
    userID,
    userName,
    userPW,
    userEmail,
    phone,
    userPWChk,
    agree,
  };

  /** 이메일 도메인 목록 */
  const frequencyEmail = [
    "@naver.com",
    "@gmail.com",
    "@daum.net",
    "@nate.com",
    "@hanmail.net",
    "@yahoo.com",
    "@kakao.com",
    "@outlook.com",
  ];

  /** 이메일 입력 처리 */
  const onChangeEmail = (e) => {
    const value = e.target.value;
    setEmailValue(e.target.value);
    setUserEmail(e.target.value);

    if (!value) {
      setShowEmailList(false);
      return;
    }

    const userEmail = frequencyEmail.map((email) =>
      value.includes("@") ? value.split("@")[0] + email : value + email
    );

    setEmailList(userEmail);
    setShowEmailList(true);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        emailWrapperRef.current &&
        !emailWrapperRef.current.contains(e.target)
      ) {
        setShowEmailList(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="App_container">
      <Header />
      <div className="signup-container">
        <div className="signup-header">
          <div className="Logo"></div>
          <h2>회원가입</h2>
          <p className="newstory_font">새로운 이야기를 시작해보세요</p>

          <form className="signup-form">
            <div className="sign-input-display">

              {/* 아이디 박스 */}
              <div className="userID">
                <p className="input-text">아이디</p>
                <input
                  className="signup-input"
                  id="userID"
                  placeholder="아이디를 입력하세요."
                  type="text"
                  onChange={(e) => setUserID(e.target.value)}
                  onBlur={(e) =>
                    (e.target.placeholder = "아이디를 입력하세요.")
                  }
                  onFocus={(e) => (e.target.placeholder = "")}
                />
              </div>

              {/* 이름 박스 */}
              <div className="username">
                <p className="input-text">이름</p>
                <input
                  className="signup-input"
                  type="text"
                  placeholder="이름을 입력하세요."
                  onChange={(e) => setUserName(e.target.value)}
                  onBlur={(e) => (e.target.placeholder = "이름을 입력하세요.")}
                  onFocus={(e) => (e.target.placeholder = "")}
                />
              </div>
            </div>
            <div className="sign-input-display">
              {/* 비밀번호 박스 */}
              <div className="userPW">
                <p className="input-text">비밀번호</p>
                <input
                  className="signup-input"
                  type="password"
                  placeholder="비밀번호를 입력하세요."
                  onChange={(e) => setUserPW(e.target.value)}
                  onBlur={(e) =>
                    (e.target.placeholder = "비밀번호를 입력하세요.")
                  }
                  onFocus={(e) => (e.target.placeholder = "")}
                />
              </div>

              {/* 비밀번호 확인 박스 */}
              <div className="userPWChk">
                <p className="input-text">비밀번호 확인</p>
                <input
                  className="signup-input"
                  type="password"
                  placeholder="비밀번호를 다시 입력하세요."
                  onChange={(e) => setUserPWChk(e.target.value)}
                  onBlur={(e) =>
                    (e.target.placeholder = "비밀번호를 다시 입력하세요.")
                  }
                  onFocus={(e) => (e.target.placeholder = "")}
                />
              </div>
            </div>
            <div className="sign-input-display">
              {/* 이메일 박스 */}
              <div className="userEmail">
                <p className="input-text">이메일</p>
                <div ref={emailWrapperRef} className="email-input-wrapper">
                  <input
                    className="signup-input"
                    type="email"
                    placeholder="이메일을 입력하세요."
                    value={emailValue}
                    onChange={onChangeEmail}
                    onBlur={(e) =>
                      (e.target.placeholder = "이메일을 입력하세요.")
                    }
                    onFocus={(e) => {
                      e.target.placeholder = "";
                      if (emailValue) {
                        setShowEmailList(true);
                      }
                    }}
                  />
                  <ul
                    className={`email-example-box ${
                      showEmailList ? "open" : "close"
                    }`}
                  >
                    {emailList.map((email, idx) => (
                      <li key={idx} onMouseDown={() => onSelectEmail(email)}>
                        {email}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 전화번호 박스 */}
              <div className="userTell">
                <p className="input-text">전화번호</p>
                <input
                  className="signup-input"
                  type="tel"
                  placeholder="전화번호를 입력하세요."
                  onChange={(e) => setphone(e.target.value)}
                  onBlur={(e) =>
                    (e.target.placeholder = "전화번호를 입력하세요.")
                  }
                  onFocus={(e) => (e.target.placeholder = "")}
                />

                {/* 약관 동의 */}
                <div className="agree">
                  <input
                    className="checkbox-style"
                    type="checkbox"
                    checked={agree}
                    readOnly
                    onClick={() => setOpen(true)}
                  />
                  <p onMouseDown={() => setOpen(true)}>약관동의</p>
                </div>
              </div>
            </div>
            
            {/* 버튼 */}
            <div className="submitbtn">
              <button className="signup-btn" type="button">
                뒤로가기
              </button>
              <button
                className="signup-btn"
                id="signup-btn"
                type="button"
                onClick={(e) => handleSignup(e, userSignupData)}
              >
                완료
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
      <TermsModal isOpen={open} onClose={() => setOpen(false)} onUpdateAgreeAll={(checked) => setAgree(checked)}/>
    </div>
  );
}

export default Signup;
