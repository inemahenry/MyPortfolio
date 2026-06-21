import "./Story.css";
import profileImage from "../../assets/images/techdx.png";

function Story() {
  return (
    <section className="story-section">

      <div className="story-container">

        {/* LEFT SIDE */}

        <div className="story-left">

          <div className="quote-box">
            <p>
              I build digital solutions that solve
              real-world problems through technology,
              innovation and entrepreneurship.
            </p>
          </div>

          <p className="story-text">
            I am a Software Engineering student at AUCA,
            passionate about building scalable applications,
            modern user experiences and impactful products.
          </p>

          <p className="story-text">
            Beyond software development, I work at
            Hallmark Residences and actively participate
            in innovation programs such as Kigali Business Lab.
          </p>

          <div className="story-divider"></div>

          <h3>
            / Henry Bruno
            <span> • SOFTWARE ENGINEER</span>
          </h3>

          <div className="timeline">

            <h4>THROUGH THE YEARS</h4>

            <div className="timeline-item">
              <span>2024</span>
              <p>Started Software Engineering at AUCA</p>
            </div>

            <div className="timeline-item">
              <span>2025</span>
              <p>Joined Hallmark Residences</p>
            </div>

            <div className="timeline-item">
              <span>2026</span>
              <p>Kigali Business Lab Internship</p>
            </div>

            <div className="timeline-item">
              <span>2026</span>
              <p>Built InzuTrust MVP</p>
            </div>

            <div className="timeline-item">
              <span>2026</span>
              <p>Growing DJ DX Rwanda Brand</p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="story-right">

          <img
            src={profileImage}
            alt="Henry Bruno"
          />

          <div className="image-footer">

            <h4>Profile</h4>

            <span>VOL. 01 • 2026</span>

          </div>

          <div className="current-role">

            <span>CURRENTLY</span>

            <p>
              Founder of InzuTrust • Receptionist at
              Hallmark Residences • Software Engineering Student
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Story;