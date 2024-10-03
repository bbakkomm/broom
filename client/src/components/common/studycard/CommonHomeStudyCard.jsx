import { useState } from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import CircularSize from '../../CircularSize';

function HomeStudyCard(
  { 
    idx,
    objId, 
    title, 
    thumb,
    date, 
    time, 
    place, 
    price, 
    minimumPerson, 
    maximumPerson,
    skillTag,
    complete,
  }
) {
  const navigate = useNavigate();
  const [loading, setloading] = useState('');
  const isSubmitting = loading === 'submitting';

  const listClickHandler = async (e) => {
    e.preventDefault();

    try {
      setloading('submitting');
      // const res = await customFetch.get(`/study/${objId}`);
      const targetUl = e.target.closest('.studyCard');
      sessionStorage.setItem('singleStudyValue', targetUl.getAttribute('data-prod'));
      navigate('/study/studydetail');
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    } finally {
      setloading('');
    }
    
  }

  return (
    <ul className="studyCard" key={idx} data-prod={objId} onClick={listClickHandler}>
      {isSubmitting ? (<CircularSize />) : ''}
      <li className="studyCard__item">
        <div className="studyBox">
          <div className="studyBox__content">
            <div className="studyBox__image">
              <img src={thumb} alt={title + " 모임 상세보기"} />
            </div>
            <div className="studyBox__text">
              <h3 className="studyBox__title">{title}</h3>
              <div className="skill-tag">
                {complete ? <span className="skill-tag__complate">완료</span> : (<span className="skill-tag__ing">모집중</span>)}
                {
                    skillTag.includes('javascript')
                    ? (<span className="skill-tag__javascript">JavaScript</span>)
                    : ''
                }
                {
                    skillTag.includes('react')
                    ? (<span className="skill-tag__react">React</span>)
                    : ''
                }
                {
                    skillTag.includes('vue')
                    ? (<span className="skill-tag__vue">Vue</span>)
                    : ''
                }
                {
                    skillTag.includes('typescript')
                    ? (<span className="skill-tag__typescript">TypeScript</span>)
                    : ''
                }
                {
                    skillTag.includes('dart')
                    ? (<span className="skill-tag__dart">Dart</span>)
                    : ''
                }
                {
                    skillTag.includes('flutter')
                    ? (<span className="skill-tag__flutter">Flutter</span>)
                    : ''
                }
                {
                    skillTag.includes('html')
                    ? (<span className="skill-tag__html">HTML</span>)
                    : ''
                }
                {
                    skillTag.includes('css')
                    ? (<span className="skill-tag__css">CSS</span>)
                    : ''
                }
                {
                    skillTag.includes('scss')
                    ? (<span className="skill-tag__scss">SCSS</span>)
                    : ''
                }
                {
                    skillTag.includes('figma')
                    ? (<span className="skill-tag__figma">Figma</span>)
                    : ''
                }
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
}

export default HomeStudyCard