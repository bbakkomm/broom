
import '../assets/scss/profile/profile.scss';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';


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
        <div className="profile-info">
          <div className="img-box profile-info__thumb">
            <img src={imgPath + profileThumb}/>
          </div>
          <div className="profile">
            test
          </div>

        </div>
      </div>
    </div>
  )
}
export default Profile