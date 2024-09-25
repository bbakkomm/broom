import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// DB
import studyJson from '../assets/data/studyData.json';
import HomeStudyCard from '../components/common/studycard/CommonHomeStudyCard';


function Home() {

  const studyData = studyJson.result;


  const studyList = studyData.map((item, idx)=>{
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
        <div className="study-box__cont">
          {studyList}
        </div>
      </div>

      
    </div>
  </div>
  )
}

export default Home