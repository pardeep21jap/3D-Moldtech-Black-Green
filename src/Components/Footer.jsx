
import React from 'react'
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import "./Footer.css" 
import { FaFacebookF, FaInstagram, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FiPhone, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    
    <footer className="footer">
      <div className='container'>
 <div className="footer-top">
        {/* Left */}
        <div className="footer-about">
          <h2 className="logo">
            <img src={Logo} alt="Logo" />
          </h2>
          <p className='allp'>
            Macat Megatrons is a thriving community where innovators,
            professionals, and enthusiasts come together to share knowledge,
            collaborate, and grow.
          </p>

          <div className="socials">
            <FaFacebookF />
            <FaInstagram />
            <FaGooglePlusG />
            <BsTwitterX />
            <FaLinkedinIn />
          </div>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h4>Company</h4>
          <ul style={{listStyle: 'none', padding: 0}}>
            <li><Link to="/AboutUs">About us</Link></li>
            <li><Link to="/Projects">Projects</Link></li>
            <li><Link to="/Blogs">Blogs</Link></li>
            <li><Link to="/ContactUs">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Services</h4>
          <ul style={{listStyle: 'none', padding: 0}}>
            <li><Link to="/Modeling">3D Modeling</Link></li>
            <li><Link to="/Printing">3D Printing</Link></li>
            <li><Link to="/Prototyping">Prototyping</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Our communities</h4>
          <a href="#">MM Communities</a>
          <a href="#">MM Forum</a>
          <a href="#">MM Chat</a>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p><FiPhone /> +123 456 7890</p>
          <p><FiMail /><a href="#">info@gmail.com</a></p>
          
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <span>© 2025 Macat Megatrons. All rights reserved.</span>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Legal</a>
          <a href="#">Site Map</a>
        </div>
      </div>
      </div>
     
    </footer>
  );
}
