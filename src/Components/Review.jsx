import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import icons from "../assets/icons11.png";
import users from "../assets/users.png";

import { SwiperSlide, Swiper } from 'swiper/react'
import 'swiper/css';

import { Link } from "react-router-dom";
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css/navigation'


import "./Review.css"




function Review() {
  return (
    <div>
      <section id='review-section'>
        <div className="container">
          <div className="review-outer">
            <div className="review-inner">

              <div className="main-heading left-heading color-black">
                <ul>
                  <li>
                    <img src={icons} alt="icons" />
                  </li>
                  <li>
                    <h3 className='allheading'> Testimonials</h3>
                  </li>
                </ul>


                <h4 className='allsubtitle'>Testimonials: Trusted by< br /> Our Clients</h4>

              </div>

              <div className="row reviewcontent">

                <div className="col-lg-4 review-star">
                  <div className="review-black">
                    <span className='slidespan'>4.9</span>
                    <ul className='stars-list'>
                      <li>
                        <FontAwesomeIcon icon={faStar} className="green-star" />
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faStar} className="green-star" />
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faStar} className="green-star" />
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faStar} className="green-star" />
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faStar} className="green-star" />
                      </li>
                    </ul>

                    <strong>(40+ Reviews)</strong>
                    <h4>Customer experience <br /> that spark for them selves</h4>

                    <img src={users} alt="users" />

                  </div>
                </div>
                
                <div className="col-lg-8 review-slide">
                  <div className="review-cards">
                    <Swiper navigation={true} pagination={false} autoplay={false}
                      modules={[Navigation, Autoplay]} className="mySwiper">

                      <SwiperSlide className='mainslider'>

                        <div className="slides-content">
                          <ul className='stars-list'>
                            <li>
                              <FontAwesomeIcon icon={faStar} className="green-star" />
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faStar} className="green-star" />
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faStar} className="green-star" />
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faStar} className="green-star" />
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faStar} className="green-star" />
                            </li>
                            <li>
                              <span className='slidespan'>5.0</span>
                            </li>
                          </ul>
                          <p className='allp'>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                          </p>
                          <span className='username'>Dianne, Russell</span>
                          <h5 className='userpos'>Owner, Architecture Studio</h5>
                        </div>


                      </SwiperSlide>
                      <SwiperSlide className='mainslider'>

                        <div className="slides-content">
                          <ul className='stars-list'>
                            <li>
                              <FontAwesomeIcon icon={faStar} className="green-star" />
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faStar} className="green-star" />
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faStar} className="green-star" />
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faStar} className="green-star" />
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faStar} className="green-star" />
                            </li>
                            <li>
                              <span className='slidespan'>5.0</span>
                            </li>
                          </ul>
                          <p className='allp'>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                          </p>
                          <span className='username'>Dianne, Russell</span>
                          <h5 className='userpos'>Owner, Architecture Studio</h5>

                        </div>


                      </SwiperSlide>
                      <SwiperSlide className='mainslider'>

                        <div className="slides-content">
                          <ul className='stars-list'>
                            <li>
                              <FontAwesomeIcon icon={faStar} className="green-star" />
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faStar} className="green-star" />
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faStar} className="green-star" />
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faStar} className="green-star" />
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faStar} className="green-star" />
                            </li>
                            <li>
                              <span className='slidespan'>5.0</span>
                            </li>
                          </ul>
                          <p className='allp'>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                          </p>
                          <span className='username'>Dianne, Russell</span>
                          <h5 className='userpos'>Owner, Architecture Studio</h5>

                        </div>


                      </SwiperSlide>

                    </Swiper>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Review;
