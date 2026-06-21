import "./Hero.css";
import heroImage from "../../assets/images/techdx.png";

function Hero() {
  return (
    <section className="hero" id="hero">

      <img
        src={heroImage}
        alt="Henry Bruno"
        className="hero-bg"
      />

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <span className="hero-tag">
          SOFTWARE ENGINEER • FULL STACK DEVELOPER
        </span>

        <h1>
          HENRY
          <br />
          BRUNO
        </h1>

        <p>
          Software Engineering student at AUCA,
          Full Stack Developer and founder of InzuTrust.
        </p>

        <button>
          Hire me →
        </button>

      </div>
      <div className="hero-fade"></div>

    </section>
  );
}

export default Hero;