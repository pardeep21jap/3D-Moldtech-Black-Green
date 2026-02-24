import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import printing1 from "../assets/3dprinted1.webp";
import printing2 from "../assets/3dprinted2.webp";
import printing3 from "../assets/3dprinted3.webp";
import printing4 from "../assets/3dprinted4.webp";
import printing5 from "../assets/3dprinted5.webp";
import printing6 from "../assets/3dprinted6.webp";
import printing7 from "../assets/3dprinted7.webp";
import printing8 from "../assets/3dprinted8.webp";

import "./Coverflow.css"


function Printingcoverflow() {
  return (
    <div>
      <section id="cover-slider">
        <div className="container">
          <h3 className='inner-heading center-heading'>Printing Projects</h3>

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
              <img src={printing1} alt="3d printing Part 1" />
            </SwiperSlide>

            <SwiperSlide className="coverflowSlide">
              <img src={printing2} alt="3d printing Part 2" />
            </SwiperSlide>

            <SwiperSlide className="coverflowSlide">
              <img src={printing3} alt="3d printing Part 3" />
            </SwiperSlide>

            <SwiperSlide className="coverflowSlide">
              <img src={printing4} alt="3d printing Part 4" />
            </SwiperSlide>
 
            <SwiperSlide className="coverflowSlide">
              <img src={printing5} alt="3d printing Part 5" />
            </SwiperSlide>

            <SwiperSlide className="coverflowSlide">
              <img src={printing6} alt="3d printing Part 6" />
            </SwiperSlide>

            <SwiperSlide className="coverflowSlide">
              <img src={printing7} alt="3d printing Part 7" />
            </SwiperSlide>

            <SwiperSlide className="coverflowSlide">
              <img src={printing8} alt="3d printing Part 8" />
            </SwiperSlide>

            <SwiperSlide className="coverflowSlide">
              <img src={printing1} alt="3d printing Part 1" />
            </SwiperSlide>

            <SwiperSlide className="coverflowSlide">
              <img src={printing2} alt="3d printing Part 2" />
            </SwiperSlide>

            <SwiperSlide className="coverflowSlide">
              <img src={printing3} alt="3d printing Part 3" />
            </SwiperSlide>

            <SwiperSlide className="coverflowSlide">
              <img src={printing4} alt="3d printing Part 4" />
            </SwiperSlide>
 
            <SwiperSlide className="coverflowSlide">
              <img src={printing5} alt="3d printing Part 5" />
            </SwiperSlide>

            <SwiperSlide className="coverflowSlide">
              <img src={printing6} alt="3d printing Part 6" />
            </SwiperSlide>

            <SwiperSlide className="coverflowSlide">
              <img src={printing7} alt="3d printing Part 7" />
            </SwiperSlide>

            <SwiperSlide className="coverflowSlide">
              <img src={printing8} alt="3d printing Part 8" />
            </SwiperSlide>

          </Swiper>
        </div>
      </section>
    </div>
  )
}

export default Printingcoverflow
