import "./ContactSection.css";
import touch from "../assets/touch.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopesBulk } from "@fortawesome/free-solid-svg-icons";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-title">
        Lets Get in <span>Touch!</span>
      </h2>

      <div className="contact-wrapper">
        {/* LEFT FORM */}
        <div className="contact-form">
          <div className="row">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />


            <input type="email" placeholder="Email Address" />
            <input type="text" placeholder="Subject" />

            <textarea placeholder="Message"></textarea>

            <div className="file-upload">
              <label>File Upload</label>
              <input type="file" />
            </div>
          </div>
          <button className="send-btn">Send Message</button>
        </div>

        {/* RIGHT CARD */}
        <div className="contact-info">
          <img src={touch} alt="touch" />

          <h3>Ready to start?</h3>
          <p>
            Upload your CAD files today and get expert feedback.
          </p>

          <ul className="info-list">
            <li><FontAwesomeIcon icon={faPhoneVolume} className="get-icon" /> +880 123 456 7890</li>
            <li><FontAwesomeIcon icon={faEnvelopesBulk} className="get-icon" />contact@example.com</li>
            <li><FontAwesomeIcon icon={faMapPin} className="get-icon" /> 3162 Cerullo Road Louisville, KY 40205</li>
          </ul>

          <div className="divider"></div>

          <div className="social">
            <span>Connect with us</span>
            <div className="icons">
              <i>📘</i>
              <i>❌</i>
              <i>💼</i>
              <i>📸</i>
              <i>💬</i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
