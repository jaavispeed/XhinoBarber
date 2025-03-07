import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import barberlogo from '../../assets/barberlogo.png'
import "./Carousel.css";  // Importa el archivo CSS

export const Carousel = () => {

    const images = [
        barberlogo,
        barberlogo,
        barberlogo
      ];

    return (

        <Swiper 
            modules={[Navigation, Pagination]}
            navigation 
            pagination 
            loop={true}
            className="mySwiper"
            >
            {images.map((img, index) => (
        <SwiperSlide key={index} >
          <img 
            src={img} 
            alt={`Slide ${index}`} 
        />
        </SwiperSlide>
      ))}
    </Swiper>
    )
}

export default Carousel;