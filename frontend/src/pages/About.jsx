import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import AboutSection from "../components/About/About";
import "./PageLayout.css";

function About() {
  return (
    <div className="page-shell">
      <Navbar />
      <main className="page-main">
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

export default About;
