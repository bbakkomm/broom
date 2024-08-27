import React from 'react'
import { Link } from 'react-router-dom'

function Id() {
  return (
    <section className="id">
      <h2 className="id__title">아이디 찾기</h2>

      <label htmlFor="useremail" className="input-label">가입한 이메일을 입력해주세요.</label>
      <input type="email" id="useremail" name="useremail" placeholder="이메일" className="input-write"/>
    
      <div className="btn">
        <Link to="/IdSuccess" className="btn-un">아이디 찾기</Link>
      </div>
    </section>
  )
}

export default Id