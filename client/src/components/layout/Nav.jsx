import React from "react";
import { NavLink } from "react-router-dom";

// icon
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

function Nav(props) {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to="/" className={({ isActive }) => (isActive ? "nav__link on" : "nav__link")}>
            <HomeOutlinedIcon/>
            <p className="nav__btn">홈</p>
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/study"
            className={({ isActive }) => (isActive ? "nav__link on" : "nav__link")}
          >
            <MenuBookOutlinedIcon />
            <p className="nav__btn">스터디</p>
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/project"
            className={({ isActive }) => (isActive ? "nav__link on" : "nav__link")}
          >
            <PeopleAltOutlinedIcon />
            <p className="nav__btn">팀프로젝트</p>
          </NavLink>
        </li>
        {/* <li className="nav__item">
          <NavLink
            to="/partner"
            className={({ isActive }) => (isActive ? "nav__link on" : "nav__link")}
          >
            <HandshakeOutlinedIcon />
            <p className="nav__btn">파트너</p>
          </NavLink>
        </li> */}
        <li className="nav__item">
          <NavLink
            to="/mypage"
            // className={'nav__link' + (({ isActive }) => (isActive ? "on" : ""))}>
            className={({ isActive }) => (isActive ? "nav__link on" : "nav__link")}>
            <PersonOutlineOutlinedIcon />
            <p className="nav__btn">마이</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;