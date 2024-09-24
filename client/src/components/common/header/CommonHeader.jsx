import { Link, useNavigate } from 'react-router-dom';

// css
import styles from "./CommonHeader.module.scss"

// icon
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Logo from "../../../assets/img/common/logo_broom.svg";
import { useState } from 'react';
  
function Header(props) {
  const { home, logo, search, rightBtn, to, title, user, study } = props;
  const [heart, setHeart] = useState(false);
  const [heartCount, setHeartCount] = useState(0);
  const navigate = useNavigate();

  // 좋아요버튼 클릭시 실행되는 함수
  const handleHeart = () => {
    if(heart) {
      setHeartCount(heartCount + 1);
    } else {
      setHeartCount(heartCount - 1);
    }
    setHeart(!heart);
  }

  

  return (
    <header className={styles.header}>
      {home ? (
        <>
          {logo ? (
            <>
              {/* header home */}
              <h1 className={styles.header__title}>
                <Link to="/" title={title} className={styles.header__link}>
                  <img src={Logo} alt="B.ROOM 로고" className={styles.logo} />
                </Link>
              </h1>
              <SearchOutlinedIcon />
            </>
          ) : (
            <>
              {search ? (
                <>
                  {/* header main */}
                  <h1 className={styles.header__title}>
                    <Link to="/" title={title}>
                      {title}
                    </Link>
                  </h1>
                  <button className={styles.header__btn}>
                    <SearchOutlinedIcon />
                  </button>
                </>
              ) : (
                <>
                  <h1 className={styles.header__title}>
                    <Link to="/" title={title}>
                      {title}
                    </Link>
                  </h1>
                </>
              )}
            </>
          )}
        </>
      ) : (
        <>
          {rightBtn ? (
            <>
              { user ? (
                <>
                  {/* header detail page */}
                  <Link to={to} title={title} className={styles.header__link}>
                    <ArrowBackIosNewOutlinedIcon />
                    <h1 className={styles.header__title}>{title}</h1>
                  </Link>
                  <div className={styles.header__btn}>
                    <button><ShareOutlinedIcon /></button>
                    { study ? <Link to="/study/studycreation"><SettingsOutlinedIcon /></Link> : <Link to="/project/projectcreation"><SettingsOutlinedIcon /></Link>}
                  </div>
                </>
              ): (
                <>
                  {/* header detail page */}
                  <Link to={to} title={title} className={styles.header__link}>
                    <ArrowBackIosNewOutlinedIcon />
                    <h1 className={styles.header__title}>{title}</h1>
                  </Link>
                  <div className={styles.header__btn}>
                    <button className={styles.header__heart} onClick={handleHeart}>
                      {heart ? <FavoriteOutlinedIcon className={styles.heart__icon}/> : <FavoriteBorderOutlinedIcon className={styles.heart__icon}/>}
                    </button>
                    <button><ShareOutlinedIcon  className={styles.heart__icon}/></button>
                  </div>
                </>
              )}
            </>
          ) : (
            <>
              {/* header perv page */}
              <Link to="" onClick={() => navigate(-1)}  title={title} className={styles.header__link}>
                <ArrowBackIosNewOutlinedIcon />
                <h1 className={styles.header__title}>{title}</h1>
              </Link>
            </>
          )}
        </>
      )}
    </header>
  );
}

export default Header;