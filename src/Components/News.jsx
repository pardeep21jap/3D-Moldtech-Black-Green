import React from 'react'
import { Link } from "react-router-dom";
import icons from "../assets/icons2.png";
import modelling from "../assets/3d-modelling.png";
import printing from "../assets/3d-printing.png";
import prototyping from "../assets/prototyping.png";
import "./News.css"

function News() {
  return (
    <div>
      <section id='news-section'>
        <div className="container">
          <div className="news-outer">
            <div className="news-inner">

              <div className="main-heading left-heading">
                <ul>
                  <li>
                    <img src={icons} alt="icons" />
                  </li>
                  <li>
                    <h3 className='allheading'> News & Blogs</h3>
                  </li>
                </ul>


                <h4 className='allsubtitle white-allsubtitle'>Where Our Latest< br /> News & Blogs </h4>
                <p className='allp left-para'>
                  We’re a Canadian company focused on getting you results. At Morin 3D, we prototype, iterate, and <br />manufacture precision parts using in-house scanning, CAD, and industrial-grade 3D printing.
                </p>
              </div>

              {/* three-cards */}
              <div className="three-cards-grid">

                <div className="news-card">
                  <div className="news-image">
                    <img src={modelling} alt="modelling.png" />
                  </div>

                  <h4 className='card-title'>Morin 3D Launches New Website to Enhance User Experience</h4>
                  <p className='card-desc'>Morin 3D, a leading provider of 3D printing services, is excited to announce the launch of its new website designed to improve user experience and showcase its innovative solutions.</p>
                    <Link to="/Blogs" className="all-button" role="button">
                      <span>read now</span>
                    </Link>
                </div>

                <div className="news-card">

                  <div className="news-image">
                    <img src={printing} alt="3d-printing" />
                  </div>
                  <h4 className='card-title'>Revolutionizing Prototyping: How Morin 3D is Changing the Game</h4>
                  <p className='card-desc'>Discover how Morin 3D is transforming the prototyping process with cutting-edge technology and unparalleled expertise in 3D printing services.</p>
                   <Link to="/Blogs" className="all-button" role="button">
                      <span>read now</span>
                    </Link>
                </div>

                <div className="news-card">

                  <div className="news-image">
                    <img src={prototyping} alt="prototyping" />
                  </div>
                  <h4 className='card-title'>Revolutionizing Prototyping: How Morin 3D is Changing the Game</h4>
                  <p className='card-desc'>Discover how Morin 3D is transforming the prototyping process with cutting-edge technology and unparalleled expertise in 3D printing services.</p>
                   <Link to="/Blogs" className="all-button" role="button">
                      <span>read now</span>
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default News
