import { useState } from 'react';
import { Link, redirect, useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import customFetch from '../../../../utils/customFetch.js';

import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

export const loader = async ({ req }) => {
    try {
        const res = await customFetch.get(`/users/current-user`, req);

        return res;
    } catch (error) {
        console.log(error);
    //   return redirect('/study');
    }
}

function LikeBtn() { 
    const navigate = useNavigate();
    const loadData = useLoaderData();
    // const [{ study }] = loadData;    console.log(loadData);
    const getStudy = loadData[0];
    const getCurrentUser = loadData[2];

    const getStudyId = getStudy.study._id;
    const userId = getCurrentUser._id;

    let likeArr = getStudy.study.like;
    let isLikeUser = getStudy.study.like.includes(userId);
    
    console.log(getStudy.study);
    // console.log(study);

    // 좋아요 버튼
    const likeHandler = async (e) => {
        e.preventDefault();

        try {
            if (!isLikeUser) {
                likeArr.push(userId);
            } else {
                likeArr = likeArr.filter(value => value !== userId);
            }

            let formData = { like: likeArr }
            const res = await customFetch.patch(`/study/${getStudyId}`, formData);

            toast.success('study like edit successful');
            navigate('/study/studydetail');
        } catch (error) {
            toast.error(error?.response?.data?.msg);
            return error;
        }
    }

    return (
        <button className="header__like" onClick={likeHandler}>
            {isLikeUser ? <FavoriteOutlinedIcon className="like__icon" /> : <FavoriteBorderOutlinedIcon className="like__icon" />}
        </button>
    );
}

export default LikeBtn;