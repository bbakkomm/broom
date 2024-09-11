
import '../assets/scss/profile/profile.scss';
import SearchIcon from '@mui/icons-material/Search';

import TabHeader from '../components/mypage/TabHeader';
import TabContent from '../components/mypage/TabContent';
import ProfileCard from '../components/mypage/ProfileCard';
import CommentList from '../components/mypage/CommentList';
import PlanList from '../components/mypage/PlanList';

import jsonData from '../assets/data/userData.json';
import { listItemSecondaryActionClasses } from '@mui/material';
import { useState } from 'react';


const Profile = () => {

  const loginId = '000004'

  const imgPath = '/src/assets/img/profile/'

  let userData = jsonData.result;

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="profile">
      <div className="inner_360">
        <header className="profile-header">
          <h3 className="profile-header__title">마이페이지</h3>
          <SearchIcon className="btn_search"/>
        </header>

        <ProfileCard 
          userImg={imgPath + userData[0].userImg} 
          userName={userData[0].userName} 
          userEmail={userData[0].userEmail} 
        />

        <div className="tab-box">
          <TabHeader activeTab={activeTab} onTabClick={handleTabClick} />
        </div>
        
        <div className="tab-content">
          <TabContent activeTab={activeTab} />
        </div>


        {/* 댓글리스트 */}
        {/* <div className="comment-box">
          <ul className="comment-list">
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
          </ul>
        </div> */}

        {/* 일정리스트 */}
        <div className="plan-box">
          <div className="plan-date">
            <span className="plan-date--day">08.01</span>
            <span className="plan-date--week">목</span>
            <span className="plan-date--dday">오늘</span>
          </div>
          <ul className="plan-list">
            {
              userData.map((item, idx)=>(
                <li className="plan-list__item">
                  <div className="plan-list__img">
                    <img src={imgPath + 'study_img_01.png'} alt="" />
                  </div>
                  <div className="plan-list__cont">
                    <div className="plan-list__wrap">
                      <h3 className="plan-list__title">{item.plan[0].planTitle}</h3>
                      <span className="plan-list__date">{item.plan[0].planDate}</span>
                      <span className="plan-list__week">({item.plan[0].planWeek})</span>
                      <span className="plan-list__time">{item.plan[0].planTime}</span>
                      <p className="plan-list__place">{item.plan[0].place}</p>
                      <p className="plan-list__price">{item.plan[0].price}</p>
                      <p className="plan-list__person"><span className="plan-list__person--blue">3</span> / 5</p>
                    </div>
                  </div>
                </li>
                
              ))
            }
            
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Profile

