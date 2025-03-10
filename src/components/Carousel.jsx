// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay } from 'swiper/modules';


import "../css/Carousel.css";
import Corte1 from "../assets/cortesdepelo/Corte1.jpeg";
import Corte2 from "../assets/cortesdepelo/Corte2.jpeg";
import Corte3 from "../assets/cortesdepelo/Corte3.jpeg";
import Corte4 from "../assets/cortesdepelo/Corte4.jpeg";


export const Carousel = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 2500, 
          disableOnInteraction: false, 
        }}
        modules={[ Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={Corte1} alt="Corte 1" /></SwiperSlide>
        <SwiperSlide><img src={Corte2} alt="Corte 2" /></SwiperSlide>
        <SwiperSlide><img src={Corte3} alt="Corte 3" /></SwiperSlide>
        <SwiperSlide><img src={Corte4} alt="Corte 4" /></SwiperSlide>
      </Swiper>
    </>
  );
}

export default Carousel;
