import { useEffect, useState } from 'react';
import { Link, Form, redirect, useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

// api
import customFetch from "../../utils/customFetch.js";
import FormRow from '../../components/FormRow';

// component
import Member from "./components/Member";

// icon
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import AccessAlarmsRoundedIcon from "@mui/icons-material/AccessAlarmsRounded";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import DeleteIcon from '@mui/icons-material/Delete';


export const loader = async ({ req }) => {
    
    try {
        const datttId = sessionStorage.getItem('singleStudyValue');
        const res = await customFetch.get(`/study/${datttId}`, req);
        let members = res.data.study.member;
        
        const allUsers = await customFetch.get(`/users/all-user`, req);
        let users = allUsers.data.user;
        users = users.filter(v => members.includes(v._id));

        const getCurrentUser = await customFetch.get(`/users/current-user`, req);

        return [res.data, users, getCurrentUser.data.user];
    } catch (error) {
        console.log(error);
        return redirect('/study');
    }
}

function Detail(props) {
    const loadData = useLoaderData();
    const navigate = useNavigate();
    const [{ study }, membersArr, getCurrentUser] = loadData;
    const { user } = props;

    const domain = [window.location.protocol, window.location.host].join('//') + '/';

    console.log(study);
    const [
        skillTag, 
        member
    ] = [
        study.skillTag, 
        study.member
    ];
    
    // 스터디 개설자 == 현재 접속한 사용자
    const isManager = study.createdBy === getCurrentUser._id;

    // 스터디에 참석한 멤버에 포함 여부
    const isMember = membersArr.map(v => v._id).includes(getCurrentUser._id);

    // 스터디 최대 인원 초과 여부
    const isJoinMemberMaxNum = membersArr.map(v => v._id).length < study.maximumPerson;

    // 페이지 진입시 ScrollTop
    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [])

    // 페이지 진입시 ScrollTop
    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [])

    // 탈퇴하기 버튼
    const leaveHandler = async ( e ) => {
        e.preventDefault();

        const memberData = getCurrentUser._id;
        
        try {
            const datttId = sessionStorage.getItem('singleStudyValue');
            const res1 = await customFetch.get(`/study/${datttId}`, '');
            let req2 = res1.data.study.member;
            req2 = req2.filter(value => memberData !== value);

            const formData = { member: req2 }
            const res = await customFetch.patch(`/study/${datttId}`, formData);
            toast.success('study member leave successful');
            navigate('/study/studydetail');
        } catch (error) {
            toast.error(error?.response?.data?.msg);
            return error;
        }
    }

    // 참여하기 버튼
    const participateHandler = async (e) => {
        e.preventDefault();

        const memberData = getCurrentUser._id;
        
        try {
            const datttId = sessionStorage.getItem('singleStudyValue');
            const res1 = await customFetch.get(`/study/${datttId}`, '');
            let req2 = res1.data.study.member;
            req2.push(memberData);

            const formData = { member: req2 }
            const res = await customFetch.patch(`/study/${datttId}`, formData);
            toast.success('study member add successful');
            navigate('/study/studydetail');
        } catch (error) {
            toast.error(error?.response?.data?.msg);
            return error;
        }
    }

    // 수정하기 버튼
    const editHandler = () => {
        
    }

    // 스터디 삭제 버튼
    const removeHandler = async ( e ) => {
        e.preventDefault();

        try {
            if (window.confirm('정말 삭제하시겠습니까?')) {
                const datttId = sessionStorage.getItem('singleStudyValue');
                const res = await customFetch.delete(`/study/${datttId}`, '');
                toast.success('study delete successful');
                navigate('/study');
            }
        } catch (error) {
            toast.error(error?.response?.data?.msg);
            return error;
        }
    }

    return (
        <main className="detail">
            {/* 스터디 이미지 */}
            <section className="image">
                <img src={domain + study.thumb.path} alt={study.title} />
            </section>

            {/* 스터디 정보 */}
            <section className="info">
                <ul className="tag">
                    {
                        !study.complete ? 
                        <li className="tag__item">모집중</li> :
                        <li className="tag__item__complete">완료</li> 
                    }
                </ul>

                <h2 className="title">{study.title}</h2>

                <ul className="desc">
                    <li className="desc__item">
                        <div className="dec__icon">
                            <CalendarTodayRoundedIcon/>
                            <p className="blind">일정</p>
                        </div>
                        <p className="dec__text">{study.startDate}</p>~
                        <p className="desc__text">{study.endDate}</p>
                    </li>

                    <li className="desc__item">
                        <div className="dec__icon">
                            <AccessAlarmsRoundedIcon/>
                            <p className="blind">시간</p>
                        </div>
                        <p className="dec__text">{study.time}</p>
                    </li>
                    
                    <li className="desc__item">
                        <div className="dec__icon">
                            <PlaceOutlinedIcon/>
                            <p className="blind">위치</p>
                        </div>
                        <p className="dec__text">{study.place}</p>
                    </li>

                    <li className="desc__item">
                        <div className="dec__icon">
                            <PaymentsOutlinedIcon/>
                            <p className="blind">비용</p>
                        </div>
                        <p className="dec__text">{Number(study.price).toLocaleString('ko-KR')}</p>
                    </li>
                    
                    <li className="desc__item">
                        <div className="dec__icon">
                            <PeopleAltOutlinedIcon/>
                            <p className="blind">인원</p>
                        </div>
                        <p className="dec__text">최소 {study.minimumPerson}명</p>~
                        <p className="dec__text">최대 {study.maximumPerson}명</p>
                    </li>

                    <li className="desc__item">
                        <div className="dec__icon">
                            <SettingsOutlinedIcon/>
                            <p className="blind">주요 기술</p>
                        </div>
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

                <p className="info__text">
                    {study.introduce}
                </p>
            </section>

            {/* 모임 멤버 */}
            <section className="member">
                <h2 className="sectionTitle">모임 멤버 ({member.length})</h2>
                {/* <Member member={study.createdBy}/> */}
                <ul className="member__list">
                    {membersArr.map((member, i) => 
                        <Member member={member} create={study.createdBy} key={i}/>
                    )}
                </ul>
            </section>
                { isManager ? (
                    <div className="btn rebottom">
                        <button className="input-submit btn-un btn-bg" onClick={removeHandler}>스터디 삭제하기</button>
                    </div>
                ) : ('')}

                { !isManager && isMember ? (
                    <div className="btn rebottom">
                        <button className="input-submit btn-un btn-bg" onClick={leaveHandler}>스터디 탈퇴하기</button>
                    </div>
                ) : ('')}

                { isManager ? (
                    <div className="btn">
                        <button type='submit' className="btn__button btn-bg" onClick={editHandler}>수정하기</button>    
                    </div>
                ) : ('')}

                { !isManager && !isMember && isJoinMemberMaxNum ? (
                    <div className="btn">
                        <button className="btn__button btn-bg" onClick={participateHandler}>참여하기</button>    
                    </div>
                ):('')}
        </main>
    )
}

export default Detail