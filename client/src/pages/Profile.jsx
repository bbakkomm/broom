
import '../assets/scss/profile/profile.scss';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const Profile = () => {

  const imgPath = '/src/assets/img/profile/'
  let profileThumb = 'profile_01.png'

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
      </div>
    </div>
  )
}
export default Profile