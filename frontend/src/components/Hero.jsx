import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { assets } from '../assets/frontend_assets/assets';

const Hero = () => {
  const slides = [
    {
      img: assets.hero_img,
    },
    {
      img: assets.hero_img2,
    },
    {
      img: assets.hero_img3,
    },
    {
      img: assets.hero_img4,
    },
    {
      img: assets.hero_img5,
    },
    {
      img: assets.hero_img,
    },
  ];

  return (
    <div className="w-full mt-[80px] rounded-[10px] shadow-2xl h-[400px] relative overflow-hidden">
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        effect="fade"
        modules={[Autoplay, EffectFade]}
        slidesPerView={1}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={slide.img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-[10px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
