import React from 'react'

function CommentBox({ idx, userImg, userName, date, comment }) {
  return (
    <li className="comment-list__item" key={idx}>
      <div className="comment-list__img">
        <img src={userImg} alt="" />
      </div>
      <div className="comment-list__cont">
        <div className="comment-list__wrap">
          <span className="comment-list__username">{userName}</span>
          <span className="comment-list__date">{date}</span>
        </div>
        <p className="comment-list__comment">{comment}</p>
      </div>
    </li>
  )
}

export default CommentBox