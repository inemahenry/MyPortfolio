import { Link } from "react-router-dom";
import "./Navbar.css";



function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-container">

        <div className="logo">
          
        </div>

      <ul className="nav-links">

  <li>
    <Link to="/">Home</Link>
  </li>

  <li>
    <Link to="/about">About</Link>
  </li>

  <li>
    <Link to="/projects">Projects</Link>
  </li>

  <li>
    <Link to="/education">Education</Link>
  </li>

  <li>
    <Link to="/services">Services</Link>
  </li>

  <li>
    <Link to="/contact">Contact</Link>
  </li>

</ul>


      </div>
    </nav>
  );
}

export default Navbar;