
import '../assets/scss/profile/profile.scss';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const Profile = () => {

  const imgPath = '/src/assets/img/profile/'
  let profileThumb = 'profile_01.png'

  let repleData = [
    {
      _id : '000003',
      userName : '뚜부',
      userImg : imgPath + profileThumb,
      date : '2024.08.01 23:00',
      comment : '안녕하세요 잘 부탁드려요 비스톤스의 뚜부! 입니다 :D'      
    },
    {
      _id : '000003',
      userName : '뚜부',
      userImg : imgPath + profileThumb,
      date : '2024.08.01 23:00',
      comment : '안녕하세요 잘 부탁드려요 비스톤스의 뚜부! 입니다 :D'      
    },
    {
      _id : '000003',
      userName : '뚜부',
      userImg : imgPath + profileThumb,
      date : '2024.08.01 23:00',
      comment : '안녕하세요 잘 부탁드려요 비스톤스의 뚜부! 입니다 :D'      
    },
    {
      _id : '000003',
      userName : '뚜부',
      userImg : imgPath + profileThumb,
      date : '2024.08.01 23:00',
      comment : '안녕하세요 잘 부탁드려요 비스톤스의 뚜부! 입니다 :D'      
    },
    {
      _id : '000003',
      userName : '뚜부',
      userImg : imgPath + profileThumb,
      date : '2024.08.01 23:00',
      comment : '안녕하세요 잘 부탁드려요 비스톤스의 뚜부! 입니다 :D'      
    },
    {
      _id : '000003',
      userName : '뚜부',
      userImg : imgPath + profileThumb,
      date : '2024.08.01 23:00',
      comment : '안녕하세요 잘 부탁드려요 비스톤스의 뚜부! 입니다 :D'      
    },
    {
      _id : '000002',
      userName : '뚜부',
      userImg : imgPath + profileThumb,
      date : '2024.08.01 23:00',
      comment : '안녕하세요 잘 부탁드려요 비스톤스의 뚜부! 입니다 :D'      
    },
    {
      _id : '000001',
      userName : '뚜부',
      userImg : imgPath + profileThumb,
      date : '2024.08.01 23:00',
      comment : '안녕하세요 잘 부탁드려요 비스톤스의 뚜부! 입니다 :D'      
    },
  ]

  console.log(repleData)


  return (
    <div className="profile">
      <div className="inner_360">
        <header className="profile-header">
          <h3 className="profile-header__title">마이페이지</h3>
          <SearchIcon className="btn_search"/>
        </header>
        <div className="profile-card">
          <div className="img-box profile-card__img">
            <img src={imgPath + profileThumb}/>
          </div>
          <div className="profile-card__user">
            <h1 className="profile-card__username">뚜부</h1>
            <p className="profile-card__email">broom@broom.com</p>
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
          <div className="tab-box">
            <ul className="tabs">
              <li className="tabs__menu active">댓글</li>
              <li className="tabs__menu">버튼</li>
              <li className="tabs__menu">일정</li>
            </ul>
          </div>

          <div className="reple-box">
            <ul className="reple-list">
              {
                repleData.map((item, idx)=>(
                  <li className="reple-list__item" key={idx}>
                    <div className="reple-list__img">
                      <img src={item.userImg} alt="" />
                    </div>
                    <div className="reple-list__cont">
                      <div className="reple-list__wrap">
                        <span className="reple-list__username">{item.userName}</span>
                        <span className="reple-list__date">{item.date}</span>
                      </div>
                      <p className="reple-list__comment">{item.comment}</p>
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