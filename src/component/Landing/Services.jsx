import React, { useContext } from "react";
import { AppContext } from "../../context/appContext";

function Services() {
  const { services } = useContext(AppContext);

  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="services-list">
        {services.length === 0 ? (
          <p>No services yet. Add from admin dashboard.</p>
        ) : (
          services.map((srv, index) => (
            <div key={index} className="service-card slideUp">
              <img src={srv.icon} alt={srv.title} />
              <h3>{srv.title}</h3>
              <p>{srv.description}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default Services;
