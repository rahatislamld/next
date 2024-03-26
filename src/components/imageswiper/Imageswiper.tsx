import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

function App() {
  return (
    <div className='container'>
      <Swiper
        effect='coverflow'
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={5}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false, // optional, disables shadows
        }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className='swiper_container'
      >
        <SwiperSlide style={{ width: '410px' }}>
          <img src='./house1.jpeg' alt='slide_image' />
        </SwiperSlide>
        <SwiperSlide style={{ width: '410px' }}>
          <img src='./house2.jpeg' alt='slide_image' />
        </SwiperSlide>
        <SwiperSlide style={{ width: '410px' }}>
          <img src='./building1.jpeg' alt='slide_image' />
        </SwiperSlide>
        <SwiperSlide style={{ width: '410px' }}>
          <img src='./house1.jpeg' alt='slide_image' />
        </SwiperSlide>
        <SwiperSlide style={{ width: '410px' }}>
          <img src='./house1.jpeg' alt='slide_image' />
        </SwiperSlide>
        <SwiperSlide style={{ width: '410px' }}>
          <img src='./house1.jpeg' alt='slide_image' />
        </SwiperSlide>
        <SwiperSlide style={{ width: '410px' }}>
          <img src='./house1.jpeg' alt='slide_image' />
        </SwiperSlide>
      </Swiper>
      <div className='h-179 top-804 relative w-full bg-gradient-to-b from-blue-900 via-blue-900 to-blue-700'></div>

      <br />
      <br />
    </div>
  );
}

export default App;
