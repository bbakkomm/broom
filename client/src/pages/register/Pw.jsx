import React from 'react'
import { Link } from 'react-router-dom'

function Pw() {
  return (
    <section className="pw">
      <h2 className="pw__title">비밀번호 찾기</h2>

      {/* id */}
      <label htmlFor="username" className="input-label">가입한 아이디를 입력해주세요.</label>
      <input type="text" id="username" name="username" placeholder="아이디" className="input-write"/>

      {/* email */}
      <label htmlFor="useremail" className="input-label">가입한 이메일을 입력해주세요.</label>
      <input type="email" id="useremail" name="useremail" placeholder="이메일" className="input-write"/>
    
      <div className="btn">
        <Link to="/Pwreset" className="btn-un">비밀번호 찾기</Link>
      </div>
    </section>
  )
}

export default Pw