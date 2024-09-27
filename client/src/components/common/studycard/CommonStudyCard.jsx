// icon
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import AccessAlarmsRoundedIcon from "@mui/icons-material/AccessAlarmsRounded";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";

function StudyCard(
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
    imgSrc,
  }
) {

  return (
    <ul className="studycard" key={idx}>
      <li className="studycard__item">
        <div className="skill-tag">
          {
            complate
            ? (<span className="skill-tag--complate">완료</span>)
            : ''
          }
          {
            skillTag.includes('javascript')
            ? (<span className="skill-tag--javascript">JavaScript</span>)
            : ''
          }
          {
            skillTag.includes('typescript')
            ? (<span className="skill-tag--typescript">TypeScript</span>)
            : ''
          }
          {
            skillTag.includes('react')
            ? (<span className="skill-tag--react">React</span>)
            : ''
          }
          {
            skillTag.includes('dart')
            ? (<span className="skill-tag--dart">Dart</span>)
            : ''
          }
          {
            skillTag.includes('flutter')
            ? (<span className="skill-tag--flutter">Flutter</span>)
            : ''
          }
          {
            skillTag.includes('html')
            ? (<span className="skill-tag--html">HTML</span>)
            : ''
          }
          {
            skillTag.includes('css')
            ? (<span className="skill-tag--css">CSS</span>)
            : ''
          }
        </div>
        <div className="study-box">
          <h3 className="study-box__title">{title}</h3>
          <div className="study-box__content">
            <div className="study-box__image">
              <img src={imgSrc} alt={title + ' 모임 상세보기'} />
            </div>
            <ul className="study-box__list">
              <li className="study-box__item">
                <CalendarTodayRoundedIcon />
                <span className="study-box__desc">{date} ~</span>
              </li>
              <li className="study-box__item">
                <AccessAlarmsRoundedIcon />
                <span className="study-box__desc">{time}</span>
              </li>
              <li className="study-box__item">
                <PlaceOutlinedIcon />
                <span className="study-box__desc">{place}</span>
              </li>
              <li className="study-box__item">
                <PaymentsOutlinedIcon />
                <span className="study-box__desc">{price}</span>
              </li>
              <li className="study-box__item">
                <PeopleAltOutlinedIcon />
                <span className="study-box__desc">최소 {minimumPerson}명 ~ 최대 {maximumPerson}명</span>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  )
}

export default StudyCard