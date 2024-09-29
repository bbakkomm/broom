// css
import styles from './CommonHomeStudyCard.module.scss';

function HomeStudyCard(
  { 
    idx, 
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

  const imgPath = 'http://localhost:5173/'

  return (
    <ul className="studyCard" key={idx}>
      <li className="studyCard__item">
        <div className="studyBox">
          <div className="studyBox__content">
            <div className="studyBox__image">
              <img src={imgPath + thumb} alt={title + " 모임 상세보기"} />
            </div>
            <h3 className="studyBox__title">{title}</h3>

            {/* <ul className={styles.studyBox__list}>
              <li className={styles.studyBox__list__item}>
                <CalendarTodayRoundedIcon />
                <span className={styles.studyBox__list__desc}>{date} ~</span>
              </li>
              <li className={styles.studyBox__list__item}>
                <AccessAlarmsRoundedIcon />
                <span className={styles.studyBox__list__desc}>{time}</span>
              </li>
              <li className={styles.studyBox__list__item}>
                <PlaceOutlinedIcon />
                <span className={styles.studyBox__list__desc}>{place}</span>
              </li>
              <li className={styles.studyBox__list__item}>
                <PaymentsOutlinedIcon />
                <span className={styles.studyBox__list__desc}>{price}</span>
              </li>
              <li className={styles.studyBox__list__item}>
                <PeopleAltOutlinedIcon />
                <span className={styles.studyBox__list__desc}>최소 {minimumPerson}명 ~ 최대 {maximumPerson}명</span>
              </li>
            </ul> */}
          </div>
        </div>
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
      </li>
    </ul>
  );
}

export default HomeStudyCard