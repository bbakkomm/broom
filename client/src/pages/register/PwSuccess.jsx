import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo_broom.svg";

function PwdSuccess() {
  return (
    <section className="success">
      <div className="text">
        <img src={Logo} alt="B.ROOM 로고" className="text__logo" />
        <p className="text__title"><strong>비밀번호 변경</strong>이<br/>완료되었습니다.</p>
        <p className="text__desc">로그인 페이지로 이동하여 로드인해주세요!</p>
      </div>

      <div className="btn">
        <Link to="/" className="btn__outline">홈으로</Link>
        <Link to="/login" className="btn__bg">로그인</Link>
      </div>
    </section>
  );
}

export default PwdSuccess;