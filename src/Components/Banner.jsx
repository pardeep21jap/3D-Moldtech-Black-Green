import React from 'react'

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import defaultBannerImage from "../assets/banner.png";
import "./Banner.css"

function Banner({ title, bannerImage }) {
  const imgSrc = bannerImage || defaultBannerImage;

  return (
    <div>
      <section id='banner-section'>
        <div className="container">
          <div className="banner-inner">
            <img src={imgSrc} alt="banner" />
            <div className="banner-text">
              <h3>{title}</h3>
              {/* <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item"><a href="#">Library</a></li>

                </ol>
              </nav> */}

            </div>
          </div>
        </div>
      </section >
    </div >
  )
}

export default Banner;
