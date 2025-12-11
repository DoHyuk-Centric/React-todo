import "../css/App.css";
import { useEffect,useState } from "react";
import {handleLogout} from "../js/logout";
import { Link } from "react-router-dom";


function mainPage() {

  return (
    <div>
      <Link to = "/signin">로그인</Link>
      <br />
      <Link to = "/signup">회원가입</Link>  
      <button onClick={handleLogout}>로그아웃</button>
      <div>메인페이지 입니다.</div>
    </div>
  );
}

export default mainPage;
