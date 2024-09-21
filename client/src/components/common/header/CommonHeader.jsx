import { Link, useNavigate } from 'react-router-dom';

// css
import styles from "./CommonHeader.module.scss"

// icon
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import Logo from "../../../assets/img/common/logo_broom.svg";
  
function Header(props) {
  const { home, logo, search, rightBtn, to, title } = props;
  const navigate = useNavigate();

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
              {/* header detail page */}
              <Link to={to} title={title} className={styles.header__link}>
                <ArrowBackIosNewOutlinedIcon />
                <h1 className={styles.header__title}>{title}</h1>
              </Link>
              <div className={styles.header__btn}>
                <button className={styles.header__heart}><FavoriteOutlinedIcon /></button>
                <button><ShareOutlinedIcon /></button>
              </div>
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