import React from "react";
import { Link } from "react-router-dom";

// icon
// import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
// import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
// import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";
// import ShareRoundedIcon from "@mui/icons-material/ShareRounded";

import Logo from "../assets/img/logo_broom.svg";
  
function Header(props) {
  const { home, logo, rightBtn, to, title } = props;

  return (
    <header className="header">
      {home ? (
        <>
          {logo ? (
            <>
              {/* header home */}
              <h1 className="header__title">
                <Link to="/" title={title}>
                  <img src={Logo} alt="B.ROOM 로고" className="logo" />
                </Link>
              </h1>
              {/* <SearchRoundedIcon /> */}
            </>
          ) : (
            <>
              {/* header main */}
              <h1 className="header__title">
                <Link to="/" title={title}>
                  {title}
                </Link>
              </h1>
              <button className="header__btn">
                  {/* <SearchRoundedIcon /> */}
              </button>
            </>
          )}
        </>
      ) : (
        <>
          {rightBtn ? (
            <>
              {/* header detail page */}
              <Link to={to} title={title}>
                {/* <NavigateBeforeRoundedIcon /> */}
                <h1 className="header__title">{title}</h1>
              </Link>
              <div className="header__btn">
                <button>{/* <FavoriteSharpIcon /> */}</button>
                <button>{/* <ShareRoundedIcon /> */}</button>
              </div>
            </>
          ) : (
            <>
              {/* header perv page */}
              <Link to={to} title={title}>
                {/* <NavigateBeforeRoundedIcon /> */}
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