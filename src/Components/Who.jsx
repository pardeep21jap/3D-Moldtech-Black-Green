import React from 'react'

import { Link } from "react-router-dom";
import icons from "../assets/icons.jpg";
import "./Who.css"
import bird from "../assets/bird.jpeg";
import stamp from "../assets/stamp1.png";
import camera from "../assets/camera.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';


function Who() {
  return (
    <section id='who-section'>
      <div className="container">
        <div className="who-outer">
          <div className="who-inner">

            <div className="main-heading">
              <ul>
                <li>
                  <img src={icons} alt="icons" />
                </li>
                <li>
                  <h3 className='allheading'>Who we are</h3>
                </li>
              </ul>
              <h4 className='allsubtitle'>Empower Your Success with <br /> 3D Moldtech</h4>
            </div>


            <div className="row inner-whowe">

              <div className="col-lg-6 who-images">

                <div className="birdimage">
                  <img src={bird} alt="bird" />
                </div>
                <div className="right-graphics">

                  <div className='semicircle1'></div>

                  <div className='semicircle2'></div>
                  <div className='stamp-img'>
                    <img src={stamp} alt="stamp" />
                  </div>
                </div>

                <div className='camera-image'>
                  <img src={camera} alt="camera" />
                </div>

              </div>

              <div className="col-lg-6 who-texted">
                <div className="who-text">
                  <p className='allp'>
                    We bring ideas to life with affordable, high-quality prototyping. Our mission is to make product development faster and more accessible for everyone, from startups to manufacturers. We believe great ideas deserve to be made, and we deliver accurate, fast prototypes using advanced 3D-printed molds.<br /><br />

                    We simplify the entire prototyping journey by removing barriers and reducing costs. Through smart technology and efficient processes, we make prototyping easy, quick, and accessible—helping creators and businesses turn concepts into real products with confidence.
                  </p>
                </div>

                <div className="progress-wrapper">

                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faGear} className='pro-icons' />
                      <strong>Innovative Prototyping Experts</strong>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
                      </div>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faLightbulb} className='pro-icons' />
                      <strong>Making Great Ideas Possible</strong>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                      </div>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCar} className='pro-icons' />
                      <strong>Simplifying the Prototyping Journey</strong>



                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
                      </div>
                    </li>
                  </ul>
                     <Link to="/AboutUs" className="all-button" role="button">
                    <span>About Us</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Who
