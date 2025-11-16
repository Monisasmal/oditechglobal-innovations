import React, { useState, useEffect } from "react";
import '../../styles/animations.css'

const data = [
  {
    name: "John Doe",
    role: "CEO, ExampleCorp",
    message: "Amazing service! The team was very responsive and delivered outstanding results.",
  },
  {
    name: "Sarah Smith",
    role: "Product Manager",
    message: "Professional work and great communication throughout the entire project.",
  },
  {
    name: "Michael Adams",
    role: "Startup Founder",
    message: "Highly recommended! They understood our requirements perfectly.",
  },
];

function Testimonials() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>

      <div className="carousel">
        <div className="testimonial-card slide">
          <p className="message">"{data[index].message}"</p>
          <h3>{data[index].name}</h3>
          <span>{data[index].role}</span>
        </div>
      </div>

      <div className="dots">
        {data.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
