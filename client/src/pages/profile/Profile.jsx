import { redirect, useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

// components
import ProfileCard from './components/ProfileCard';
import StudyCard from '../../components/common/studycard/CommonStudyCard';

// CSS style
import styles from '../../assets/scss/pages/profile/Profile.module.scss';

// DB
// import userJson from '../../assets/data/userData.json';
import studyJson from '../../assets/data/studyData.json';

import customFetch from '../../utils/customFetch.js';

export const loader = async ({ req }) => {
  try {
    const res = await customFetch.get('/users/current-user', req);
    return res.data;
  } catch (error) {
    console.log(error);
    return redirect('/');
  }
}

const Profile = () => {
  const loadData = useLoaderData();
  const { user } = loadData;
  console.log(user);

  const navigate = useNavigate();
  const logOutHandler = async () => {
    navigate('/');
    await customFetch.get('/auth/logout');
    toast.success('Log Out successful');
  }

  const imgPath = '/src/assets/img/profile/'

  // const userData = userJson.result;
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
          userImg={imgPath + user.thumb} 
          userName={user.name} 
          userEmail={user.email} 
          skillTag={user.skillTag} 
          like={user.like} 
          studing={user.study} 
          complate={user.complete} 
        />

        <div className={styles.groupBox}>
          <h3 className={styles.groupBox__title}>내가 신청한 모임</h3>          
          {studyList}
        </div>
      </div>
      <div className="btn rebottom">
        <button className="input-submit btn-un btn-bg" onClick={logOutHandler}>로그아웃</button>
      </div>
    </div>
  )
}

export default Profile

