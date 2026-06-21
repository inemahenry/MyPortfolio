import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./PageLayout.css";
import "./Education.css";

function Education() {
  return (
    <div className="page-shell">
      <Navbar />
      <main className="page-main">
        <section className="page-section" id="education">
          <div className="container">
            <div className="page-header">
              <span className="page-eyebrow">04</span>
              <h1>Education</h1>
              <p className="page-copy">
                A quick space for your academic background, certifications, and
                current learning focus.
              </p>
            </div>

            <div className="page-grid">
              <article className="page-card">
                <h2>Academic Background</h2>
                <p>
                  Add your school, program, and graduation timeline here so
                  visitors can quickly understand your foundation.
                </p>
              </article>

              <article className="page-card">
                <h2>Certifications</h2>
                <p>
                  Highlight technical courses, certificates, or bootcamps that
                  support your development story.
                </p>
              </article>

              <article className="page-card">
                <h2>Current Focus</h2>
                <p>
                  Call out the tools or topics you are actively studying right
                  now to show momentum and curiosity.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Education;
