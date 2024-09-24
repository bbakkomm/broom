import { NavLink } from "react-router-dom";

// css
import styles from "./CommonNav.module.scss"

// icon
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

function Nav(props) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__item}>
          <NavLink to="/" className={({ isActive }) => (isActive ? styles.nav__link + " on" : styles.nav__link)}>
            <HomeOutlinedIcon/>
            <p className={styles.nav__btn}>홈</p>
          </NavLink>
        </li>
        <li className={styles.nav__item}>
          <NavLink
            to="/study"
            className={({ isActive }) => (isActive ? styles.nav__link + " on" : styles.nav__link)}
          >
            <MenuBookOutlinedIcon />
            <p className={styles.nav__btn}>스터디</p>
          </NavLink>
        </li>
        <li className={styles.nav__item}>
          <NavLink
            to="/project"
            className={({ isActive }) => (isActive ? styles.nav__link + " on" : styles.nav__link)}
          >
            <PeopleAltOutlinedIcon />
            <p className={styles.nav__btn}>팀프로젝트</p>
          </NavLink>
        </li>
        <li className={styles.nav__item}>
          <NavLink
            to="/study/studycreation"
            className={({ isActive }) => (isActive ? styles.nav__link + " on" : styles.nav__link)}
          >
            <HandshakeOutlinedIcon />
            <p className={styles.nav__btn}>파트너</p>
          </NavLink>
        </li>
        <li className={styles.nav__item}>
          <NavLink
            to="/profile"
            // className={'nav__link' + (({ isActive }) => (isActive ? "on" : ""))}>
            className={({ isActive }) => (isActive ? styles.nav__link + " on" : styles.nav__link)}>
            <PersonOutlineOutlinedIcon />
            <p className={styles.nav__btn}>마이</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;