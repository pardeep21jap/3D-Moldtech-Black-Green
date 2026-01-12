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
                <p className='allp'>We simplify the entire prototyping journey by removing barriers and reducing costs. Through smart technology and efficient processes, we make prototyping easy, quick, and accessible—helping creators and businesses turn concepts into real products with confidence.</p>
              </div>
              <div className=" mission-div">
               <FontAwesomeIcon icon={faRocket} className='mision-icon'/>
                <h4>Our Mission</h4>
                <p className='allp'>We simplify the entire prototyping journey by removing barriers and reducing costs. Through smart technology and efficient processes, we make prototyping easy, quick, and accessible—helping creators and businesses turn concepts into real products with confidence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Mv
