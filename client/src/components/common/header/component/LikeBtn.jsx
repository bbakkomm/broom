import { useState } from 'react';
import { Link, redirect, useLoaderData, useNavigate } from 'react-router-dom';

// css
import styles from "../CommonHeader.module.scss";

import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';


const datttId = '66f18c4a2a30944fef4c41e2';

export const loader = async ({ req }) => {
    try {
      const res = await customFetch.get(`/study/${datttId}`, req);
      return res.data;
    } catch (error) {
      console.log(error);
    //   return redirect('/study');
    }
}

function LikeBtn() {
    const [like, setLike] = useState(false);
    const [likeCount, setLikeCount] = useState(0);  
    const loadData = useLoaderData();
    const { study } = loadData;
    const studyLikeCount = study.like;
    console.log(loadData);
    console.log(study);

    // 좋아요버튼
    const handleLike = () => {
        if(like) {
            setLikeCount(studyLikeCount + 1);
            console.log(studyLikeCount);
            
        } else {
            setLikeCount(studyLikeCount - 1);
            console.log(studyLikeCount);
        }
            setLike(!like);
    }

    return (
        <button className={styles.header__like} onClick={handleLike}>
            {like ? <FavoriteOutlinedIcon className={styles.like__icon}/> : <FavoriteBorderOutlinedIcon className={styles.like__icon}/>}
        </button>
    )
}

export default LikeBtn;