import React, { useState } from "react";
import { redirect, useLoaderData, useNavigate } from 'react-router-dom';

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

import customFetch from "../../utils/customFetch.js";

const datttId = '66f18c4a2a30944fef4c41e2';

export const loader = async ({ req }) => {
    try {
      const res = await customFetch.get(`/study/${datttId}`, req);
      return res.data;
    } catch (error) {
      console.log(error);
      return redirect('/study');
    }
  }

function Detail(props) {
    const loadData = useLoaderData();
    const { study } = loadData;
    console.log(loadData);

    const { user } = props;
    const skillTag = study.skillTag;
    console.log("22" + skillTag.includes('javascript'));
    
    

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
                <img src={study.thumb} alt={study.title} />
            </section>

            {/* 스터디 정보 */}
            <section className={styles.info}>
                <ul className={styles.tag}>
                    <li className={styles.tag__item}>모집중</li>
                </ul>

                <h2 className={styles.title}>{study.title}</h2>

                <ul className={styles.desc}>
                    <li className={styles.desc__item}>
                        <div className={styles.dec__icon}>
                            <CalendarTodayRoundedIcon/>
                            <p className="blind">일정</p>
                        </div>
                        <p className={styles.dec__text}>{study.date}</p>~
                        <p className={styles.desc__text}></p>
                    </li>

                    <li className={styles.desc__item}>
                        <div className={styles.dec__icon}>
                            <AccessAlarmsRoundedIcon/>
                            <p className="blind">시간</p>
                        </div>
                        <p className={styles.dec__text}>{study.time}</p>
                    </li>
                    
                    <li className={styles.desc__item}>
                        <div className={styles.dec__icon}>
                            <PlaceOutlinedIcon/>
                            <p className="blind">위치</p>
                        </div>
                        <p className={styles.dec__text}>{study.place}</p>
                    </li>

                    <li className={styles.desc__item}>
                        <div className={styles.dec__icon}>
                            <PaymentsOutlinedIcon/>
                            <p className="blind">비용</p>
                        </div>
                        <p className={styles.dec__text}>{study.price}</p>
                    </li>
                    
                    <li className={styles.desc__item}>
                        <div className={styles.dec__icon}>
                            <PeopleAltOutlinedIcon/>
                            <p className="blind">인원</p>
                        </div>
                        <p className={styles.dec__text}>최대 {study.maximumPerson}명</p>
                    </li>

                    <li className={styles.desc__item}>
                        <div className={styles.dec__icon}>
                            <SettingsOutlinedIcon/>
                            <p className="blind">주요 기술</p>
                        </div>

                        {/* <ul className={`${styles.skillTagBox} + skill-tag-box`}>
                            {skillTag.map((skillTag, i)=>
                                <li key={i}><span className="skill-tag skill-tag--react">{skillTag}</span></li>
                            )}
                            <li className="skill-tag-box__item"><span className="skill-tag skill-tag--js">JavaScript</span></li>
                            <li><span className="skill-tag skill-tag--ts">TypeScript</span></li>
                            <li><span className="skill-tag skill-tag--react">React</span></li>
                        </ul> */}
                        
                        <div className="skillTag">
                            {
                                skillTag.includes('javascript')
                                ? (<span className="skillTag__javascript">JavaScript</span>)
                                : ''
                            }
                            {
                                skillTag.includes('typescript')
                                ? (<span className="skillTag__typescript">TypeScript</span>)
                                : ''
                            }
                            {
                                skillTag.includes('react')
                                ? (<span className="skillTag__react">React</span>)
                                : ''
                            }
                            {
                                skillTag.includes('dart')
                                ? (<span className="skillTag__dart">Dart</span>)
                                : ''
                            }
                            {
                                skillTag.includes('flutter')
                                ? (<span className="skillTag__flutter">Flutter</span>)
                                : ''
                            }
                            {
                                skillTag.includes('html')
                                ? (<span className="skillTag__html">HTML</span>)
                                : ''
                            }
                            {
                                skillTag.includes('css')
                                ? (<span className="skillTag__css">CSS</span>)
                                : ''
                            }
                        </div>
                    </li>
                </ul>

                <p className={styles.info__text}>
                    {study.introduce}
                </p>
            </section>

            {/* 모임 멤버 */}
            <section className={styles.member}>
                <h2 className={styles.sectionTitle}>모임 멤버 ({members.length})</h2>
                {/* <Member member={study.createdBy}/> */}
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