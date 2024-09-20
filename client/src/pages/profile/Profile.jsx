import jsonData from '../../assets/data/userData.json';
import studyJsonData from '../../assets/data/studyData.json';

// components
import ProfileCard from './components/ProfileCard';

// CSS style
import styles from '../../assets/scss/pages/profile/profile.module.scss';


const Profile = () => {

  const imgPath = '/src/assets/img/profile/'

  const userData = jsonData.result;
  const studyData = studyJsonData.result;

  const studyList = studyData.map((item, idx)=>{
    return (
      <ul className={styles.groupBox__list} key={idx}>
        <li className={styles.groupBox__list__item}>
          <div className={styles.skillTag}>
            <span className={styles.skillTag__complate}>완료</span>
            <span className={styles.skillTag__javascript}>JavaScript</span>
            <span className={styles.skillTag__typescript}>TypeScript</span>
            <span className={styles.skillTag__react}>React</span>
          </div>
          <div className={styles.studyBox}>
            <h3 className={styles.studyBox__title}>{item.title}</h3>
            <div className={styles.studyBox__content}>
              <div className={styles.studyBox__image}>
                <img src="/src/assets/img/profile/study_img_02.png" alt="" />
              </div>
              <ul className={styles.studyBox__list}>
                <li className={styles.studyBox__list__item}>
                  {/* 달력아이콘 */}
                  <span className={styles.studyBox__list__desc}>{item.date} ~</span>
                </li>
                <li className={styles.studyBox__list__item}>
                  {/* 시계아이콘 */}
                  <span className={styles.studyBox__list__desc}>{item.time}</span>
                </li>
                <li className={styles.studyBox__list__item}>
                  {/* 지도아이콘 */}
                  <span className={styles.studyBox__list__desc}>{item.place}</span>
                </li>
                <li className={styles.studyBox__list__item}>
                  {/* 지폐아이콘 */}
                  <span className={styles.studyBox__list__desc}>{item.price}</span>
                </li>
                <li className={styles.studyBox__list__item}>
                  {/* 사람아이콘 */}
                  <span className={styles.studyBox__list__desc}>최소 {item.minimumPerson}명 ~ 최대 {item.maximumPerson}명</span>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    )
  });

  return (
    <div className={styles.profile}>
      <div className={styles.container}>

        <ProfileCard 
          userImg={imgPath + userData[0].userImg} 
          userName={userData[0].userName} 
          userEmail={userData[0].userEmail} 
        />

        <div className={styles.groupBox}>
          <h3 className={styles.groupBox__title}>내가 신청한 모임</h3>          
          {studyList}
        </div>
      </div>
    </div>
  )
}

export default Profile

