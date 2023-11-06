import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './slider.css'
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import image5 from '../../assets/image5.png';

import { EffectCoverflow, Pagination } from 'swiper/modules';

const Slider = () => {
  return (
    <div className='slider__general'>
        <header className='slider-container__header'>
                <h3>ALGUNAS DE NUESTRAS AVENTURAS</h3>
        </header>
        <div className="slider-container">
            
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            spaceBetween={10} 
            coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <p>Ejemplo</p>
            <div className="image-container">
                <img src={image1} alt='imagen correr' />
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <p>Ejemplo</p>
            <div className="image-container">
                <img src={image2} alt='imagen correr' />
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <p>Ejemplo</p>
            <div className="image-container">
                <img src={image3} alt='imagen correr' />
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <p>Ejemplo</p>
            <div className="image-container">
                <img src={image4} alt='imagen correr' />
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <p>Ejemplo</p>f
            <div className="image-container">
                <img src={image5} alt='imagen correr' />
            </div>
            </SwiperSlide>
        </Swiper>
        </div>
    </div>
  );
}

export default Slider;
