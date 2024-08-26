import React from "react";
import { NavLink } from "react-router-dom";

// icon
// import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
// import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
// import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
// import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
// import PermIdentityRoundedIcon from "@mui/icons-material/PermIdentityRounded";

function Nav(props) {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to="/" className={({ isActive }) => (isActive ? "on" : "")}>
            {/* <HomeRoundedIcon /> */}
            <p className="nav__btn">홈</p>
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/study"
            className={({ isActive }) => (isActive ? "on" : "")}
          >
            {/* <MenuBookRoundedIcon /> */}
            <p className="nav__btn">스터디</p>
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/teamproject"
            className={({ isActive }) => (isActive ? "on" : "")}
          >
            {/* <PeopleAltOutlinedIcon /> */}
            <p className="nav__btn">팀프로젝트</p>
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/partner"
            className={({ isActive }) => (isActive ? "on" : "")}
          >
            {/* <HandshakeOutlinedIcon /> */}
            <p className="nav__btn">파트너</p>
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/mypage"
            className={({ isActive }) => (isActive ? "on" : "")}
          >
            {/* <PermIdentityRoundedIcon /> */}
            <p className="nav__btn">마이</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;