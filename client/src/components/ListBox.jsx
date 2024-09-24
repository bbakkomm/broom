import React, { useEffect, useState } from "react";
import jsonData from '../assets/data/listData.json';

function ListBox({ index, name, date, time, location, cost, participants, imgSrc }) {
  const [listData, setListData] = useState(jsonData.result);
  const [status, setStatus] = useState("모집중"); // 상태를 위한 useState 훅 추가

  useEffect(() => {
    filterRecruiting();
  }, []);

  const filterRecruiting = () => {
    const nowtime = new Date(); // 현재 시간 가져오기
    const updatedData = listData.map(item => {
      // item.date가 현재 시간보다 과거일 경우 '완료', 그렇지 않으면 '모집중'
      if (new Date(item.date) < nowtime) {
        return { ...item, status: "완료" };
      }
      return { ...item, status: "모집중" }; // 현재 시간보다 미래일 경우 '모집중'으로 설정
    });

    // 현재 아이템의 상태 찾기
    const currentItem = updatedData.find(item => item.name === name);
    if (currentItem) {
      setStatus(currentItem.status); // 현재 아이템의 상태 업데이트
    }
  };

  return (
    <li className="list__box" key={index}>
      <div className="list__badge">
        <p>{status}</p> {/* 상태 표시 */}
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
