import { useState } from "react";
import "./Protabs.css";
import React from 'react'
import prototyping from "../assets/prototyping.png";

import modelling from "../assets/3d-modelling.png";
import modelling2 from "../assets/3d-modelling2.webp";
import modelling3 from "../assets/3d-modelling3.webp";
import modelling4 from "../assets/3d-modelling4.webp";
import modelling5 from "../assets/3d-modelling5.webp";
import modelling6 from "../assets/3d-modelling6.webp";
import modelling7 from "../assets/3d-modelling7.webp";
import modelling8 from "../assets/3d-modelling8.webp";
import modelling9 from "../assets/3d-modelling9.webp";


import printed1 from "../assets/3dprinted1.webp";
import printed2 from "../assets/3dprinted2.webp";
import printed3 from "../assets/3dprinted3.webp";
import printed4 from "../assets/3dprinted4.webp";
import printed5 from "../assets/3dprinted5.webp";
import printed6 from "../assets/3dprinted6.webp";
import printed7 from "../assets/3dprinted7.webp";
import printed8 from "../assets/3dprinted8.webp";

import prototype1 from "../assets/prototype1.webp";
import prototype2 from "../assets/prototype2.webp";
import prototype3 from "../assets/prototype3.webp";
import prototype4 from "../assets/prototype4.webp";
import prototype5 from "../assets/prototype5.webp";
import prototype6 from "../assets/prototype6.webp";
import prototype7 from "../assets/prototype7.webp";
import prototype8 from "../assets/prototype8.webp";

const tabsData = [
  {
    title: "All",
    content:
      <div className="gallery">
        <div className="gallery-box">
          <img src={modelling5} alt="3D Modelling Part 5" />
        </div>
        <div className="gallery-box">
          <img src={printed1} alt="3D Printed Part 1" />
        </div>
        <div className="gallery-box">
          <img src={prototype1} alt="Prototype Part 1" />
        </div>
        <div className="gallery-box">
          <img src={modelling2} alt="3D Modelling Part 2" />
        </div>
        <div className="gallery-box">
          <img src={printed2} alt="3D Printed Part 2" />
        </div>
        <div className="gallery-box">
          <img src={prototype2} alt="Prototype Part 2" />
        </div>
        <div className="gallery-box">
          <img src={modelling3} alt="3D Modelling Part 3" />
        </div>
        <div className="gallery-box">
          <img src={printed3} alt="3D Printed Part 3" />
        </div>
        <div className="gallery-box">
          <img src={prototype3} alt="Prototype Part 3" />
        </div>
        <div className="gallery-box">
          <img src={modelling4} alt="3D Modelling Part 4" />
        </div>
        <div className="gallery-box">
          <img src={printed4} alt="3D Printed Part 4" />
        </div>
        <div className="gallery-box">
          <img src={prototype4} alt="Prototype Part 4" />
        </div>

      </div>
  },
  {
    title: "3D Modeling",
    content:
      <div className="gallery">
        <div className="gallery-box">
          <img src={modelling5} alt="3D Modelling Part 5" />
        </div>
        <div className="gallery-box">
          <img src={modelling2} alt="3D Modelling Part 2" />
        </div>
        <div className="gallery-box">
          <img src={modelling3} alt="3D Modelling Part 3" />
        </div>
        <div className="gallery-box">
          <img src={modelling4} alt="3D Modelling Part 4" />
        </div>
        <div className="gallery-box">
          <img src={modelling6} alt="3D Modelling Part 6" />
        </div>
        <div className="gallery-box">
          <img src={modelling7} alt="3D Modelling Part 7" />
        </div>
        <div className="gallery-box">
          <img src={modelling8} alt="3D Modelling Part 8" />
        </div>
        <div className="gallery-box">
          <img src={modelling9} alt="3D Modelling Part 9" />
        </div>


      </div>
  },
  {
    title: "3D Printing",
    content:
      <div className="gallery">
        <div className="gallery-box">
          <img src={printed1} alt="3D Printed Part 1" />
        </div>
        <div className="gallery-box">
          <img src={printed2} alt="3D Printed Part 2" />
        </div>
        <div className="gallery-box">
          <img src={printed3} alt="3D Printed Part 3" />
        </div>
        <div className="gallery-box">
          <img src={printed4} alt="3D Printed Part 4" />
        </div>
        <div className="gallery-box">
          <img src={printed5} alt="3D Printed Part 5" />
        </div>
        <div className="gallery-box">
          <img src={printed6} alt="3D Printed Part 6" />
        </div>
        <div className="gallery-box">
          <img src={printed7} alt="3D Printed Part 7" />
        </div>
        <div className="gallery-box">
          <img src={printed8} alt="3D Printed Part 8" />
        </div>

      </div>
  },
  {
    title: "Prototype",
    content:
      <div className="gallery">
        <div className="gallery-box">
          <img src={prototype1} alt="Prototype Part 1" />
        </div>
        <div className="gallery-box">
          <img src={prototype2} alt="Prototype Part 2" />
        </div>
        <div className="gallery-box">
          <img src={prototype3} alt="Prototype Part 3" />
        </div>
        <div className="gallery-box">
          <img src={prototype4} alt="Prototype Part 4" />
        </div>
        <div className="gallery-box">
          <img src={prototype5} alt="Prototype Part 5" />
        </div>
        <div className="gallery-box">
          <img src={prototype6} alt="Prototype Part 6" />
        </div>
        <div className="gallery-box">
          <img src={prototype7} alt="Prototype Part 7" />
        </div>
        <div className="gallery-box">
          <img src={prototype8} alt="Prototype Part 8" />
        </div>

      </div>
  }

];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);


  return (
    <div>



      {/* Tabs */}
      <section id="galler-tabs">


        <div className="container">


          <div className="tabs-header projects-header">
            {tabsData.map((tab, index) => (
              <button
                key={index}
                className={`tab-btn ${activeTab === index ? "active" : ""}`}
                onClick={() => setActiveTab(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="tabs-content projects-content">
            <p>{tabsData[activeTab].content}</p>
          </div>
        </div>
      </section>
    </div>


  );
};

export default Tabs
