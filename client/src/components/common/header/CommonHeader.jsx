import { Link, useNavigate } from 'react-router-dom';

// icon
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Logo from "../../../assets/img/common/logo_broom.svg";
import LikeBtn from './component/LikeBtn';
import ShareBtn from './component/ShareBtn';
import SearchBtn from './component/SearchBtn';
  
function Header(props) {
  const { pagetype, title, rightBtn } = props;
  const navigate = useNavigate();
  
  const notArrowPage = ['login'];
  const okLikePage = ['detail'];
  const okLinkPage = ['detail'];
  const isArrow = !notArrowPage.includes(pagetype);
  const isLike = okLikePage.includes(pagetype);
  const isLink = okLinkPage.includes(pagetype);


  const linkHandler = () => {
    if (isArrow) {
      navigate(-1);
    }
  }

  return (
    <header className="header">
      <button title={title} className="header__link" onClick={linkHandler}>
        {isArrow ? (<ArrowBackIosNewOutlinedIcon />) : ('')}
        <h1 className="header__title">{title}</h1>
      </button>
      <div className="header__btn">
        {isLike ? (<LikeBtn/>) : ('')}
        {isLink ? (<ShareBtn/>) : ('')}
      </div>
    </header>
  );
}

export default Header;