import React from 'react'
import { Link } from 'react-router-dom';

function Join() {
  return (
    <section className="join">
      <h2 className="join__title">회원가입</h2>

      <form action="" className="join__form">
        <fieldset>
          <legend>회원 가입</legend>

          {/* id */}
          <label htmlFor="username" className="join__item">아이디</label>
          <input type="text" id="username" name="username" placeholder="아이디" className="join__input"/>

          {/* pwd */}
          <label htmlFor="pass" className="join__item">비밀번호</label>
          <input type="pass" id="pass" name="pass" placeholder="비밀번호" className="join__input"/>
          
          {/* pwd conf */}
          <label htmlFor="" className="join__item hidden">비밀번호 확인</label>
          <input  type="password" id="passconfirm" name="passconfirm" placeholder="비밀번호 확인" className="join__input"/>

          {/* work */}
          <p className="join__item">희망직무</p>
          <div className="join__select">
            <div className="join__btn">
              <input type="radio" id="planner" name="work" value="planner" className="join__radio" />
              <label htmlFor="planner" className="join__text">기획</label>
            </div>

            <div className="join__btn">
              <input type="radio" id="designer" name="work" value="designer" className="join__radio" />
              <label htmlFor="designer" className="join__text">디자인</label>
            </div>

            <div className="join__btn">
              <input type="radio" id="developer" name="work" value="developer" className="join__radio" />
              <label htmlFor="developer" className="join__text">개발</label>
            </div>
          </div>

          {/* skill */}
          <p className="join__item">주요기술</p>
          <div className="join__select">
            <div className="join__btn">
              <input type="radio" id="figma" name="work" value="figma"  className="join__radio"/>
              <label htmlFor="figma" className="join__text">Figma</label>
            </div>

            <div className="join__btn">
              <input type="radio" id="html" name="work" value="html"  className="join__radio"/>
              <label htmlFor="html" className="join__text">HTML</label>
            </div>

            <div className="join__btn">
              <input type="radio" id="css" name="work" value="css"  className="join__radio"/>
              <label htmlFor="css" className="join__text">CSS</label>
            </div>

            <div className="join__btn">
              <input type="radio" id="SCSS" name="work" value="SCSS"  className="join__radio"/>
              <label htmlFor="SCSS" className="join__text">SCSS</label>
            </div>

            <div className="join__btn">
              <input type="radio" id="javaScript" name="work" value="javaScript" className="join__radio"/>
              <label htmlFor="javaScript" className="join__text">JavaScript</label>
            </div>
          </div>

          {/* reCAPTCHA */}
          <div>reCAPTCHA</div>

          <div className="btn">
            <Link to="/JoinSuccess" className="btn__outline">가입하기</Link>
          </div>
        </fieldset>
      </form>
    </section>
  );
}

export default Join