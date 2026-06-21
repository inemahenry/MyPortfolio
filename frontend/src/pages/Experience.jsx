import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./PageLayout.css";

function Experience() {
  return (
    <div className="page-shell">
      <Navbar />
      <main className="page-main">
        <section className="page-section" id="experience">
          <div className="container">
            <div className="page-header">
              <span className="page-eyebrow">05</span>
              <h1>Experience</h1>
              <p className="page-copy">
                Use this page for internships, freelance work, and the impact
                you created in each role.
              </p>
            </div>

            <article className="page-card">
              <h2>Experience Timeline</h2>
              <p>
                Add each role with the company name, dates, and a few concrete
                outcomes so the page reads like proof, not just a list.
              </p>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Experience;
