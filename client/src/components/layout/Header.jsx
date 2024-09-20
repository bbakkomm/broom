/* eslint-disable react/prop-types */
import { Link, useNavigate } from 'react-router-dom';

// icon
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Logo from "../../assets/img/common/logo_broom.svg";
  
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
              <SearchOutlinedIcon />
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
                  <button className="header__btn">
                    <SearchOutlinedIcon />
                  </button>
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
                    <button><ShareOutlinedIcon /></button>
                    { study ? <Link to="/study/studycreation"><SettingsOutlinedIcon /></Link> : <Link to="/project/projectcreation"><SettingsOutlinedIcon /></Link>}
                  </div>
                </>
              ): (
                <>
                  {/* header detail page */}
                  <Link to={to} title={title} className="header__link">
                    <ArrowBackIosNewOutlinedIcon />
                    <h1 className="header__title">{title}</h1>
                  </Link>
                  <div className="header__btn">
                    <button className="header__heart"><FavoriteOutlinedIcon /></button>
                    <button><ShareOutlinedIcon /></button>
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