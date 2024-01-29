import React, { useRef, useState } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        loop={true}
        speed={6000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <div className="swiper-wrapper">
        <SwiperSlide><Image src='/petimg/thina/thina3.png' alt="犬の写真" width={800} height={800}/></SwiperSlide>
        <SwiperSlide><Image src='/petimg/reus/reus1.png' alt="犬の写真" width={800} height={800}/></SwiperSlide>
        <SwiperSlide><Image src='/petimg/thina/thina5.png' alt="犬の写真" width={800} height={800}/></SwiperSlide>
        <SwiperSlide><Image src='/petimg/reus/reus4.png' alt="犬の写真" width={800} height={800}/></SwiperSlide>
        <SwiperSlide><Image src='/petimg/thina/thina6.png' alt="犬の写真" width={800} height={800}/></SwiperSlide>
        <SwiperSlide><Image src='/petimg/reus/reus3.png' alt="犬の写真" width={800} height={800}/></SwiperSlide>
        </div>
      </Swiper>
    </>
  );
}
