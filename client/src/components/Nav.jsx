import React from "react";
import { NavLink } from "react-router-dom";

// icon
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import PermIdentityRoundedIcon from "@mui/icons-material/PermIdentityRounded";

function Nav(props) {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "on" : "")}>
            <HomeRoundedIcon />
            <p>홈</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/study"
            className={({ isActive }) => (isActive ? "on" : "")}
          >
            <MenuBookRoundedIcon />
            <p>스터디</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/teamproject"
            className={({ isActive }) => (isActive ? "on" : "")}
          >
            <PeopleAltOutlinedIcon />
            <p>팀프로젝트</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/partner"
            className={({ isActive }) => (isActive ? "on" : "")}
          >
            <HandshakeOutlinedIcon />
            <p>파트너</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/mypage"
            className={({ isActive }) => (isActive ? "on" : "")}
          >
            <PermIdentityRoundedIcon />
            <p>마이</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;