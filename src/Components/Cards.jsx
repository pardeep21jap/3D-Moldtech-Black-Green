import React from 'react'
import "./Cards.css"
import fdm from "../assets/fdm.png";



function Cards() {
  return (
    <div>
      <section id='cards-section'>
        <div className='container'>
          <div className="cards-outer">
            <div className="cards-inner">

              <div className='main-card'>
                <img src={fdm} alt="fdm" />
                <div className='card-content'>
                  <h4>FDM 3d Printing</h4>
                  <p className='allp'>
                    In this awe-inspiring exploration, we set out to uncover the beauty and allure of mountains, those ancient giants that tower over the landscape and evoke a sense of wonder and admiration. From the mesmerizing marine life that inhabits the coral reefs to the vast and uncharted depths that hold untold secrets, we embark on a journey of discovery and exploration.
                  </p>
                </div>
              </div>
              <div className='main-card'>
                <img src={fdm} alt="fdm" />
                <div className='card-content'>
                  <h4>FDM 3d Printing</h4>
                  <p className='allp'>
                    In this awe-inspiring exploration, we set out to uncover the beauty and allure of mountains, those ancient giants that tower over the landscape and evoke a sense of wonder and admiration. From the mesmerizing marine life that inhabits the coral reefs to the vast and uncharted depths that hold untold secrets, we embark on a journey of discovery and exploration.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cards
