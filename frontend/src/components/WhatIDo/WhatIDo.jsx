import "./WhatIDo.css";
import {
  FaCode,
  FaServer,
  FaRocket
} from "react-icons/fa";

function WhatIDo() {
  return (
    <section className="services-section">

      <div className="services-container">

        <div className="services-header">

          <div className="section-label">

        

            <div className="line"></div>

            <p>WHAT I DO</p>

          </div>

          <h2>
            Building digital
            <br />
            <span>experiences & products</span>
          </h2>

          <p className="services-description">
            I help transform ideas into scalable software,
            modern web applications, and digital products
            that create real impact.
          </p>

        </div>

        <div className="services-grid">

          <div className="service-card">

            <div className="service-icon">
              <FaCode />
            </div>

            <h3>Full Stack Development</h3>

            <p>
              Modern web applications using React,
              Node.js, Express, MySQL and responsive
              user interfaces.
            </p>

          </div>

          <div className="service-card">

            <div className="service-icon">
              <FaServer />
            </div>

            <h3>Backend & API Development</h3>

            <p>
              Authentication systems, REST APIs,
              database architecture and scalable
              server-side solutions.
            </p>

          </div>

          <div className="service-card">

            <div className="service-icon">
              <FaRocket />
            </div>

            <h3>Sound Engineering</h3>

            <p>
               Audio mixing, mastering, live sound setup,
    DJ performance production and creating
    immersive sound experiences for events and media.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default WhatIDo;