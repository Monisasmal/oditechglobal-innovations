import React from "react";
import "../../styles/animations.css";

function Hero() {
  return (
    <section className="hero">
      <h1 className="fadeInUp">ODITECH INNOVATIONS</h1>
      <p className="fadeInUp delay-1s">
        Empowering the future with creative technology solutions.
      </p>
      <button className="cta-btn">Get Started</button>
    </section>
  );
}

export default Hero;
