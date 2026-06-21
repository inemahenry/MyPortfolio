import { Link } from "react-router-dom";
import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2>Henry Bruno</h2>

            <p>
              Full Stack Developer passionate about building modern web
              applications and digital experiences.
            </p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-social">
            <h3>Connect</h3>

            <div className="social-icons">
              <a
                href="https://github.com/henrykernel"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a href="#">
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
          </div>
        </div>

        <div className="footer-bottom">
          <p>(c) 2026 Henry Bruno. All Rights Reserved.</p>

          <Link to="/" className="back-top">
            <FaArrowUp />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
