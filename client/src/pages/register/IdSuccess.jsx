import React from 'react'
import { Link } from 'react-router-dom';
import Logo from "../../assets/img/common/logo_broom.svg";

function IdSuccess() {
  return (
    <section className="success">
      <div className="text">
        <img src={Logo} alt="B.ROOM 로고" className="text__logo" />
        <p className="text__title">회원님의 아이디는<br /><strong>ID</strong>입니다.</p>
        <p className="text__desc">아이디 찾기가 완료되었습니다!</p>
      </div>

      <div className="btn">
        <Link to="/" className="btn-outline">홈으로</Link>
        <Link to="/login" className="btn-bg">로그인</Link>
      </div>
    </section>
  );
}

export default IdSuccess