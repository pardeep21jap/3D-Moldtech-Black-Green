import React from 'react'
import "./Newsletter.css"
import newsletterImg from "../assets/newsletter1.webp"
import { Link } from "react-router-dom";

function Newsletter() {
  return (
    <div>
      <section id='newsletter-section'>
        <div className="container">
          <div className="newsletter-outer">
            <div className="row newsletter-inner">
              <div className="col-lg-5 newsletter-image">

                <img src={newsletterImg} alt="newsletter" />

              </div>

              <div className="cl-lg-7 newsletter-content">
                <h2>
                  We would love to here from you!

                </h2>
                
                <Link to="" className="all-button" role="button">
                                     <span>contact us</span>
                                   </Link>


                <p className="newsletter-note">
                 How can we help ?<br />We are here to answer your questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default Newsletter
