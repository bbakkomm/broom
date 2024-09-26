import { Link, Form, redirect, useNavigation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useRef } from 'react';

import FormRow from '../../components/FormRow';
import customFetch from '../../utils/customFetch.js';

// CSS style
import styles from '../../assets/scss/pages/profile/ProfileEdit.module.scss';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  
  try {
    await customFetch.post('/auth/register', data);
    toast.success('register successful');
    return redirect('/joinsuccess');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const ProfileEdit = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const textarea = useRef();
  const handleResizeHeight = () => {
    textarea.current.style.height = "auto"; // 높이 초기화
    textarea.current.style.height = textarea.current.scrollHeight + "px";
  };



  return (
    <main className={styles.profileEdit}>

      <Form method='post' className="form-box">
        <fieldset className="form-box__inner">
          <legend className="form-box__title">프로필 수정</legend>

          {/* 이미지 수정 */}
          <label htmlFor="profileEditImg" className={styles.profileEdit__img}>
            <img src="src/assets/img/profile/profile_01.png" alt="" />
          </label>
          <input type="file" id="profileEditImg" name="profileImg" placeholder="이미지 수정" accept="image/*" className="input-write blind"/>

          {/* id */}
          <FormRow type='uid' name="uid" labelText="아이디" placeholder="아이디"/>

          {/* nickname */}
          <FormRow type='name' name="name" labelText="닉네임" placeholder="닉네임"/>

          {/* email */}
          <FormRow type='email' name="email" labelText="이메일" placeholder="이메일"/>

          {/* pwd */}
          <FormRow type='password' name="password" labelText="비밀번호" placeholder="비밀번호"/>
          
          {/* pwd conf */}
          <label htmlFor="passconfirm" className="input-label hidden">비밀번호 확인</label>
          <input type="password" id="passconfirm" name="passconfirm" placeholder="비밀번호 확인" className="input-write"/>

          {/* work */}
          <p className="input-label">희망직무</p>
          <div className="select-box">
            <div className="select-box__btn">
              <input type="radio" id="planner" name="work" value="planner" className="select-box__radio select-box--planner" />
              <label htmlFor="planner" className="select-box__text">기획</label>
            </div>

            <div className="select-box__btn">
              <input type="radio" id="designer" name="work" value="designer" className="select-box__radio select-box--designer" />
              <label htmlFor="designer" className="select-box__text">디자인</label>
            </div>

            <div className="select-box__btn">
              <input type="radio" id="developer" name="work" value="developer" className="select-box__radio select-box--developer" />
              <label htmlFor="developer" className="select-box__text">개발</label>
            </div>
          </div>

          {/* skill */}
          <p className="input-label">주요기술</p>
          <div className="select-box">
            <div className="select-box__btn">
              <input type="checkbox" id="figma" name="skillTag" value="figma" className="select-box__radio select-box--figma"/>
              <label htmlFor="figma" className="select-box__text">Figma</label>
            </div>

            <div className="select-box__btn">
              <input type="checkbox" id="html" name="skillTag" value="html" className="select-box__radio select-box--html"/>
              <label htmlFor="html" className="select-box__text">HTML</label>
            </div>

            <div className="select-box__btn">
              <input type="checkbox" id="css" name="skillTag" value="css" className="select-box__radio select-box--css"/>
              <label htmlFor="css" className="select-box__text">CSS</label>
            </div>

            <div className="select-box__btn">
              <input type="checkbox" id="SCSS" name="skillTag" value="scss" className="select-box__radio select-box--scss"/>
              <label htmlFor="SCSS" className="select-box__text">SCSS</label>
            </div>

            <div className="select-box__btn">
              <input type="checkbox" id="javaScript" name="skillTag" value="javascript" className="select-box__radio select-box--javascript"/>
              <label htmlFor="javaScript" className="select-box__text">JavaScript</label>
            </div>
          </div>

          <div className={styles.profileEdit__info}>
            <span className={styles.profileEdit__info__title}>소개글</span>
            <textarea
              ref={textarea}
              onInput={handleResizeHeight}
              rows={1} 
              className={styles.profileEdit__info__textarea} />
          </div>

          <div className={styles.profileEdit__btn}>
            <button type='submit' className="input-submit btn-bg" disabled={isSubmitting}>저장 {isSubmitting?'...':''}</button>
          </div>
        </fieldset>
      </Form>
    </main>
  );
}

export default ProfileEdit