import { useState } from "react";
import "./Protabs.css";
import React from 'react'
import prototyping from "../assets/prototyping.png";

import modelling from "../assets/3d-modelling.png";
import printing from "../assets/3d-printing.png";


const tabsData = [
  {
    title: "All",
    content:
      <div className="gallery">
        <div className="gallery-box">
          <img src={prototyping} alt="prototyping" />
        </div>
        <div className="gallery-box">
          <img src={printing} alt="3d printing" />
        </div>
        <div className="gallery-box">
          <img src={modelling} alt="3D Modelling" />
        </div>

        <div className="gallery-box">
          <img src={prototyping} alt="prototyping" />
        </div>
        <div className="gallery-box">
          <img src={printing} alt="3d printing" />
        </div>
        <div className="gallery-box">
          <img src={modelling} alt="3D Modelling" />
        </div>



      </div>
  },
  {
    title: "3D Modeling",
    content:
      <div className="gallery">
        <div className="gallery-box">
          <img src={prototyping} alt="prototyping" />
        </div>
        <div className="gallery-box">
          <img src={modelling} alt="3D Modelling" />
        </div>
        <div className="gallery-box">
          <img src={printing} alt="3d printing" />
        </div>
        <div className="gallery-box">
          <img src={prototyping} alt="prototyping" />
        </div>
        <div className="gallery-box">
          <img src={prototyping} alt="prototyping" />
        </div>
        <div className="gallery-box">
          <img src={prototyping} alt="prototyping" />
        </div>


      </div>
  },
  {
    title: "3D Printing",
    content:
      <div className="gallery">
        <div className="gallery-box">
          <img src={printing} alt="3d printing" />
        </div>
        <div className="gallery-box">
          <img src={printing} alt="3d printing" />
        </div>
        <div className="gallery-box">
          <img src={prototyping} alt="prototyping" />
        </div>
        <div className="gallery-box">
          <img src={printing} alt="3d printing" />
        </div>
        <div className="gallery-box">
          <img src={prototyping} alt="prototyping" />
        </div>
        <div className="gallery-box">
          <img src={prototyping} alt="prototyping" />
        </div>


      </div>
  },
  {
    title: "Prototype",
    content:
      <div className="gallery">
        <div className="gallery-box">
          <img src={prototyping} alt="prototyping" />
        </div>
        <div className="gallery-box">
          <img src={printing} alt="3d printing" />
        </div>
        <div className="gallery-box">
          <img src={prototyping} alt="prototyping" />
        </div>
        <div className="gallery-box">
          <img src={printing} alt="3d printing" />
        </div>
        <div className="gallery-box">
          <img src={prototyping} alt="prototyping" />
        </div>
        <div className="gallery-box">
          <img src={prototyping} alt="prototyping" />
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
