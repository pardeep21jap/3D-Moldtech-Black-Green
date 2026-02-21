import React, { useState, useEffect, useRef } from "react";

import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../assets/Logo.png";

function Navbar() {





  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navRef = useRef(null);


  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeAll = () => {
    setIsOpen(false);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {

      // Close dropdown if clicked outside
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }

      // Close mobile navbar if clicked outside
      if (
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (

    <section id="header">
      <div className="container">
        <div className="row header-outer">



          <nav className="navbar col-10" ref={navRef}>

            <div className="header-logo">
              {/* Logo */}
              <Link to="/" className="nav-logo" onClick={closeAll}>
                <img src={Logo} alt="Logo" />
              </Link>
            </div>
            <div className="nav-container">



              {/* Hamburger */}
              <div className="nav-toggle" onClick={toggleNavbar}>
                <span></span>
                <span></span>
                <span></span>
              </div>

              {/* Main Menu */}
              <ul className={`nav-menu ${isOpen ? "active" : ""}`}>

                <li><Link to="/" onClick={closeAll}>Home</Link></li>
                <li><Link to="/AboutUs" onClick={closeAll}>About Us</Link></li>

                {/* Services Dropdown */}
                <li className="dropdown" ref={dropdownRef}>

                  <button className="dropdown-toggle" onClick={toggleDropdown}>
                    Services <span className="caret">▼</span>
                  </button>

                  <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
                    <li><Link to="/Modeling" onClick={closeAll}>3D Modeling</Link></li>
                    <li><Link to="/Printing" onClick={closeAll}>3D printing</Link></li>
                    <li><Link to="/Prototyping" onClick={closeAll}>Prototyping</Link></li>
                    {/* <li><Link to="/Printing" onClick={closeAll}>printing</Link></li>
                    <li><Link to="/Modeling" onClick={closeAll}>Modeling</Link></li> */}
                  </ul>
                </li>

                <li><Link to="/Projects" onClick={closeAll}>Projects</Link></li>
                 <li><Link to="/Blogs" onClick={closeAll}>Blogs</Link></li>
                <li><Link to="/ContactUs" onClick={closeAll}>Contact Us</Link></li>

              </ul>


            </div>
          </nav>

          <div className="get-quote col-2">

            <Link to="/ContactUs" className="all-button" role="button">
              <span>Quote Request</span>
            </Link>
          </div>

        </div>
      </div>

    </section>



  );
}

export default Navbar;
