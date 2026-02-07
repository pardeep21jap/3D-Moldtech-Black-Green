import React from 'react'
import "./Story.css"
import { Link } from "react-router-dom";
import storyImg from "../assets/story1.webp";


function Printingstory() {
  return (
    <div>
      <section id='story-section'>
        <div className="container">
          <div className="story-outer">
            <div className="story-inner">
              <div className="row story-content">
                {/* Left Text */}
                <div className="col-lg-8 story-text">
                  <h3 className='inner-heading'>What is Printing</h3>


                  <p className='allp story-desc'>
                    Low-volume injection molding refers to creating a “low” number of parts using the injection molding services following the specifications and requests of the customer. Injection molding is an incredibly versatile process used to create complex parts by injecting plastic resin into metal molds. Injection molding provides unmatched part precision, consistency, and reliability to the consumer.
                  </p>

                  <p className='allp story-desc'>
                    While many companies may utilize injection molding for significant part quantities, injection molding can also be used to deliver cost-effective results on limited part runs in what is known as low-volume injection molding. At Seaway Plastics Engineering, low-volume injection molding applies to any part run between 100 and 10,000 pieces. However, our average production lot is 1,000 pieces and progresses upwards from there.
                  </p>
                </div>

                {/* Right Image */}
                <div className="col-lg-4 story-image">
                  <img src={storyImg} alt="Who we are" />
                </div>
              </div>




            </div>
          </div>
        </div>
      </section >
    </div>
  )
}

export default Printingstory
