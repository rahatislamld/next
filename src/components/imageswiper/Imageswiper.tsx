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
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={5}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className='swiper_container'
      >
        <SwiperSlide>
          <img src='./house1.jpeg' alt='slide_image' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='./house2.jpeg' alt='slide_image' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='./building1.jpeg' alt='slide_image' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='./house1.jpeg' alt='slide_image' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='./house1.jpeg' alt='slide_image' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='./house1.jpeg' alt='slide_image' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='./house1.jpeg' alt='slide_image' />
        </SwiperSlide>
      </Swiper>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
