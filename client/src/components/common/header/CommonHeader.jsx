import { Link, useNavigate } from 'react-router-dom';

// icon
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Logo from "../../../assets/img/common/logo_broom.svg";
import LikeBtn from './component/LikeBtn';
import ShareBtn from './component/ShareBtn';
import SearchBtn from './component/SearchBtn';
  
function Header(props) {
  const { home, logo, search, rightBtn, to, title, user, study } = props;
  const navigate = useNavigate();

  return (
    <header className="header">
      {home ? (
        <>
          {logo ? (
            <>
              {/* header home */}
              <h1 className="header__title">
                <Link to="/" title={title} className="header__link">
                  <img src={Logo} alt="B.ROOM 로고" className="logo" />
                </Link>
              </h1>
              <input type="text" value={search} placeholder="검색어를 입력하세요" />
              <SearchBtn/>
            </>
          ) : (
            <>
              {search ? (
                <>
                  {/* header main */}
                  <h1 className="header__title">
                    <Link to="/" title={title}>
                      {title}
                    </Link>
                  </h1>
                  <div className="header__btn">
                    <SearchBtn/>
                  </div>
                </>
              ) : (
                <>
                  <h1 className="header__title">
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
                  <Link to={to} title={title} className="header__link">
                    <ArrowBackIosNewOutlinedIcon />
                    <h1 className="header__title">{title}</h1>
                  </Link>
                  <div className="header__btn">
                    <ShareBtn/>
                    { study ? <Link to="/study/studycreation"><SettingsOutlinedIcon /></Link> : <Link to="/project/projectcreation"><SettingsOutlinedIcon /></Link>}
                  </div>
                </>
              ): (
                <>
                  {/* header detail page */}
                  <Link to="/study" title={title} className="header__link">
                    <ArrowBackIosNewOutlinedIcon />
                    <h1 className="header__title">{title}</h1>
                  </Link>
                  <div className="header__btn">
                    <LikeBtn/>
                    <ShareBtn/>
                  </div>
                </>
              )}
            </>
          ) : (
            <>
              {/* header perv page */}
              <Link to="" onClick={() => navigate(-1)}  title={title} className="header__link">
                <ArrowBackIosNewOutlinedIcon />
                <h1 className="header__title">{title}</h1>
              </Link>
            </>
          )}
        </>
      )}
    </header>
  );
}

export default Header;