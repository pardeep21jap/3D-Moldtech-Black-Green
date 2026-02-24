import React from 'react'
import "./Slider.css"
import { SwiperSlide, Swiper } from 'swiper/react'
import 'swiper/css';

import { Link } from "react-router-dom";
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css/pagination';

import "./Ribbon.css"

import greenicon from "../assets/greenicon.png";


function Ribbon() {
  return (
    <div>
      <section id='ribbon-slider'>
        <div className="container-fluid">
          <div className="outer-ribbon">
            <div className="inner-ribbon">
              <div className="main-ribbon-slider">

                <Swiper navigation={false} pagination={false} autoplay={{
                  // no stopping
                  delay: 0,               // no pause
                  disableOnInteraction: false,
                }} slidesPerView={'auto'} loop={true}
                  speed={5000}



                  spaceBetween={100}
                  modules={[Navigation, Pagination, Autoplay]} className="mySwiper">



                  <SwiperSlide className='ribbon-slider' style={{ width: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                    <div className="ribbon-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                      <img src={greenicon} alt="greenicon" style={{ margin: 0 }} />
                      <strong style={{ whiteSpace: 'nowrap' }}>3D Modeling</strong>
                    </div>


                  </SwiperSlide>
                  <SwiperSlide className='ribbon-slider' style={{ width: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>


                    <div className="ribbon-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                      <img src={greenicon} alt="greenicon" style={{ margin: 0 }} />
                      <strong style={{ whiteSpace: 'nowrap' }}>3D Printing</strong>
                    </div>

                  </SwiperSlide>
                  <SwiperSlide className='ribbon-slider' style={{ width: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>


                    <div className="ribbon-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                      <img src={greenicon} alt="greenicon" style={{ margin: 0 }} />
                      <strong style={{ whiteSpace: 'nowrap' }}>Prototyping</strong>
                    </div>

                  </SwiperSlide>

                  <SwiperSlide className='ribbon-slider' style={{ width: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>


                    <div className="ribbon-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                      <img src={greenicon} alt="greenicon" style={{ margin: 0 }} />
                      <strong style={{ whiteSpace: 'nowrap' }}>Low Volume Injection Molding</strong>
                    </div>

                  </SwiperSlide>

                  <SwiperSlide className='ribbon-slider' style={{ width: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>


                    <div className="ribbon-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                      <img src={greenicon} alt="greenicon" style={{ margin: 0 }} />
                      <strong style={{ whiteSpace: 'nowrap' }}>3D Modeling</strong>
                    </div>

                  </SwiperSlide>

                  <SwiperSlide className='ribbon-slider' style={{ width: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>


                    <div className="ribbon-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                      <img src={greenicon} alt="greenicon" style={{ margin: 0 }} />
                      <strong style={{ whiteSpace: 'nowrap' }}>3D Printing</strong>
                    </div>

                  </SwiperSlide>

                  <SwiperSlide className='ribbon-slider' style={{ width: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>


                    <div className="ribbon-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                      <img src={greenicon} alt="greenicon" style={{ margin: 0 }} />
                      <strong style={{ whiteSpace: 'nowrap' }}>Prototyping</strong>
                    </div>

                  </SwiperSlide>

                  <SwiperSlide className='ribbon-slider' style={{ width: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>


                    <div className="ribbon-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                      <img src={greenicon} alt="greenicon" style={{ margin: 0 }} />
                      <strong style={{ whiteSpace: 'nowrap' }}> Low Volume Injection Molding</strong>
                    </div>

                  </SwiperSlide>

                </Swiper>

              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default Ribbon
