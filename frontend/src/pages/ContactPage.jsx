import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";
import "./PageLayout.css";

function ContactPage() {
  return (
    <div className="page-shell">
      <Navbar />
      <main className="page-main">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default ContactPage;
