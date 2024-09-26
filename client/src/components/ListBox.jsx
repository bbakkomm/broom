import React, { useEffect, useState } from "react";
import { redirect, useLoaderData, useNavigate } from 'react-router-dom';
import jsonData from '../assets/data/listData.json';
import customFetch from "../utils/customFetch.js";

const datttId = '66f18c4a2a30944fef4c41e2';


export const loader = async ({ req }) => {
  try {
    const res = await customFetch.get(`/study/${datttId}`, req);
    console.log('API 응답 성공:', res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    console.error('API 요청 실패:', error);
    return redirect('/study');
  }
}


function ListBox({ index, skillTag, name, date, time, location, cost, participants, imgSrc }) {
  const loadData = useLoaderData();
  const { study } = loadData;
    // console.log(study);


  const [listData, setListData] = useState(jsonData.result);
  const [status, setStatus] = useState("모집중");

  useEffect(() => {
    filterRecruiting();
  }, []); 

  const filterRecruiting = () => {
    const nowtime = new Date(); 
    const updatedData = listData.map(item => {
      // item.date가 현재 시간보다 과거일 경우 '완료', 그렇지 않으면 '모집중'
      if (new Date(item.date) < nowtime) {
        return { ...item, status: "완료" };
      }
      return { ...item, status: "모집중" }; // 현재 시간보다 미래일 경우 '모집중'으로 설정
    });

    setListData(updatedData); // 상태 업데이트중

    // 현재 아이템의 상태 찾기
    const currentItem = updatedData.find(item => item.name === name);
    if (currentItem) {
      setStatus(currentItem.status);
    }
  };

  return (
    <li className="list__box" key={index}>
      <div className="list__badge">
        <p className="list__title">{status}</p>
        <p className="list__skill01">{skillTag}</p>
      </div>
      <p className="study_name">{name}</p>
      <div className="study_inner">
        <img src={imgSrc} alt="" className="img_box" />
        <div className="study_info">
          <p>{date} ~</p>
          <p>{time}</p>
          <p>{location}</p>
          <p>{cost}</p>
          <p>{participants}</p>
        </div>
      </div>
    </li>
  );
}

export default ListBox;