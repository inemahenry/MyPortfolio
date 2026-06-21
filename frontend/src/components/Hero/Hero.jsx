import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import heroImage from "../../assets/images/techdx.png";

function Hero() {
  const [lastName, setLastName] = useState("BRUNO");

  useEffect(() => {
    const names = ["BRUNO", "INEMA"];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % names.length;
      setLastName(names[index]);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

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
          <span className="changing-name">
            {lastName}
          </span>
        </h1>

        <p>
          Software Engineering student at AUCA,
          Full Stack Developer and Founder of InzuTrust.
        </p>

        <Link to="/contact">
          <button className="hero-btn">
            Hire Me →
          </button>
        </Link>

      </div>

      <div className="hero-fade"></div>

    </section>
  );
}

export default Hero;