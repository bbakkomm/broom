import { useNavigate } from 'react-router-dom';

// icon
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import LikeBtn from './component/LikeBtn';
import ShareBtn from './component/ShareBtn';
  
function Header(props) {
  const { pagetype, title, rightBtn } = props;
  const navigate = useNavigate();
  
  const notArrow_Page = ['login'];
  const okLike_Page = ['detail'];
  const okLink_Page = ['detail'];
  const isArrow = !notArrow_Page.includes(pagetype);
  const isLike = okLike_Page.includes(pagetype);
  const isLink = okLink_Page.includes(pagetype);


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