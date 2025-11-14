import React from "react";
import "../../styles/animations.css";

const testimonials = [
  { name: "Aarav", text: "Amazing service and top-notch support!" },
  { name: "Priya", text: "The animations are stunning — loved the UX!" },
  { name: "Rohit", text: "Very professional and easy to work with." },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="carousel">
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial fadeInUp">
            <p>“{t.text}”</p>
            <h4>- {t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
