import { useState } from 'react';

// css
import styles from "../CommonHeader.module.scss";

import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

function HeartBtn() {
    const [heart, setHeart] = useState(false);
    const [heartCount, setHeartCount] = useState(0);  

    // 좋아요버튼
    const handleHeart = () => {
        if(heart) {
            setHeartCount(heartCount + 1);
        } else {
            setHeartCount(heartCount - 1);
        }
            setHeart(!heart);
    }

    return (
        <button className={styles.header__heart} onClick={handleHeart}>
            {heart ? <FavoriteOutlinedIcon className={styles.heart__icon}/> : <FavoriteBorderOutlinedIcon className={styles.heart__icon}/>}
        </button>
    )
}

export default HeartBtn;