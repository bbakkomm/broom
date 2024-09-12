import React from 'react'

function Detail() {
    return (
        <main className="detail">
            {/* 탭메뉴 */}
            <ul className="tab">
                <li className="tab__item"><a href="" className="tab__btn">홈</a></li>
                <li className="tab__item"><a href="" className="tab__btn">일정</a></li>
                <li className="tab__item"><a href="" className="tab__btn">모임멤버</a></li>
                <li className="tab__item"><a href="" className="tab__btn">Q&A</a></li>
            </ul>

            {/* 스터디 이미지 */}
            <section className="image">
                <img src="" alt="" />
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
                            <img src="" alt="" className="desc__img" />
                            <p className="">일정</p>
                        </div>
                        <p className="dec__text">2024.08.01 ~ </p>
                        <p className="desc__text"></p>
                    </li>

                    <li className="desc__item">
                        <div className="dec__icon">
                            <img src="" alt="" />
                            <p className="">시간</p>
                        </div>
                        <p className="dec__text">14:00</p>
                    </li>
                    
                    <li className="desc__item">
                        <div className="dec__icon">
                            <img src="" alt="" />
                            <p className="">위치</p>
                        </div>
                        <p className="dec__text">강남역 4번 출구</p>
                    </li>

                    <li className="desc__item">
                        <div className="dec__icon">
                            <img src="" alt="" />
                            <p className="">비용</p>
                        </div>
                        <p className="dec__text">비용없음</p>
                    </li>
                    
                    <li className="desc__item">
                        <div className="dec__icon">
                            <img src="" alt="" />
                            <p className="">인원</p>
                        </div>
                        <p className="dec__text">최소 {4}명</p> ~
                        <p className="dec__text">최대 {13}명</p>
                    </li>

                    <li className="desc__item">
                        <div className="dec__icon">
                            <img src="" alt="" />
                            <p className="">주요 기술</p>
                        </div>
                        <ul className="skill">
                            <li className="skill__item"></li>
                        </ul>
                    </li>
                </ul>

                <p className="info__text"></p>
            </section>

            {/* 일정 */}
            <section className="date">
                <h2 className="section-title">일정</h2>
            </section>

            {/* 모임 멤버 */}
            <section className="memeber">
                <h2 className="section-title">모임 멤버 ({4})</h2>
                
                <ul className="member__list">
                    <li className="member__item">
                        <img src="" alt="" className="member__img"/>
                        <div className="memeber__info">
                            <div className="memeber__data">
                                <p className="member__title">뚜부</p>
                                <span className="memeber__status">NEW</span>
                            </div>
                            <p className="memeber__text">안녕하세요 뚜부에요! :D 💕</p>
                        </div>
                    </li>
                    <li className="member__item">
                        <img src="" alt="" className="member__img"/>
                        <div className="memeber__info">
                            <div className="memeber__data">
                                <p className="member__title">뚜부</p>
                                <span className="memeber__status">NEW</span>
                            </div>
                            <p className="memeber__text">안녕하세요 뚜부에요! :D 💕</p>
                        </div>
                    </li>
                </ul>
            </section>

            {/* 댓글 */}
            <section>
                <h2 className="section-title">댓글 ({5})</h2>

                <li className="comment">
                    <img src="" alt="" className="comment__img"/>
                    <div className="comment__left">
                        <div className="comment__info">
                            <p className="comment__writer">뚜부</p>
                            <span className="comment__time">NEW</span>
                        </div>
                        <p className="comment__text">안녕하세요 뚜부에요! :D 💕</p>
                    </div>
                </li>

                <div className="comment__box">
                    <input type="text" placeholder="댓글을 입력해주세요." className="comment__input"/>
                    <button className="comment__btn">등록</button>
                </div>
            </section>

            <button>참여신청하기</button>
        </main>
    )
}

export default Detail