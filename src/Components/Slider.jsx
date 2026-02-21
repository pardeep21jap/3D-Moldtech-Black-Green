
import "./Slider.css"
import { SwiperSlide, Swiper } from 'swiper/react'
import 'swiper/css';

import { Link } from "react-router-dom";
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css/pagination';

import icons from "../assets/icons.jpg";



function Slider() {
  return (
    <div>

      <section id='slider-section'>
        <div className='container'>
          <div className="outer-slider">
            <div className="row inner-slider">
              <div className="col-lg-6 left-content">
                <div className="slider-content">

                  <h2>
                    <img src={icons} alt="1" />
                    welcome to 3D moldtech
                  </h2>
                  <h3> Affordable <br />
                    Innovation Starts <br />
                    Here</h3>
                  <p>
                    Rapid, low-cost prototypes using innovative 3D-printed<br /> injection mold technology. Perfect for testing, refining,<br /> and launching your designs.
                  </p>



                  <Link to="/projects" className="all-button" role="button">
                    <span>Discover more</span>
                  </Link>


                </div>

              </div>
              <div className="col-lg-6 right-slider">


                <Swiper navigation={false} pagination={false} autoplay={true}
                  modules={[Navigation, Pagination, Autoplay]} className="mySwiper">

                  <SwiperSlide className='mainslider'>

                    <strong>
                      <img src={icons} alt="Logo" />

                    </strong>


                  </SwiperSlide>
                  <SwiperSlide className='mainslider'>


                    <strong>
                      <img src={icons} alt="Logo" />

                    </strong>

                  </SwiperSlide>
                  <SwiperSlide className='mainslider'>


                    <strong>
                      <img src={icons} alt="Logo" />

                    </strong>

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

export default Slider
