import { Link, Form, redirect, useNavigation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import FormRow from '../../components/FormRow';
import customFetch from '../../utils/customFetch.js';

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

  return (
    <main className="join">
      <h2 className="join__title">회원가입</h2>

      <Form method='post' className="form-box">
        <fieldset className="form-box__inner">
          <legend className="form-box__title">회원 가입</legend>

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
              <input type="radio" id="planner" name="work" value="planner" className="select-box__radio" />
              <label htmlFor="planner" className="select-box__text">기획</label>
            </div>

            <div className="select-box__btn">
              <input type="radio" id="designer" name="work" value="designer" className="select-box__radio" />
              <label htmlFor="designer" className="select-box__text">디자인</label>
            </div>

            <div className="select-box__btn">
              <input type="radio" id="developer" name="work" value="developer" className="select-box__radio" />
              <label htmlFor="developer" className="select-box__text">개발</label>
            </div>
          </div>

          {/* skill */}
          <p className="input-label">주요기술</p>
          <div className="select-box">
            <div className="select-box__btn">
              <input type="radio" id="figma" name="work" value="figma"  className="select-box__radio"/>
              <label htmlFor="figma" className="select-box__text">Figma</label>
            </div>

            <div className="select-box__btn">
              <input type="radio" id="html" name="work" value="html"  className="select-box__radio"/>
              <label htmlFor="html" className="select-box__text">HTML</label>
            </div>

            <div className="select-box__btn">
              <input type="radio" id="css" name="work" value="css"  className="select-box__radio"/>
              <label htmlFor="css" className="select-box__text">CSS</label>
            </div>

            <div className="select-box__btn">
              <input type="radio" id="SCSS" name="work" value="SCSS"  className="select-box__radio"/>
              <label htmlFor="SCSS" className="select-box__text">SCSS</label>
            </div>

            <div className="select-box__btn">
              <input type="radio" id="javaScript" name="work" value="javaScript" className="select-box__radio"/>
              <label htmlFor="javaScript" className="select-box__text">JavaScript</label>
            </div>
          </div>

          {/* reCAPTCHA */}
          {/* <div className="recaptcha">reCAPTCHA</div> */}
          <div className="btn">
            <button type='submit' className="input-submit btn-bg" disabled={isSubmitting}>저장 {isSubmitting?'...':''}</button>
          </div>
        </fieldset>
      </Form>
    </main>
  );
}

export default ProfileEdit