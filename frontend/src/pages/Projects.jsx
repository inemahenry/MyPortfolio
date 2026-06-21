import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./PageLayout.css";

const projectHighlights = [
  {
    title: "Featured Project",
    description:
      "Showcase the problem, your stack, and the outcome so each project explains why it matters.",
  },
  {
    title: "Technical Case Study",
    description:
      "Call out architecture, APIs, database work, or performance improvements to make your contribution clear.",
  },
  {
    title: "Product Thinking",
    description:
      "Add context about users, constraints, and decisions to show that you build with purpose, not just code.",
  },
];

function Projects() {
  return (
    <div className="page-shell">
      <Navbar />
      <main className="page-main">
        <section className="page-section" id="projects">
          <div className="container">
            <div className="page-header">
              <span className="page-eyebrow">03</span>
              <h1>Projects</h1>
              <p className="page-copy">
                This route is ready for your portfolio work. Swap the placeholder
                copy below with real project summaries when you are ready.
              </p>
            </div>

            <div className="page-grid">
              {projectHighlights.map((project) => (
                <article key={project.title} className="page-card">
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Projects;
