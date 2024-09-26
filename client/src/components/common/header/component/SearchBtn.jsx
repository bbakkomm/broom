// css
import styles from "../CommonHeader.module.scss";

// icon
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

function SearchBtn() {
  return (
    <button className={styles.header__search}>
        <SearchOutlinedIcon className={styles.search__icon}/>
    </button>
  )
}

export default SearchBtn;