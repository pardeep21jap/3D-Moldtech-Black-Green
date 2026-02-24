import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import modelling from "../assets/3d-modelling.webp";

import prototyping1 from "../assets/prototype1.webp";
import prototyping2 from "../assets/prototype2.webp";
import prototyping3 from "../assets/prototype3.webp";
import prototyping4 from "../assets/prototype4.webp";
import prototyping5 from "../assets/prototype5.webp";
import prototyping6 from "../assets/prototype6.webp";
import prototyping7 from "../assets/prototype7.webp";
import prototyping8 from "../assets/prototype8.webp";

import "./Coverflow.css"


const CoverflowSlider = () => {
  return (
    <section id="cover-slider">
      <div className="container">
        <h3 className='inner-heading center-heading'>Low Volume Injection Molding Projects</h3>

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
            <img src={prototyping1} alt="prototype1" />
          </SwiperSlide>
          
          <SwiperSlide className="coverflowSlide">
            <img src={prototyping2} alt="prototype2" />
          </SwiperSlide>

          <SwiperSlide className="coverflowSlide">
            <img src={prototyping3} alt="prototype3" />
          </SwiperSlide>

          <SwiperSlide className="coverflowSlide">
            <img src={prototyping4} alt="prototype4" />
          </SwiperSlide>

          <SwiperSlide className="coverflowSlide">
            <img src={prototyping5} alt="prototype5" />
          </SwiperSlide>
          <SwiperSlide className="coverflowSlide">
            <img src={prototyping6} alt="prototype6" />
          </SwiperSlide>

          <SwiperSlide className="coverflowSlide">
            <img src={prototyping7} alt="prototype7" />
          </SwiperSlide>

          <SwiperSlide className="coverflowSlide">
            <img src={prototyping8} alt="prototype8" />
          </SwiperSlide>
          
          <SwiperSlide className="coverflowSlide">
            <img src={prototyping1} alt="prototype1" />
          </SwiperSlide>
          
          <SwiperSlide className="coverflowSlide">
            <img src={prototyping2} alt="prototype2" />
          </SwiperSlide>

          <SwiperSlide className="coverflowSlide">
            <img src={prototyping3} alt="prototype3" />
          </SwiperSlide>

          <SwiperSlide className="coverflowSlide">
            <img src={prototyping4} alt="prototype4" />
          </SwiperSlide>

          <SwiperSlide className="coverflowSlide">
            <img src={prototyping5} alt="prototype5" />
          </SwiperSlide>
          <SwiperSlide className="coverflowSlide">
            <img src={prototyping6} alt="prototype6" />
          </SwiperSlide>

          <SwiperSlide className="coverflowSlide">
            <img src={prototyping7} alt="prototype7" />
          </SwiperSlide>

          <SwiperSlide className="coverflowSlide">
            <img src={prototyping8} alt="prototype8" />
          </SwiperSlide>

        </Swiper>
      </div>
    </section>


  );
};

export default CoverflowSlider;
