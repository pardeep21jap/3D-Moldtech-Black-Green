import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import modelling from "../assets/3d-modelling.png";
import modelling2 from "../assets/3d-modelling2.webp";
import modelling3 from "../assets/3d-modelling3.webp";
import modelling4 from "../assets/3d-modelling4.webp";

import prototyping from "../assets/prototyping.png";
import printing from "../assets/3d-printing.png";
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
            <img src={modelling} alt="3D Modelling" />
          </SwiperSlide>

          <SwiperSlide className="coverflowSlide">
            <img src={printing} alt="3d printing" />
          </SwiperSlide>

          <SwiperSlide className="coverflowSlide">
            <img src={prototyping} alt="prototyping" />
          </SwiperSlide>
          <SwiperSlide className="coverflowSlide">
            <img src={modelling2} alt="3D Modelling" />
          </SwiperSlide>

          <SwiperSlide className="coverflowSlide">
            <img src={modelling3} alt="3D Modelling" />
          </SwiperSlide>

          <SwiperSlide className="coverflowSlide">
            <img src={modelling4} alt="3D Modelling" />
          </SwiperSlide>


          <SwiperSlide className="coverflowSlide">
            <img src={modelling2} alt="3D Modelling" />
          </SwiperSlide>

          <SwiperSlide className="coverflowSlide">
            <img src={modelling3} alt="3D Modelling" />
          </SwiperSlide>

          <SwiperSlide className="coverflowSlide">
            <img src={modelling4} alt="3D Modelling" />
          </SwiperSlide>

          <SwiperSlide className="coverflowSlide">
            <img src={printing} alt="3d printing" />
          </SwiperSlide>

          <SwiperSlide className="coverflowSlide">
            <img src={prototyping} alt="prototyping" />
          </SwiperSlide>
          <SwiperSlide className="coverflowSlide">
            <img src={modelling} alt="3D Modelling" />
          </SwiperSlide>

          <SwiperSlide className="coverflowSlide">
            <img src={modelling2} alt="3D Modelling" />
          </SwiperSlide>

          <SwiperSlide className="coverflowSlide">
            <img src={modelling3} alt="3D Modelling" />
          </SwiperSlide>

          <SwiperSlide className="coverflowSlide">
            <img src={modelling4} alt="3D Modelling" />
          </SwiperSlide>

        </Swiper>
      </div>
    </section>
  )
}

export default Modecoverflow
