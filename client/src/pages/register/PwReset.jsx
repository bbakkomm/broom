import React from 'react'
import { Link } from 'react-router-dom'

function PwReset() {
  return (
    <section className="pw">
      <h2 className="pw__title">비밀번호 재설정</h2>

      {/* pwd */}
      <label htmlFor="pass" className="input-label">새 비밀번호</label>
      <input type="password" id="pass" name="pass" placeholder="비밀번호" className="input-write"/>
          
      {/* pwd conf */}
      <label htmlFor="passconfirm" className="input-label hidden">비밀번호 확인</label>
      <input  type="password" id="passconfirm" name="passconfirm" placeholder="비밀번호 확인" className="input-write"/>

      <div className="btn">
        <Link to="/PwSuccess" className="btn-un">변경하기</Link>
      </div>
    </section>
  )
}

export default PwReset