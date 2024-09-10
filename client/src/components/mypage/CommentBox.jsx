import React from 'react'
import CommentList from './CommentList';


function CommentBox() {
  return (
    <div className="comment-box">
        commentBox
          {/* <ul className="comment-list">
            {
              userData.map((item, idx)=>(
                <CommentList 
                  userImg={imgPath + item.userImg}
                  userName={item.userName}
                  date={item.date}
                  comment={item.comment}
                  idx={idx}
                />
              ))
            }
          </ul> */}
        </div>
  )
}

export default CommentBox