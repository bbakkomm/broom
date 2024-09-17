import React from 'react'

// icon
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import AccessAlarmsRoundedIcon from "@mui/icons-material/AccessAlarmsRounded";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

// img
import Img from "../../assets/img/study_img_tbd.jpg"

function Schedule() {
  return (
    <div className="schedule">
        <img src={Img} alt="" className="schedule__img" />
        <div className="cont">
            <p className="cont__title">모각코 15시~</p>
            <ul className="desc">
                <li className="desc__item">
                    <div className="dec__icon">
                        <CalendarTodayRoundedIcon/>
                        <p className="blind">일정</p>
                    </div>
                    <p className="dec__text">2024.08.01</p>
                    <p className="blind">시간</p>
                    <p className="dec__text">오후 02:00</p>
                </li>
                
                <li className="desc__item">
                    <div className="dec__icon">
                        <PlaceOutlinedIcon/>
                        <p className="blind">위치</p>
                    </div>
                    <p className="dec__text">강남역 4번 출구</p>
                </li>

                <li className="desc__item">
                    <div className="dec__icon">
                        <PaymentsOutlinedIcon/>
                        <p className="blind">비용</p>
                    </div>
                    <p className="dec__text">비용없음</p>
                </li>
                
                <li className="desc__item">
                    <div className="dec__icon">
                        <PeopleAltOutlinedIcon/>
                        <p className="blind">인원</p>
                    </div>
                    <p className="dec__text"><span className="desc__text--point">{4}</span>/{13}</p>
                </li>
            </ul>
            <button className="btn-bg">참여</button>
        </div>
    </div>
  )
}

export default Schedule