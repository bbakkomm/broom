import { useEffect, useState } from 'react';
import { redirect, useLoaderData, useNavigate } from 'react-router-dom';


// api
import customFetch from "../utils/customFetch.js";

// Swiper
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// DB
import studyJson from '../assets/data/studyData.json';
import HomeStudyCard from '../components/common/studycard/CommonHomeStudyCard';

const datttId = '66f18c4a2a30944fef4c41e2';

export const loader = async ({ req }) => {
    try {
      const res = await customFetch.get('/users/current-user', req);
      // const res = await customFetch.get(`/study/${datttId}`, req);
      return res.data;
    } catch (error) {
      console.log(error);
      return redirect('/');
    }
  }



function Home() {

  const loadData = useLoaderData();
  const { user } = loadData;
  console.log(user);

  const studyData = studyJson.result;
  const [studyCard, setStudyCard] = useState(studyData);
  const [search, setSearch] = useState('');

  const studyList = studyCard.map((item, idx)=>{
    return (
      <HomeStudyCard 
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


  useEffect(()=>{
    const filter = studyData.filter((item)=>{
      return item.title.toLowerCase().includes(search.toLowerCase())
    })
    setStudyCard(filter);
  }, [search])

  const titleChange = (e)=>{
    setSearch(e.target.value)
  }

  return (
	<div className="broom">
    <div className="kv">
      <Swiper
        style={{
          width: "360px",
          height: "202px",
          position: "relative",
        }}
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className='banner-box'>
            <img src="src/assets/img/home/banner_01.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='banner-box'>
            <img src="src/assets/img/home/banner_02.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='banner-box'>
            <img src="src/assets/img/home/banner_03.jpg" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="study-box">
        <h3 className="study-box__title">최근 등록된 스터디</h3>
        <input type="text" value={search} placeholder="검색어를 입력하세요" onChange={titleChange} />
        <div className="study-box__cont">
          {studyList}
        </div>
      </div>

      
    </div>
  </div>
  )
}

export default Home