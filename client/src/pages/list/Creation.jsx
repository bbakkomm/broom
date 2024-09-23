import { useState } from 'react';
import { Link, Form, json } from 'react-router-dom';
import { toast } from 'react-toastify';

import FormRow from '../../components/FormRow';
import customFetch from '../../utils/customFetch.js';

// icon
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
// import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import AccessAlarmsRoundedIcon from "@mui/icons-material/AccessAlarmsRounded";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
// import StarRoundedIcon from "@mui/icons-material/StarRounded";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const file = formData.get('thumb');
  // console.log(file.path);

  if (file && file.size > 500000) {
    toast.error('Image size too large');
    return null;
  }

  let skillTags = document.querySelectorAll('[name="skillTag"]');
  let skillArr = Array.from(skillTags)
    .map(item => [item.value, item.checked])
    .filter(item => item[1] === true).map(item => item[0]);
    formData.delete('skillTag');
    skillArr.forEach(value => formData.append('skillTag', value));
  
  try {
    const res = await customFetch.post('/study', formData);
    toast.success('study create successful');
    console.log(request);
    console.log(res);

    return json({
      data: res,
      // redirect: "/idsuccess"
    });
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
  return null;
};

function Creation(props) {
  const {study} = props;
  
  const StartDay = "startday";
  const Deadline = "deadline";

  const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

  return (
    <main className="creation">
      <Form method='post' className="form-box" encType='multipart/form-data'>
        <fieldset className="form-box__inner">
          <legend className="form-box__title">로그인</legend>
          
          {/* img */}
          <div className="input-box input-box--img">
            <label htmlFor="thumb" className="input-label input-label--img">
              {file && <img src={file} alt="preview-img" />}
              {!file && <AddAPhotoOutlinedIcon className="input-label__icon"/>}
              {!file && <p>스터디 모집 사진을 <br/>등록해주세요.</p>}
            </label>
            <input 
              type="file" 
              id="thumb" 
              name="thumb" 
              accept='image/*'
              className="input-write"
              onChange={handleChange}
            />
            <div className="preview"></div>
          </div>

          {/* title */}
          <div className="input-box">
            <label htmlFor="title" className="input-label input-label--require">
              <CreateOutlinedIcon/>
              <p className="blind">제목</p>
            </label>
            <input type="text" id="title" name="title" placeholder="이름" required className="input-write"/>
            <p className="validity blind">제목을 입력해주세요.</p>
          </div>

          {/* calender */}
          {/* <div className="input-box">
            <label htmlFor="startdate" className="input-label input-label--require">
              <CalendarTodayRoundedIcon/>
              <p className="blind">시작 날짜</p>
            </label> */}
            {/* startdate */}
            {/* <input type="date" id="startdate" name="startdate" value={StartDay} required className="input-write"/>
            <span className="range">~</span> */}
            {/* deadline */}
            {/* <label htmlFor="deadline" className="input-label blind">마감 날짜</label>
            <input type="date" id="deadline" name="deadline" value={Deadline} className="input-write"/>

            <p className="validity blind">날짜를 선택해주세요.</p>
          </div> */}

          {/* time */}
          <div className="input-box">
            <label htmlFor="time" className="input-label input-label--require">
              <AccessAlarmsRoundedIcon/>
              <p className="blind">시간</p>
            </label>
            <input type="time" id="time" name="time" required className="input-write"/>
            <p className="validity blind">시간을 선택해주세요.</p>
          </div>

          {/* place */}
          <div className="input-box">
            <label htmlFor="place" className="input-label input-label--require">
              <PlaceOutlinedIcon/>
              <p className="blind">위치</p>
            </label>
            <input type="text" id="place" name="place" required className="input-write"/>
            <p className="validity blind">위치를 선택해주세요.</p>
          </div>

          {/* price */}
          <div className="input-box">
            <label htmlFor="price" className="input-label">
              <PaymentsOutlinedIcon/>
              <p className="blind">비용</p>
            </label>
            <input type="number" id="price" name="price" placeholder="비용" className="input-write"/>
            <p className="validity blind">비용을 입력해주세요.</p>
          </div>

          {/* people */}
          <div className="input-box">
            {/* <label htmlFor="people" className="input-label input-label--require">
              
              <p className="blind">최소 인원</p>
            </label>
            <input type="number" id="people" name="people" placeholder="최소 인원" required className="input-write"/>
            ~             */}
            <PeopleAltOutlinedIcon/>
            <label htmlFor="maximumPerson" className="input-label blind">최대 인원</label>
            <input type="number" id="maximumPerson" name="maximumPerson" placeholder="최대 인원" required className="input-write"/>

            <p className="validity blind">인원을 선택해주세요.</p>
          </div>

          {/* skill */}
          <div className="input-box">
            <div className="input-label input-label--require">
              <SettingsOutlinedIcon/>
              <p className="blind">주요기술</p>
            </div>

            <div className="input-check">
              <span>
                <input type="checkbox" id="html" name="skillTag" value="html" className="input-check__item input-check__item--html"/>              
                <label htmlFor="html">HTML</label>
              </span>
              
              <span>
                <input type="checkbox" id="css" name="skillTag" value="css" className="input-check__item input-check__item--css"/>              
                <label htmlFor="css">CSS</label>
              </span>

              <span className="">
                <input type="checkbox" id="scss" name="skillTag" value="scss" className="input-check__item input-check__item--scss"/>              
                <label htmlFor="scss">SCSS</label>
              </span>              
              
              <span className="">
                <input type="checkbox" id="javascript" name="skillTag" value="javascript" className="input-check__item input-check__item--javascript"/>            
                <label htmlFor="javascript">JavaScript</label>
              </span>

              <span className="">
                <input type="checkbox" id="react" name="skillTag" value="react" className="input-check__item input-check__item--react"/>              
                <label htmlFor="react">React</label>
              </span>

              <span className="">
                <input type="checkbox" id="vue" name="skillTag" value="vue" className="input-check__item input-check__item--vue"/>              
                <label htmlFor="vue">Vue</label>
              </span>              

              <span className="">
                <input type="checkbox" id="typescript" name="skillTag" value="typescript" className="input-check__item input-check__item--typescript"/>              
                <label htmlFor="typescript">TypeScript</label>
              </span>              
            </div>
            <p className="validity blind">주요기술을 선택해주세요.</p>
          </div>

          <div className="input-box">
            <label htmlFor="introduce" className="input-label input-label--require">
              <CreateOutlinedIcon/>
              <p className="blind">소개글</p>
            </label>
            <textarea className="input-textarea" id="introduce" name="introduce" cols={10} maxLength={1000} required placeholder="소개글을 입력해주세요. (1,000자 작성 가능)"></textarea>
          </div>
          
          <div className="btn">
            <button type='submit' className="input-submit btn-un btn-bg">스터디 생성</button>
            {/* { study ? (
              <Link to="" className="btn-bg">스터디 생성</Link>
            ):(
              <Link to="" className="btn-bg">팀프로젝트 생성</Link>
            )} */}
          </div>
        </fieldset>
      </Form>
    </main>
  )
}

export default Creation