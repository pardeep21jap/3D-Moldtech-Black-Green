import React from 'react'
import icons from "../assets/icons.jpg";
import { Link } from "react-router-dom";
import stamp from "../assets/stamp1.png";
import "./Faq.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function Modelingfaq() {
  return (
    <div>
      <section id='faq-section'>
        <div className="container">
          <div className="faq-outer">
            <div className="faq-inner">

              <div className="main-heading">
                <ul>
                  <li>
                    <img src={icons} alt="icons" />
                  </li>
                  <li>
                    <h3 className='allheading'>FAQs</h3>
                  </li>
                </ul>


                <h4 className='allsubtitle'>questions: look here</h4>
              </div>

              <div className='row faq-content'>

                <div className="col-lg-8 faq-accordion">
                  <div class="accordion" id="accordionExample">
                    {/* item-1 */}
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          What services do you offer?
                        </button>
                      </h2>
                      <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          We offer end-to-end product development services including 3D modelling, industrial-grade 3D printing, rapid prototyping, and low-volume injection molding. All services are performed in-house, allowing better coordination, faster turnaround, improved quality control, and a smooth transition from concept to production-ready parts.
                        </div>
                      </div>
                    </div>
                    {/* item-2 */}
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          Do you support Modelling?
                        </button>
                      </h2>
                      <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          Yes, low-volume production is our specialty. We support prototype builds, pilot runs, bridge manufacturing, and early market launches. Low-volume injection molding allows customers to use production-grade materials while minimizing tooling costs and risks before committing to high-volume manufacturing programs.
                        </div>
                      </div>
                    </div>
                    {/* item-3 */}
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          Are your parts production-grade?
                        </button>
                      </h2>
                      <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          Absolutely. Our parts are designed and manufactured with production intent. We focus on dimensional accuracy, functional performance, and repeatability, ensuring components are suitable for real-world testing, validation, and direct use in assemblies or limited production environments.
                        </div>
                      </div>
                    </div>
                    {/* item-4 */}
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                          Which industries do you serve?
                        </button>
                      </h2>
                      <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          We serve a wide range of industries including automotive, electronics, medical devices, consumer products, cleantech, and industrial manufacturing. Our flexible processes and engineering-driven approach allow us to adapt designs, materials, and manufacturing methods to meet diverse industry standards and application requirements.
                        </div>
                      </div>
                    </div>
                    {/* item-5 */}
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                          How fast is your turnaround time?
                        </button>
                      </h2>
                      <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          Turnaround time depends on part complexity, material selection, and volume. However, because all processes are handled in-house, we significantly reduce delays caused by outsourcing, enabling rapid prototyping, quick design iterations, and faster overall delivery timelines compared to traditional manufacturing workflows.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 faq-call review-star">
                  <div className="review-black faq-black">

                    <FontAwesomeIcon icon={faPhone} className='faq-phone' />

                    <span>You have different questions?</span>
                    <h4>Our team will answer all your question. <br />
                      We ensure a quick response.</h4>

                    <Link to="/ContactUs" className="all-button" role="button">
                      <span>contact us</span>
                    </Link>


                  </div>

                  <div className='faq-stamp'>
                    <img src={stamp} alt="stamp" />
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

export default Modelingfaq
