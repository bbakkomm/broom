import React from "react";

function ListBox({ index, status, name, date, time, location, cost, participants, imgSrc}) {
    return (
        <li className="list__box" key={index}>
        <div className="list__badge">
          <p>{status}</p>
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
    )
}

export default ListBox;