import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import WhatIDo from "../components/WhatIDo/WhatIDo";
import "./PageLayout.css";

function Services() {
  return (
    <div className="page-shell">
      <Navbar />
      <main className="page-main">
        <WhatIDo />
      </main>
      <Footer />
    </div>
  );
}

export default Services;
