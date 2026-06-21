import "./About.css";
import { FaDownload } from "react-icons/fa";
import profileImage from "../../assets/images/profile.jpeg";


function About() {
  return (
    <section className="about section" id="about">

      <div className="container">

        <div className="section-header">

          <span>WHO I AM</span>

          <h2>About Me</h2>

        </div>

        <div className="about-content">

          <div className="about-card">

            <div className="about-avatar">
  <img
    src={profileImage}
    alt="Henry Bruno"
    className="profile-image"
  />
</div>
          </div>

          <div className="about-text">

            <p>
              I'm a Full Stack Developer based in Rwanda,
              passionate about building scalable web
              applications and creating digital experiences
              that combine clean design with powerful
              functionality.
            </p>

            <p>
              My focus is on React, Node.js, MySQL and
              modern web technologies. I enjoy solving
              real-world problems through code and turning
              ideas into successful products.
            </p>

            <p>
              Beyond coding, I'm also a DJ, entrepreneur,
              and technology enthusiast always exploring
              new opportunities for innovation.
            </p>

            <div className="stats">

              <div className="stat">
                <h3>10+</h3>
                <span>Projects</span>
              </div>

              <div className="stat">
                <h3>2+</h3>
                <span>Years Learning</span>
              </div>

              <div className="stat">
                <h3>100%</h3>
                <span>Dedication</span>
              </div>

            </div>

            <button className="resume-btn">
              <FaDownload />
              Download Resume
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;