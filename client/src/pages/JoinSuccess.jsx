import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo_broom.svg";

function JoinSuccess() {
  return (
    <section className="success">
      <div className="text">
        <img src={Logo} alt="B.ROOM 로고" className="text__logo" />
        <p className="text__title"><strong>회원가입</strong>이<br />완료되었습니다.</p>
        <p className="text__desc">B.ROMM에 오신 것을 환영합니다!</p>
      </div>

      <div className="btn">
        <Link to="/" className="btn__outline">홈으로</Link>
        <Link to="/login" className="btn__bg">로그인</Link>
      </div>
    </section>
  );
}

export default JoinSuccess;