import React from 'react'
import "./Story.css"
import { Link } from "react-router-dom";
import storyImg from "../assets/story.png";
function Story() {
  
  return (
    <div>
      <section id='story-section'>
        <div className="container">
          <div className="story-outer">
            <div className="story-inner">
              <div className="row story-content">
                {/* Left Text */}
                <div className="col-lg-8 story-text">
                  <h3 className='inner-heading'>Who We Are</h3>

                  <p className='allp story-desc'>
                    We bring ideas to life with affordable, high-quality prototyping.
                    Our mission is to make product development faster and more accessible
                    for everyone, from startups to manufacturers. We believe great ideas
                    deserve to be made, and we deliver accurate, fast prototypes using
                    advanced 3D-printed molds.
                  </p>

                  <p className='allp story-desc'>
                    We simplify the entire prototyping journey by removing barriers and
                    reducing costs. Through smart technology and efficient processes,
                    we make prototyping easy, quick, and accessible—helping creators
                    and businesses turn concepts into real products with confidence.
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
    </div >
  )
}

export default Story
