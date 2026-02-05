import { useState } from "react";
import "./Protabs.css";
import React from 'react'
import prototyping from "../assets/prototyping.png";

import modelling from "../assets/3d-modelling.png";
import modelling2 from "../assets/3d-modelling2.webp";
import modelling3 from "../assets/3d-modelling3.webp";
import modelling4 from "../assets/3d-modelling4.webp";



import printed1 from "../assets/3dprinted1.webp";
import printed2 from "../assets/3dprinted2.webp";
import printed3 from "../assets/3dprinted3.webp";
import printed4 from "../assets/3dprinted4.webp";

import prototype1 from "../assets/prototype1.webp";
import prototype2 from "../assets/prototype2.webp";
import prototype3 from "../assets/prototype3.webp";
import prototype4 from "../assets/prototype4.webp";

const tabsData = [
  {
    title: "All",
    content:
      <div className="gallery">
        <div className="gallery-box">
          <img src={modelling} alt="3D Modelling Part 1" />
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
          <img src={modelling} alt="3D Modelling Part 1" />
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
