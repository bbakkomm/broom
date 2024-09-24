import React, { useState } from "react";

// component
import Member from "./components/Member";

// CSS style
import styles from "../../assets/scss/pages/list/Detail.module.scss";

// img
import img from '../../../src/assets/img/pages/detail.jpg';

// icon
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import AccessAlarmsRoundedIcon from "@mui/icons-material/AccessAlarmsRounded";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";



function Detail(props) {
    const { user } = props;

    const members = [
        {
          src: ("../../../src/assets/img/pages/dubu.jpg"),
          name: '뚜부',
          text: '안녕하세요 뚜부에요! :D 💕'
        },
        {
            src: ("../../../src/assets/img/pages/dubu.jpg"),
            name: '뚜부',
            text: '안녕하세요 뚜부에요! :D 💕'
        },
        {
            src: ("../../../src/assets/img/pages/dubu.jpg"),
            name: '뚜부',
            text: '안녕하세요 뚜부에요! :D 💕'
        },
    ]

    return (
        <main className={styles.detail}>
            {/* 스터디 이미지 */}
            <section className={styles.image}>
                <img src={img} alt="" />
            </section>

            {/* 스터디 정보 */}
            <section className={styles.info}>
                <ul className={styles.tag}>
                    <li className={styles.tag__item}>모집중</li>
                </ul>

                <h2 className={styles.title}>스터디 이름</h2>

                <ul className={styles.desc}>
                    <li className={styles.desc__item}>
                        <div className={styles.dec__icon}>
                            <CalendarTodayRoundedIcon/>
                            <p className="blind">일정</p>
                        </div>
                        <p className={styles.dec__text}>2024.08.01</p>~
                        <p className={styles.desc__text}></p>
                    </li>

                    <li className={styles.desc__item}>
                        <div className={styles.dec__icon}>
                            <AccessAlarmsRoundedIcon/>
                            <p className="blind">시간</p>
                        </div>
                        <p className={styles.dec__text}>오후 02:00</p>
                    </li>
                    
                    <li className={styles.desc__item}>
                        <div className={styles.dec__icon}>
                            <PlaceOutlinedIcon/>
                            <p className="blind">위치</p>
                        </div>
                        <p className={styles.dec__text}>강남역 4번 출구</p>
                    </li>

                    <li className={styles.desc__item}>
                        <div className={styles.dec__icon}>
                            <PaymentsOutlinedIcon/>
                            <p className="blind">비용</p>
                        </div>
                        <p className={styles.dec__text}>비용없음</p>
                    </li>
                    
                    <li className={styles.desc__item}>
                        <div className={styles.dec__icon}>
                            <PeopleAltOutlinedIcon/>
                            <p className="blind">인원</p>
                        </div>
                        <p className={styles.dec__text}>최소 {4}명</p> ~
                        <p className={styles.dec__text}>최대 {13}명</p>
                    </li>

                    <li className={styles.desc__item}>
                        <div className={styles.dec__icon}>
                            <SettingsOutlinedIcon/>
                            <p className="blind">주요 기술</p>
                        </div>

                        <ul className={`${styles.skillTagBox} + skill-tag-box`}>
                            <li className="skill-tag-box__item"><span className="skill-tag skill-tag--js">JavaScript</span></li>
                            <li><span className="skill-tag skill-tag--ts">TypeScript</span></li>
                            <li><span className="skill-tag skill-tag--react">React</span></li>
                        </ul>
                    </li>
                </ul>

                <p className={styles.info__text}>
                    스터디 팀원 모집합니다. <br /> 같이 재미있게 공부해요! :D
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum rerum mollitia ullam alias, molestias fugiat suscipit delectus dicta, sunt ducimus, veniam cumque dolor non? Est minus explicabo atque alias recusandae.
                </p>
            </section>

            {/* 모임 멤버 */}
            <section className={styles.member}>
                <h2 className={styles.sectionTitle}>모임 멤버 ({members.length})</h2>
                
                <ul className={styles.member__list}>
                    {members.map((member, i) => 
                        <Member member={member} key={i}/>
                    )}
                </ul>
            </section>

            { !user && (
                <div className={`${styles.btn} + btn`}>
                    <button className="btn-bg">참여하기</button>    
                </div>
            )}
        </main>
    )
}

export default Detail