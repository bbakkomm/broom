
import '../assets/scss/profile/profile.scss';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
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
      </div>
    </div>
  )
}
export default Profile