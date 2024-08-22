import React from "react";
import { Link } from "react-router-dom";

// icon
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";

function Header(props) {
  const { home, logo, rightBtn, to, title } = props;

  return (
    <header>
      {home ? (
        <>
          {logo ? (
            <>
              {/* header home */}
              <h1 className="title">
                <Link to="/" title={title}>
                  B.ROOM
                </Link>
              </h1>
              <SearchRoundedIcon />
            </>
          ) : (
            <>
              {/* header main */}
              <h1 className="title">
                <Link to="/" title={title}>
                  {title}
                </Link>
              </h1>
              <button>
                <SearchRoundedIcon />
              </button>
            </>
          )}
        </>
      ) : (
        <>
          {rightBtn ? (
            <>
              {/* header detail page */}
              <div>
                <Link to={to} title={title}>
                  <NavigateBeforeRoundedIcon />
                  <h1>{title}</h1>
                </Link>
              </div>
              <div>
                <button>
                  <FavoriteSharpIcon />
                </button>
                <button>
                  <ShareRoundedIcon />
                </button>
              </div>
            </>
          ) : (
            <>
              {/* header perv page */}
              <div>
                <Link to={to} title={title}>
                  <NavigateBeforeRoundedIcon />
                  <h1>{title}</h1>
                </Link>
              </div>
            </>
          )}
        </>
      )}
    </header>
  );
}

export default Header;