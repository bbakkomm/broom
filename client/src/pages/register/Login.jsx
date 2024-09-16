import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

// img
import Logo from "../../assets/img/common/logo_broom.svg";
import Google from "../../assets/img/pages/register/google_logo.png"
import Kakao  from "../../assets/img/pages/register/kakao_logo.png";
import Github from "../../assets/img/pages/register/github_logo.png";

// icon 
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffSharpIcon from '@mui/icons-material/VisibilityOffSharp';



function Login() {
  const navigate = useNavigate();

  return (
    <main className="login">
      <img src={Logo} alt="B.ROOM 로고" className="logo" />

      {/* 로그인 폼 */}
      <form action="" className="form-box">
        <fieldset className="form-box__inner">
          <legend className="form-box__title">로그인</legend>

          {/* id */}
          <div className="input-box">
            <label htmlFor="username" className="input-label blind">아이디</label>
            <input type="text" id="username" name="username" placeholder="아이디" className="input-write input-write--danger"/>
            <p className="validity">아이디를 입력해주세요.</p>
          </div>

          {/* pw */}
          <div className="input-box">
            <label htmlFor="pass" className="input-label blind">비밀번호</label>
            <input type="password" id="pass" name="pass" placeholder="비밀번호" className="input-write"/>
            <div className="input-eye">
              <RemoveRedEyeOutlinedIcon className="input-eye__on"/>
              <VisibilityOffSharpIcon className="input-eye__off"/>
            </div>
            {/* <p className="validity">비밀번호를 입력해주세요.</p> */}
          </div>
          
          <Link to="" onClick={() => navigate(-1)} className="btn-bg">로그인</Link>
        </fieldset>
      </form>

      {/* 찾기 / 회원가입 페이지 이동 버튼 */}
      <div className="register">
        <Link to="/Id" className="register__btn">아이디 찾기</Link>
        <Link to="/Pw" className="register__btn">비밀번호 찾기</Link>
        <Link to="/Join" className="register__btn">회원가입</Link>
      </div>
    
      {/* SNS 계정으로 로그인 버튼 */}
      <div className="sns">
        <p className="sns__title"><strong className="sns__title sns__title--bold">SNS</strong> 계정으로 로그인</p>        
        <div className="sns__btn">
          <Link className="sns__item"><img src={Google} alt="구글 로고" /><span className="blind">구글 로그인</span></Link>
          <Link className="sns__item"><img src={Kakao} alt="카카오톡 로고" /><span className="blind">카카오톡 로그인</span></Link>
          <Link className="sns__item"><img src={Github} alt="깃헙 로고" /><span className="blind">깃헙 로그인</span></Link>
        </div>
      </div>
    </main>
  )
}

export default Login