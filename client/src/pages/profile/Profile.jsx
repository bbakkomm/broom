import { redirect, useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

// components
import ProfileCard from './components/ProfileCard';
import StudyCard from '../../components/common/studycard/CommonStudyCard';

// CSS style
import styles from '../../assets/scss/pages/profile/profile.module.scss';

// DB
// import userJson from '../../assets/data/userData.json';
// import studyJson from '../../assets/data/studyData.json';

import customFetch from '../../utils/customFetch.js';

export const loader = async ({ req }) => {
  try {
    const res = await customFetch.get('/users/current-user', req);
    const userId = res.data.user._id;
    
    const res1 = await customFetch.get(`/study/like-all/${userId}`, req);

    const res2 = await customFetch.get(`/study/member-all/${userId}`, req);
    
    return [res.data, res1.data, res2.data];
  } catch (error) {
    console.log(error);
    // return redirect('/');
  }
}

const Profile = () => {
  const loadData = useLoaderData();
  const user = loadData[0].user;
  const likes = loadData[1].studys;
  const studys = loadData[2].studys;
  // console.log(likes);

  const navigate = useNavigate();

  const logOutHandler = async (e) => {
    e.preventDefault();
    if (window.confirm('정말 로그아웃하시겠습니까?')) {
      await customFetch.get('/auth/logout');
      toast.success('Log Out successful');
      navigate('/');
    }
  }

  const likeList = likes.map((item, idx) => {
    return (
      <StudyCard 
        studyType={'like'}
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
        imgSrc={item.thumb.path}
        status={item.status}
        name={item.name}
        location={item.loaction}
        cost={item.cost}
        like={item.like}
      />      
    )
  });

  const studyList = studys.map((item, idx)=>{
    return (
      <StudyCard 
        studyType={'study'}
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
        imgSrc={item.thumb.path}
        status={item.status}
        name={item.name}
        location={item.loaction}
        cost={item.cost}
        like={item.like}
      />      
    )
  });

  return (
    <div className={styles.profile}>
      <div className={styles.container}>

        <ProfileCard 
          userImg={user.thumb.path} 
          userName={user.name} 
          userEmail={user.email} 
          skillTag={user.skillTag} 
          like={likes.length} 
          studing={studys.length} 
          complate={user.complete} 
        />

        <div className={styles.groupBox}>
          <h3 className={styles.groupBox__title}>내가 찜한 모임</h3>          
          {likeList}
        </div>

        <div className={styles.groupBox}>
          <h3 className={styles.groupBox__title}>내가 활동중인 모임</h3>          
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

