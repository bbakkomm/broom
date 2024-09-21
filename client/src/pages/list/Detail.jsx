import React, { useState } from "react";

// component
import Schedule from "../../components/list/Schedule";
import Tab from "../../components/common/tab/CommonTab";

// img
import img from '../../../src/assets/img/pages/detail.jpg';
import dubuImg from '../../../src/assets/img/pages/dubu.jpg';

// icon
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import AccessAlarmsRoundedIcon from "@mui/icons-material/AccessAlarmsRounded";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";



function Detail() {
    return (
        <main className="detail">
            {/* 탭메뉴 */}
            {/* <ul className="tab">
                <li className="tab__item active">홈</li>
                <li className="tab__item">일정</li>
                <li className="tab__item">모임멤버</li>
                <li className="tab__item">Q&A</li>
            </ul> */}

            <Tab/>

            {/* 스터디 이미지 */}
            <section className="image">
                <img src={img} alt="" />
            </section>

            {/* 스터디 정보 */}
            <section className="info">
                <ul className="tag">
                    <li className='tag__item'>모집중</li>
                </ul>

                <h2 className="title">스터디 이름</h2>

                <ul className="desc">
                    <li className="desc__item">
                        <div className="dec__icon">
                            <CalendarTodayRoundedIcon/>
                            <p className="blind">일정</p>
                        </div>
                        <p className="dec__text">2024.08.01 ~ </p>
                        <p className="desc__text"></p>
                    </li>

                    <li className="desc__item">
                        <div className="dec__icon">
                            <AccessAlarmsRoundedIcon/>
                            <p className="blind">시간</p>
                        </div>
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
                        <p className="dec__text">최소 {4}명</p> ~
                        <p className="dec__text">최대 {13}명</p>
                    </li>

                    <li className="desc__item desc__item--mb">
                        <div className="dec__icon">
                            <SettingsOutlinedIcon/>
                            <p className="blind">주요 기술</p>
                        </div>
                        <ul className="skill">
                            <li className="skill__item"></li>
                        </ul>
                    </li>
                </ul>

                <p className="info__text">
                    스터디 팀원 모집합니다. <br /> 같이 재미있게 공부해요! :D
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum rerum mollitia ullam alias, molestias fugiat suscipit delectus dicta, sunt ducimus, veniam cumque dolor non? Est minus explicabo atque alias recusandae.
                </p>
            </section>

            {/* 일정 */}
            <section className="date">
                <h2 className="section-title">일정11</h2>
                <p className="day"><span className="day__date">08.01</span>목 <span className="day__status">오늘</span></p>
                <div className="list">
                    <ul className="list__wrapper">
                        {/* {listData.map((study, index) => (
                            <ListBox
                                key={index}
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
                        ))} */}
                        <Schedule/>
                    </ul>
                </div>
                
                <p className="day"><span className="day__date">08.01</span>목 <span className="day__status">오늘</span></p>
                <div className="list">
                    <ul className="list__wrapper">
                        {/* {listData.map((study, index) => (
                            <ListBox
                                key={index}
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
                        ))} */}
                    </ul>
                </div>
            </section>

            {/* 모임 멤버 */}
            <section className="member">
                <h2 className="section-title">모임 멤버 ({4})</h2>
                
                <ul className="member__list">
                    <li className="member__item">
                        <img src={ dubuImg } alt="" className="member__img"/>
                        <div className="member__info">
                            <div className="member__data">
                                <p className="member__title">뚜부</p>
                                <span className="member__status member__status--new">NEW</span>
                            </div>
                            <p className="member__text">안녕하세요 뚜부에요! :D 💕</p>
                        </div>
                    </li>
                    <li className="member__item">
                        <img src={ dubuImg } alt="" className="member__img"/>
                        <div className="member__info">
                            <div className="member__data">
                                <p className="member__title">뚜부</p>
                                <span className="member__status member__status--new">NEW</span>
                            </div>
                            <p className="member__text">안녕하세요 뚜부에요! :D 💕</p>
                        </div>
                    </li>
                </ul>
            </section>

            {/* 댓글 */}
            <section className="comment">
                <h2 className="section-title">댓글 ({5})</h2>

                <ul className="comment__list">
                    <li className="comment__item">
                        <img src={ dubuImg } alt="" className="comment__img"/>
                        <div className="comment__left">
                            <div className="comment__info">
                                <p className="comment__writer">뚜부</p>
                                <span className="comment__time">2024.08.01 23:00:00</span>
                            </div>
                            <p className="comment__text">
                                안녕하세요 잘 부탁드려요<br/>
                                비스톤스의 뚜부! 입니다 :D
                            </p>
                        </div>
                    </li>
                                        <li className="comment__item">
                        <img src={ dubuImg } alt="" className="comment__img"/>
                        <div className="comment__left">
                            <div className="comment__info">
                                <p className="comment__writer">뚜부</p>
                                <span className="comment__time">2024.08.01 23:00:00</span>
                            </div>
                            <p className="comment__text">
                                안녕하세요 잘 부탁드려요<br/>
                                비스톤스의 뚜부! 입니다 :D
                            </p>
                        </div>
                    </li>
                    <li className="comment__item">
                        <img src={ dubuImg } alt="" className="comment__img"/>
                        <div className="comment__left">
                            <div className="comment__info">
                                <p className="comment__writer">뚜부</p>
                                <span className="comment__time">2024.08.01 23:00:00</span>
                            </div>
                            <p className="comment__text">
                                안녕하세요 잘 부탁드려요<br/>
                                비스톤스의 뚜부! 입니다 :D
                            </p>
                        </div>
                    </li>
                </ul>

                <div className="comment__box">
                    <input type="text" placeholder="댓글을 입력해주세요." className="comment__input"/>
                    <button className="comment__btn">등록</button>
                </div>
            </section>

            <div className="btn">
                <button className="btn-bg">참여하기</button>    
            </div>
        </main>
    )
}

export default Detail