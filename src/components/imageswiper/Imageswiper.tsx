import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Imageswiper = () => {
  // Dummy image data
  const images = [
    '/building1.jpeg',
    '/house1.jpeg',
    '/house2.jpeg',
    '/building1.jpeg',
    '/house1.jpeg',
    '/house2.jpeg',
    '/house1.jpeg',
    '/house1.jpeg',
    '/house2.jpeg',
    '/house1.jpeg',
    // Add more image paths as needed
  ];

  return (
    <div className='container'>
      <h1 className='heading'>Flower Gallery</h1>
      <Swiper
        // Install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={4}
        effect='coverflow'
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Imageswiper;
