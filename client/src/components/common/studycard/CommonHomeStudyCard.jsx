// css
import styles from './CommonHomeStudyCard.module.scss';

// icon
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import AccessAlarmsRoundedIcon from "@mui/icons-material/AccessAlarmsRounded";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";

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

  const imgPath = '/src/assets/img/studycard/'

  return (
    <ul className={styles.studyCard} key={idx}>
      <li className={styles.studyCard__item}>
        
        <div className={styles.studyBox}>
          <div className={styles.studyBox__content}>
            <div className={styles.studyBox__image}>
              <img src={imgPath + thumb} alt={title + ' 모임 상세보기'} />
            </div>
            <h3 className={styles.studyBox__title}>{title}</h3>

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
        <div className={styles.skillTag}>
          {
            complate
            ? (<span className={styles.skillTag__complate}>완료</span>)
            : ''
          }
          {
            skillTag.includes('javascript')
            ? (<span className={styles.skillTag__javascript}>JavaScript</span>)
            : ''
          }
          {
            skillTag.includes('typescript')
            ? (<span className={styles.skillTag__typescript}>TypeScript</span>)
            : ''
          }
          {
            skillTag.includes('react')
            ? (<span className={styles.skillTag__react}>React</span>)
            : ''
          }
          {
            skillTag.includes('dart')
            ? (<span className={styles.skillTag__dart}>Dart</span>)
            : ''
          }
          {
            skillTag.includes('flutter')
            ? (<span className={styles.skillTag__flutter}>Flutter</span>)
            : ''
          }
          {
            skillTag.includes('html')
            ? (<span className={styles.skillTag__html}>HTML</span>)
            : ''
          }
          {
            skillTag.includes('css')
            ? (<span className={styles.skillTag__css}>CSS</span>)
            : ''
          }
        </div>
      </li>
    </ul>
  )
}

export default HomeStudyCard