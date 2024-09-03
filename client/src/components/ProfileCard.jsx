import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function ProfileCard({ userImg, userName, userEmail }) {
  return (
    <div className="profile-card">
        <div className="profile-box">
            <div className="img-box profile-box__img">
                <img src={userImg}/>
            </div>
            <div className="profile-box__user">
                <h1 className="profile-box__username">{userName}</h1>
                <p className="profile-box__email">{userEmail}</p>
            </div>
            <ArrowForwardIosIcon className="btn_arrowforward"/>
        </div>
        <ul className="skill-tag-box">
            <li className="skill-tag-box__item">
                <span className="skill-tag skill-tag--js">JavaScript</span>
            </li>
            <li>
                <span className="skill-tag skill-tag--ts">TypeScript</span>
            </li>
            <li>
                <span className="skill-tag skill-tag--react">React</span>
            </li>
        </ul>
        <div className="status-box">
            <ul className='status'>
                <li className="status__item">
                    <span className="status__info status__info--like">999+</span>
                    <span className="status__desc">찜모임</span>
                </li>
                <li className="status__item">
                    <span className="status__info status__info--studing">2</span>
                    <span className="status__desc">활동중</span>
                </li>
                <li className="status__item">
                    <span className="status__info status__info--complate">3</span>
                    <span className="status__desc">완료</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default ProfileCard