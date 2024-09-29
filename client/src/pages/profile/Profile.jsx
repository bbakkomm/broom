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
    const userId = res.data.user._id;
    
    const res1 = await customFetch.get(`/study/member-all/${userId}`, req);
    
    return [res.data, res1.data];
  } catch (error) {
    console.log(error);
    // return redirect('/');

  }
}

const Profile = () => {
  const loadData = useLoaderData();
  const { user } = loadData[0];
  const { studys } = loadData[1];
  console.log(studys);

  const navigate = useNavigate();
  const domain = [window.location.protocol, window.location.host].join('//') + '/';

  const logOutHandler = async (e) => {
    e.preventDefault();
    if (window.confirm('정말 로그아웃하시겠습니까?')) {
      await customFetch.get('/auth/logout');
      toast.success('Log Out successful');
      navigate('/');
    }
  }

  const studyList = studys.map((item, idx)=>{
    return (
      <StudyCard 
        key={`study_${idx}`}
        objId={item._id}
        idx={idx}
        title={item.title}
        thumb={item.thumb.path}
        startDate={item.startDate}
				endDate={item.endDate}
        time={item.time}
        place={item.place}
        price={item.price}
        minimumPerson={item.minimumPerson}
        maximumPerson={item.maximumPerson}
        skillTag={item.skillTag}
        complete={item.complete}
        imgSrc={domain + item.thumb.path}
        status={item.status}
        name={item.name}
        location={item.loaction}
        cost={item.cost}
        participants={item.participants}
      />      
    )
  });

  return (
    <div className={styles.profile}>
      <div className={styles.container}>

        <ProfileCard 
          userImg={domain + user.thumb.path} 
          userName={user.name} 
          userEmail={user.email} 
          skillTag={user.skillTag} 
          like={user.like} 
          studing={studys.length} 
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

