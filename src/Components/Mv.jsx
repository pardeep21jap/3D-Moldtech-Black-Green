import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import "./Mv.css"
function Mv() {
  return (
    <div>
      <section id='mision-vision'>
        <div className="container">
          <div className="mv-outer">
            <div className=" mv-inner">
              <div className=" mission-div">
                <FontAwesomeIcon icon={faEye} className='mision-icon' />
                <h4>Our Vision</h4>
                <p className='allp'>To become a trusted global partner in rapid prototyping, empowering innovators, startups, and manufacturers to bring ideas to life faster, smarter, and more affordably through accessible, high-quality manufacturing solutions that remove complexity and unlock innovation at every stage of product development.</p>
              </div>
              <div className=" mission-div">
               <FontAwesomeIcon icon={faRocket} className='mision-icon'/>
                <h4>Our Mission</h4>
                <p className='allp'>Our mission is to simplify and accelerate product development by delivering affordable, accurate, and fast prototyping using advanced 3D-printed molds and efficient processes. We aim to remove barriers, reduce costs, and provide reliable, production-ready prototypes that help businesses confidently transform concepts into real-world products.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Mv
