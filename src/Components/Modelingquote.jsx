import React from 'react'

import { Link } from "react-router-dom";
import "./Quote.css"

function Modelingquote() {
  return (
    <div>
      <section id='quote-section'>
        <div className='container'>
          <div className='quote-outer'>
            <div className='main-quote'>
              <h3>
                ready to discuss your Modelling project?
              </h3>
              <Link to="" className="all-button quote-btn" role="button">
                <span>get a quote</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Modelingquote
