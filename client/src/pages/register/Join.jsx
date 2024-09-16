import React from 'react'
import { Link } from 'react-router-dom';

function Join() {
  return (
    <main className="join">
      <h2 className="join__title">회원가입</h2>

      <form action="" className="form-box">
        <fieldset className="form-box__inner">
          <legend className="form-box__title">회원 가입</legend>

          {/* id */}
          <label htmlFor="username" className="input-label">아이디</label>
          <input type="text" id="username" name="username" placeholder="아이디" className="input-write"/>

          {/* email */}
          <label htmlFor="useremail" className="input-label">이메일</label>
          <input type="email" id="useremail" name="useremail" placeholder="이메일" className="input-write"/>

          {/* pwd */}
          <label htmlFor="pass" className="input-label">비밀번호</label>
          <input type="password" id="pass" name="pass" placeholder="비밀번호" className="input-write"/>
          
          {/* pwd conf */}
          <label htmlFor="passconfirm" className="input-label hidden">비밀번호 확인</label>
          <input  type="password" id="passconfirm" name="passconfirm" placeholder="비밀번호 확인" className="input-write"/>

          {/* work */}
          {/* <p className="input-label">희망직무</p>
          <div className="select-box">
            <div className="select-box__btn">
              <input type="radio" id="planner" name="work" value="planner" className="select-box__radio" />
              <label htmlFor="planner" className="select-box__text">기획</label>
            </div>

            <div className="select-box__btn">
              <input type="radio" id="designer" name="work" value="designer" className="select-box__radio" />
              <label htmlFor="designer" className="select-box__text">디자인</label>
            </div>

            <div className="select-box__btn">
              <input type="radio" id="developer" name="work" value="developer" className="select-box__radio" />
              <label htmlFor="developer" className="select-box__text">개발</label>
            </div>
          </div> */}

          {/* skill */}
          {/* <p className="input-label">주요기술</p>
          <div className="select-box">
            <div className="select-box__btn">
              <input type="radio" id="figma" name="work" value="figma"  className="select-box__radio"/>
              <label htmlFor="figma" className="select-box__text">Figma</label>
            </div>

            <div className="select-box__btn">
              <input type="radio" id="html" name="work" value="html"  className="select-box__radio"/>
              <label htmlFor="html" className="select-box__text">HTML</label>
            </div>

            <div className="select-box__btn">
              <input type="radio" id="css" name="work" value="css"  className="select-box__radio"/>
              <label htmlFor="css" className="select-box__text">CSS</label>
            </div>

            <div className="select-box__btn">
              <input type="radio" id="SCSS" name="work" value="SCSS"  className="select-box__radio"/>
              <label htmlFor="SCSS" className="select-box__text">SCSS</label>
            </div>

            <div className="select-box__btn">
              <input type="radio" id="javaScript" name="work" value="javaScript" className="select-box__radio"/>
              <label htmlFor="javaScript" className="select-box__text">JavaScript</label>
            </div>
          </div> */}

          {/* reCAPTCHA */}
          <div className="recaptcha">reCAPTCHA</div>
          <div className="btn">
            <Link to="/Joinsetting" className="btn-un">다음</Link>
          </div>
        </fieldset>
      </form>
    </main>
  );
}

export default Join