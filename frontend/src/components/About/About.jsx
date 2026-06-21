import "./About.css";
import profileImage from "../../assets/images/profile.png";

function About() {
  return (
    <section className="about-section" id="about">

      <div className="section-label">
        <span>02</span>
        <div className="line"></div>
        <p>BACKGROUND & JOURNEY</p>
      </div>

      <div className="about-grid">

        <div className="about-content">

          <h2 className="about-title">
            Turning ideas
            <br />
            <span>into opportunities.</span>
          </h2>

          <div className="quote-box">
            <p>
              I believe technology should do more than exist—it should solve problems, create opportunities and improve people's lives.
            </p>
          </div>

          <p>
            I'm Henry Bruno, a Software Engineering student at AUCA, Full Stack Developer and founder of InzuTrust. My journey in technology is driven by a desire to build solutions that make everyday experiences simpler, more accessible and more efficient.
          </p>

          <p>
            Through software development, I have learned that great products begin with understanding real problems. Whether developing web applications, managing projects or exploring new ideas, I focus on creating practical solutions that deliver value to people and businesses.
          </p>

          <p>
            My interests extend beyond software development into innovation, entrepreneurship and digital transformation. I enjoy exploring new technologies, learning continuously and turning ambitious ideas into meaningful projects.
          </p>

          <p>
            My vision is to contribute to Africa's growing digital future by building impactful products, supporting innovation and creating opportunities through technology. Every project I work on is another step toward that goal.
          </p>

          <div className="timeline">

            <div className="timeline-item">
              <span>'23 </span>
              <p>Started Full Stack Development Journey</p>
            </div>

            <div className="timeline-item">
              <span>'25</span>
              <p>Joined AUCA Software Engineering Program</p>
            </div>

            <div className="timeline-item">
              <span>'26</span>
              <p>Founded and Built HR Hotel Management System</p>
            </div>

          </div>

        </div>

        <div className="about-image">

          <img
            src={profileImage}
            alt="Henry Bruno"
          />

          <div className="image-footer">

            <h4>Henry Bruno</h4>

            <span>
              Software Engineer • Entrepreneur • DJ
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;