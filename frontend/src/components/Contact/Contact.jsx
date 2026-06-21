import "./Contact.css";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <span className="contact-label">GET IN TOUCH</span>

          <h2>Let's Build Something Great</h2>

          <p className="contact-description">
            Have a project in mind, a collaboration opportunity, or simply want
            to connect? I'd love to hear from you.
          </p>

          <div className="contact-item">
            <FaEnvelope />
            <div>
              <span>EMAIL</span>
              <p>inema951@gmail.com</p>
            </div>
          </div>

          <div className="contact-item">
            <FaPhone />
            <div>
              <span>PHONE</span>
              <p>+250 794 581 221</p>
            </div>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt />
            <div>
              <span>LOCATION</span>
              <p>Kigali, Rwanda</p>
            </div>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/henrykernel"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>

            <a
              href="https://instagram.com/deejay_dx3"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
          </div>

          <div className="availability-box">
            <h4>Available for Opportunities</h4>

            <p>
              Open to internships, freelance projects, collaborations and
              software development opportunities.
            </p>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Full Name" />
          <input type="email" placeholder="your@email.com" />
          <input type="text" placeholder="Subject" />

          <textarea
            rows="7"
            placeholder="Tell me about your project..."
          ></textarea>

          <button type="submit">Send Message -&gt;</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
