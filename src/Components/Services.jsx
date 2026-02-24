import React from 'react'
import icons from "../assets/icons22.png";
import modelling from "../assets/3d-modelling.webp";
import printing from "../assets/3d-printing.webp";
import prototyping from "../assets/prototyping.webp";
import "./Services.css"


function Services() {
  return (
    <div>
      <section id='service-section'>
        <div className="container">
          <div className="service-outer">
            <div className="service-inner">

              <div className="main-heading left-heading">
                <ul>
                  <li>
                    <img src={icons} alt="icons" />
                  </li>
                  <li>
                    <h3 className='allheading'> 3D Moldtech Services</h3>
                  </li>
                </ul>


                <h4 className='allsubtitle white-allsubtitle'>Where innovation goes hand in hand < br />with creativity.</h4>
                <p className='allp left-para'>
                  Based in Canada, 3D Moldtech specializes in rapid prototyping and low-volume manufacturing of precision components. Using in-house industrial 3D printing, CAD engineering, and injection molding, we help bring products to market efficiently and reliably.
                </p>
              </div>

              <div className="row three-services">
                {/* service-box1 */}
                <div className="col-lg-4 service-box">
                  <div className="main-ser-box" tabIndex="0">
                    <img src={modelling} alt="3D Modelling" style={{ width: '100%', height: '550px', objectFit: 'cover' }} />
                    <h3 className='service-heading'>3D Modelling</h3>

                    <div className="bottom-text">
                      <strong>3D Modelling</strong>
                      <p>
                        Part design creates precise, functional components using parametric software. It focuses on exact dimensions, geometric constraints, and specific manufacturing constraints like 3D printing or machining.
                      </p>
                      <a href="/Modeling">read more....</a>

                    </div>

                  </div>

                </div>

                {/* service-box2 */}
                <div className="col-lg-4 service-box">
                  <div className="main-ser-box" tabIndex="0">
                    <img src={printing} alt="3d printing" style={{ width: '100%', height: '550px', objectFit: 'cover' }} />
                    <h3 className='service-heading'>3D Printing</h3>

                    <div className="bottom-text">
                      <strong>3D Printing</strong>
                      <p>
                        Our in-house 3D printing delivers precise, production-ready parts using industrial materials, enabling fast iteration, functional validation, and low-volume manufacturing.
                      </p>
                      <a href="/printing">read more....</a>

                    </div>

                  </div>

                </div>

                {/* service-box3 */}
                <div className="col-lg-4 service-box">
                  <div className="main-ser-box" tabIndex="0">
                    <img src={prototyping} alt="prototyping" style={{ width: '100%', height: '550px', objectFit: 'cover' }} />
                    <h3 className='service-heading'>Low Volume Injection Molding</h3>

                    <div className="bottom-text">
                      <strong>Low Volume Injection Molding</strong>
                      <p>
                        Low-Volume Injection Molding prototyping produces production-quality parts quickly, reducing risk, validating designs, and accelerating the transition from prototype to manufacturing.
                      </p>
                      <a href="/Prototyping">read more....</a>

                    </div>

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

export default Services
