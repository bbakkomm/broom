import React from 'react'

function PlanList({ idx, userImg, userName, date, comment }) {
  return (
    <li className="plan-list__item" key={idx}>
      <div className="plan-list__img">
        <img src={userImg} alt="" />
      </div>
      <div className="plan-list__cont">
        <div className="plan-list__wrap">
          <span className="plan-list__username">{userName}</span>
          <span className="plan-list__date">{date}</span>
        </div>
        <p className="plan-list__comment">{comment}</p>
      </div>
    </li>
  )
}

export default PlanList