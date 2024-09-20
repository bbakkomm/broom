// components
import ProfileCard from './components/ProfileCard';
import StudyCard from '../../components/common/studycard/CommonStudyCard';

// CSS style
import styles from '../../assets/scss/pages/profile/Profile.module.scss';

// DB
import userJson from '../../assets/data/userData.json';
import studyJson from '../../assets/data/studyData.json';


const Profile = () => {

  const imgPath = '/src/assets/img/profile/'

  const userData = userJson.result;
  const studyData = studyJson.result;

  const studyList = studyData.map((item, idx)=>{
    return (
      <StudyCard 
        idx={idx}
        title={item.title}
        thumb={item.thumb}
        date={item.date}
        time={item.time}
        place={item.place}
        price={item.price}
        minimumPerson={item.minimumPerson}
        maximumPerson={item.maximumPerson}
        skillTag={item.skillTag}
        complate={item.complate}
      />      
    )
  });

  return (
    <div className={styles.profile}>
      <div className={styles.container}>

        <ProfileCard 
          userImg={imgPath + userData[0].userImg} 
          userName={userData[0].userName} 
          userEmail={userData[0].userEmail} 
          skillTag={userData[0].skillTag} 
          like={userData[0].like} 
          studing={userData[0].studing} 
          complate={userData[0].complate} 
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

