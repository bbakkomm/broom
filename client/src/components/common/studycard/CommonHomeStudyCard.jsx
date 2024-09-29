import { redirect, useNavigate } from 'react-router-dom';

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
    complate,
  }
) {
  const navigate = useNavigate();

  const listClickHandler = (e) => {
    e.preventDefault();
    const targetUl = e.target.closest('.studyCard');
    console.log(targetUl);
    sessionStorage.setItem('singleStudyValue', targetUl.getAttribute('data-prod'));
    navigate('/study/studydetail');
  }

  const domain = [window.location.protocol, window.location.host].join('//') + '/';

  return (
    <ul className="studyCard" key={idx} data-prod={objId} onClick={listClickHandler}>
      <li className="studyCard__item">
        <div className="studyBox">
          <div className="studyBox__content">
            <div className="studyBox__image">
              <img src={domain + thumb} alt={title + " 모임 상세보기"} />
            </div>
            <div className="studyBox__text">
              <h3 className="studyBox__title">{title}</h3>
              <div className="skill-tag">
                {complate ? <span className="skill-tag--complate">완료</span> : ""}
                {skillTag.includes("javascript") ? (
                  <span className="skill-tag--javascript">JavaScript</span>
                ) : (
                  ""
                )}
                {skillTag.includes("typescript") ? (
                  <span className="skill-tag--typescript">TypeScript</span>
                ) : (
                  ""
                )}
                {skillTag.includes("react") ? (
                  <span className="skill-tag--react">React</span>
                ) : (
                  ""
                )}
                {skillTag.includes("dart") ? (
                  <span className="skill-tag--dart">Dart</span>
                ) : (
                  ""
                )}
                {skillTag.includes("flutter") ? (
                  <span className="skill-tag--flutter">Flutter</span>
                ) : (
                  ""
                )}
                {skillTag.includes("html") ? (
                  <span className="skill-tag--html">HTML</span>
                ) : (
                  ""
                )}
                {skillTag.includes("css") ? (
                  <span className="skill-tag--css">CSS</span>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
}

export default HomeStudyCard