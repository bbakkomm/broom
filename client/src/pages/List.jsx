import React, { useState } from "react";
import { redirect, useLoaderData, useNavigate } from 'react-router-dom';
import path from 'path';

import customFetch from "../utils/customFetch.js";

import Nav from "../components/common/navigation/CommonNav";
import ListBox from "../components/ListBox";

export const loader = async ({ req }) => {
  try {
    const res = await customFetch.get('/study', req);
    return res.data;
  } catch (error) {
    console.log(error);
    return redirect('/');
  }
}

const List = () => {
  //전체, 모집중, 완료
  const [selectedIndex, setSelectedIndex] = useState(null);
  const handleClick = (index, e) => {
    e.preventDefault();
    setSelectedIndex(index);
  }

  const loadData = useLoaderData();
  const { studys } = loadData;

    return (
      <div>
        {/* <Header></Header> */}
        <div className="list_tit">
          <a href="/whole" onClick={(e) => handleClick(0, e)}>
            <div style={{
            color: selectedIndex === 0 ? 'black' : 'black',
            fontWeight: selectedIndex === 0 ? 'bold' : 'normal',
            }}>전체</div>
          </a>

          <a href="/assemble" onClick={(e) => handleClick(1, e)}>
            <div style={{
            color: selectedIndex === 1 ? 'black' : 'black',
            fontWeight: selectedIndex === 1 ? 'bold' : 'normal',
            }}>모집중</div>
          </a>

          <a href="/complete" onClick={(e) => handleClick(2, e)}>
            <div style={{
            color: selectedIndex === 2 ? 'black' : 'black',
            fontWeight: selectedIndex === 2 ? 'bold' : 'normal',
            }}>완료</div>
          </a>
        </div>
        {/* 리스트 목록 */}
        <div className="list">
          <ul className="list__wrapper">
            {studys.map((study, index) => (
                <ListBox
                objId={study._id}
                index={index}
                status={study.status}
                skillTag={study.skillTag}
                name={study.name}
                date={study.date}
                time={study.time}
                location={study.loaction}
                cost={study.cost}
                participants={study.participants}
                imgSrc={'http://localhost:5173/' + study.thumb.path}
                />
            ))}
          </ul>
        </div>
        <Nav/>
      </div>
    )
  }
  export default List