import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import modelling1 from "../assets/3d-modelling1.webp";
import modelling2 from "../assets/3d-modelling2.webp";
import modelling3 from "../assets/3d-modelling3.webp";
import modelling4 from "../assets/3d-modelling4.webp";
import modelling5 from "../assets/3d-modelling5.webp";
import modelling6 from "../assets/3d-modelling6.webp";
import modelling7 from "../assets/3d-modelling7.webp";
import modelling8 from "../assets/3d-modelling8.webp";


import "./Coverflow.css"

function Modecoverflow() {
  return (
    <section id="cover-slider">
      <div className="container">
        <h3 className='inner-heading center-heading'>Modelling Projects</h3>

        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          autoplay={{
            delay: 2500,              // time between slides (ms)
            disableOnInteraction: false,
            pauseOnMouseEnter: true,  // optional
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            autoplay: true,
          }}
          loop={true}

          modules={[EffectCoverflow, Autoplay]}
          className="coverflowSwiper"
        >

          <SwiperSlide className="coverflowSlide">
            <img src={modelling1} alt="3D Modelling Part 1" />
          </SwiperSlide>

          <SwiperSlide className="coverflowSlide">
            <img src={modelling2} alt="3D Modelling Part 2" />
          </SwiperSlide>

          <SwiperSlide className="coverflowSlide">
            <img src={modelling3} alt="3D Modelling Part 3" />
          </SwiperSlide>

          <SwiperSlide className="coverflowSlide">
            <img src={modelling4} alt="3D Modelling Part 4" />
          </SwiperSlide>
          <SwiperSlide className="coverflowSlide">
            <img src={modelling5} alt="3D Modelling Part 5" />
          </SwiperSlide>

          <SwiperSlide className="coverflowSlide">
            <img src={modelling6} alt="3D Modelling Part 6" />
          </SwiperSlide>

          <SwiperSlide className="coverflowSlide">
            <img src={modelling7} alt="3D Modelling Part 7" />
          </SwiperSlide>

          <SwiperSlide className="coverflowSlide">
            <img src={modelling8} alt="3D Modelling Part 8" />
          </SwiperSlide>

          <SwiperSlide className="coverflowSlide">
            <img src={modelling1} alt="3D Modelling Part 1" />
          </SwiperSlide>

          <SwiperSlide className="coverflowSlide">
            <img src={modelling2} alt="3D Modelling Part 2" />
          </SwiperSlide>

          <SwiperSlide className="coverflowSlide">
            <img src={modelling3} alt="3D Modelling Part 3" />
          </SwiperSlide>

          <SwiperSlide className="coverflowSlide">
            <img src={modelling4} alt="3D Modelling Part 4" />
          </SwiperSlide>
          <SwiperSlide className="coverflowSlide">
            <img src={modelling5} alt="3D Modelling Part 5" />
          </SwiperSlide>

          <SwiperSlide className="coverflowSlide">
            <img src={modelling6} alt="3D Modelling Part 6" />
          </SwiperSlide>

          <SwiperSlide className="coverflowSlide">
            <img src={modelling7} alt="3D Modelling Part 7" />
          </SwiperSlide>

          <SwiperSlide className="coverflowSlide">
            <img src={modelling8} alt="3D Modelling Part 8" />
          </SwiperSlide>

        </Swiper>
      </div>
    </section>
  )
}

export default Modecoverflow
