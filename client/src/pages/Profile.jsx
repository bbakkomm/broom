
import '../assets/scss/profile/profile.scss';
import SearchIcon from '@mui/icons-material/Search';

import ProfileCard from '../components/mypage/ProfileCard';
import CommentBox from '../components/mypage/CommentBox';
// import CommentList from '../components/mypage/CommentList';

import jsonData from '../assets/data/userData.json';
import { listItemSecondaryActionClasses } from '@mui/material';


const Profile = () => {

  const loginId = '000004'

  const imgPath = '/src/assets/img/profile/'

  let userData = jsonData.result;

  console.log(userData)

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
          <ul className="tabs">
            <li className="tabs__menu active">댓글</li>
            <li className="tabs__menu">버튼</li>
            <li className="tabs__menu">일정</li>
          </ul>
        </div>

        <div className="plan-box">
          <div className="plan-list">
            
          </div>
        </div>

        <CommentBox/>

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

      </div>
    </div>
  )
}
export default Profile