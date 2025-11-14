import { useContext } from "react";
import Navbar from '../component/Landing/Navbar'
import Hero from "../component/Landing/Hero";
import Services from "../component/Landing/Services";
import Testimonials from "../component/Landing/Testimonials";
import Contact from "../component/Landing/Contact";
import Footer from "../component/Landing/Footer";

import { AppContext } from "../context/appContext";

function LandingPage() {
  const { services } = useContext(AppContext);

  return (
    <div className="landing-page">
      <Navbar/>
      <Hero />
      <section className="services">
  <h2>Our Services</h2>

  {services.length === 0 ? (
    <p>No services added yet.</p>
  ) : (
    <div className="service-grid">
      {services.map((srv, index) => (
        <div key={index} className="service-card">
          <img src={srv.icon} alt={srv.title} />
          <h3>{srv.title}</h3>
          <p>{srv.description}</p>
        </div>
      ))}
    </div>
  )}
</section>

      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default LandingPage;
