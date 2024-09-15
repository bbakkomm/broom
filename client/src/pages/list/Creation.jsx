import React from 'react'
import { Link } from 'react-router-dom';

// icon
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import AccessAlarmsRoundedIcon from "@mui/icons-material/AccessAlarmsRounded";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import StarRoundedIcon from "@mui/icons-material/StarRounded";



function Creation(props) {
  const {study} = props;
  
  const StartDay = "startday";
  const Deadline = "deadline";

  return (
    <section className="creation">
      <form action="" className="form-box">
        <fieldset className="form-box__inner">
          <legend className="form-box__title">로그인</legend>

          {/* img */}
          <div className="input-box input-box--img">
            <label htmlFor="img" className="input-label input-label--img">
              <AddAPhotoOutlinedIcon className="input-label__icon"/>
              <p>스터디 모집 사진을 <br/>등록해주세요.</p>
            </label>
            <input type="file" id="img" name="img" className="input-write"/>
          </div>

          {/* name */}
          <div className="input-box">
            <label htmlFor="name" className="input-label input-label--require">
              <CreateOutlinedIcon/>
              <p className="blind">이름</p>
            </label>
            <input type="text" id="name" name="name" placeholder="이름" minlength={2} maxlength={12} required className="input-write"/>
            <p className="validity blind">이름을 입력해주세요.</p>
          </div>

          {/* calender */}
          <div className="input-box">
            <label htmlFor="startdate" className="input-label input-label--require">
              <CalendarTodayRoundedIcon/>
              <p className="blind">시작 날짜</p>
            </label>
            {/* startdate */}
            <input type="date" id="startdate" name="startdate" placeholder="시작 날짜" value={StartDay} required className="input-write"/>
            <span className="range">~</span>
            {/* deadline */}
            <label htmlFor="deadline" className="input-label blind">마감 날짜</label>
            <input type="date" id="deadline" name="deadline" placeholder="마감 날짜" value={Deadline} className="input-write"/>

            <p className="validity blind">날짜를 선택해주세요.</p>
          </div>

          {/* time */}
          <div className="input-box">
            <div className="input-box__icon">
              <AccessAlarmsRoundedIcon/>
              <span className="input-box__require">*</span>
            </div>

            <label htmlFor="time" className="input-label blind">시간</label>
            <input type="time" id="time" name="time" placeholder="시간" required className="input-write"/>
            <p className="validity blind">시간을 선택해주세요.</p>
          </div>

          {/* location */}
          <div className="input-box">
            <div className="input-box__icon">
              <PlaceOutlinedIcon/>
              <span className="input-box__require">*</span>
            </div>

            <label htmlFor="location" className="input-label blind">위치</label>
            <input type="time" id="location" name="location" placeholder="위치" required className="input-write"/>
            <p className="validity blind">위치를 선택해주세요.</p>
          </div>

          {/* pay */}
          <div className="input-box">
            <div className="input-box__icon">
              <PaymentsOutlinedIcon/>
            </div>

            <label htmlFor="pay" className="input-label blind">비용</label>
            <input type="time" id="pay" name="pay" placeholder="비용" className="input-write"/>
            <p className="validity blind">비용을 입력해주세요.</p>
          </div>

          {/* people */}
          <div className="input-box">
            <div className="input-box__icon">
              <PeopleAltOutlinedIcon/>
              <span className="input-box__require">*</span>
            </div>

            <label htmlFor="people" className="input-label blind">최소 인원</label>
            <input type="number" id="people" name="people" placeholder="최소 인원" required className="input-write"/>
            ~            
            <label htmlFor="people" className="input-label blind">최대 인원</label>
            <input type="number" id="people" name="people" placeholder="최대 인원" required className="input-write"/>

            <p className="validity blind">인원을 선택해주세요.</p>
          </div>

          {/* pay */}
          <div className="input-box">
            <div className="input-box__icon">
              <PaymentsOutlinedIcon/>
              <span className="input-box__require">*</span>
            </div>

            <label htmlFor="skill" className="input-label blind">주요기술</label>
            <input type="time" id="skill" name="skill" placeholder="주요기술" className="input-write"/>
            <p className="validity blind">주요기술을 선택해주세요.</p>
          </div>

          <div className="input-box">
            <div className="input-box__icon">
              소개내용
              <CreateOutlinedIcon/>
              <span className="input-box__require">*</span>
            </div>
          </div>

          <div className="btn">
            { study ? (
              <Link to="" className="btn-bg">스터디 생성</Link>
            ):(
              <Link to="" className="btn-bg">팀프로젝트 생성</Link>
            )}
          </div>

        </fieldset>
      </form>
    </section>
  )
}

export default Creation