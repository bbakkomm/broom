import { NavLink } from "react-router-dom";

// css
import styles from "./CommonNav.module.scss"

// icon
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import AddIcon from '@mui/icons-material/Add';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

function Nav(props) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__item}>
          <NavLink to="/home" className={({ isActive }) => (isActive ? styles.nav__linkOn : styles.nav__link)}>
            <HomeOutlinedIcon/>
            <p className={styles.nav__btn}>홈</p>
          </NavLink>
        </li>
        <li className={styles.nav__item}>
          <NavLink
            to="/study"
            className={({ isActive }) => (isActive ? styles.nav__linkOn : styles.nav__link)}
          >
            <MenuBookOutlinedIcon />
            <p className={styles.nav__btn}>스터디</p>
          </NavLink>
        </li>
        <li className={styles.nav__item}>
          <NavLink
            to="/studycreation"
            className={({ isActive }) => (isActive ? styles.nav__linkOn : styles.nav__link)}
          >
            <AddIcon />
            <p className={styles.nav__btn}>스터디 생성</p>
          </NavLink>
        </li>
        <li className={styles.nav__item}>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? styles.nav__linkOn : styles.nav__link)}>
            <PersonOutlineOutlinedIcon />
            <p className={styles.nav__btn}>마이</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;