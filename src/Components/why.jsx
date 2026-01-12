import React from 'react'
import { Link } from "react-router-dom";
import bird from "../assets/bird.jpeg";
import camera from "../assets/camera.jpeg";
import icons from "../assets/icons.jpg";
import ovel from "../assets/ovel.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import "./why.css"

function Why() {
  return (
    <div>
      <section id='why-section'>
        <div className="container">
          <div className="why-outer">
            <div className="why-inner">

              <div className="main-heading">
                <ul>
                  <li>
                    <img src={icons} alt="icons" />
                  </li>
                  <li>
                    <h3 className='allheading'>Why Choose Us</h3>
                  </li>
                </ul>


                <h4 className='allsubtitle'>Why Our Clients  <br /> Believe
                  We’re Different</h4>
              </div>

              <div className="row why-content">

                <div className="col-lg-6 why-images">


                  <div className="gallery-grid">
                    <div className="itemes itemes-large">
                      <img src={bird} alt="bird" />
                    </div>

                    <div className="itemes">
                      <img src={camera} alt="camera" />
                    </div>

                    <div className="itemes ovel-item">
                      <img src={ovel} alt="ovel" />
                    </div>




                  </div>



                </div>
                <div className="col-lg-6 why-boxes">

                  <div className="why-grid">
                    <div className="why-card">
                      <div className="greenicon"><FontAwesomeIcon icon={faUser} className="black-user" /></div>
                      <h3>Certified Experts</h3>
                      <p>
                        We're a Canadian company focused on getting you results.
                        At Morin 3D, we prototype, iterate, and manufacture precision.
                      </p>
                    </div>

                    <div className="why-card">
                      <div className="greenicon"><FontAwesomeIcon icon={faUser} className="black-user" /></div>
                      <h3>Certified Experts</h3>
                      <p>
                        We're a Canadian company focused on getting you results.
                        At Morin 3D, we prototype, iterate, and manufacture precision.
                      </p>
                    </div>

                    <div className="why-card">
                      <div className="greenicon"><FontAwesomeIcon icon={faUser} className="black-user" /></div>
                      <h3>Certified Experts</h3>
                      <p>
                        We're a Canadian company focused on getting you results.
                        At Morin 3D, we prototype, iterate, and manufacture precision.
                      </p>
                    </div>

                    <div className="why-card">
                      <div className="greenicon"><FontAwesomeIcon icon={faUser} className="black-user" /></div>
                      <h3>Certified Experts</h3>
                      <p>
                        We're a Canadian company focused on getting you results.
                        At Morin 3D, we prototype, iterate, and manufacture precision.
                      </p>
                    </div>
                  </div>




                </div>
              </div>


            </div>
          </div>
        </div>
      </section >
    </div >
  )
}

export default Why
