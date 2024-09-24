import React, { useState } from "react";
import ListBox from "../components/ListBox";
import jsonData from '../assets/data/listData.json';

const whole = () => {

    {/* 리스트 목록 */}
    <div className="list">
    <ul className="list__wrapper">
        {listData.map((study, index) => (
            <ListBox
            index={index}
            status={study.status}
            name={study.name}
            date={study.date}
            time={study.time}
            location={study.loaction}
            cost={study.cost}
            participants={study.participants}
            imgSrc={imgPath + study.imgSrc}
            />
        ))}

    </ul>
    </div>
}
export default whole;