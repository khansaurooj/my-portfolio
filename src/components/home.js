import React from "react";
import SpiralBackground from "./SpiralBackground";


const Home = () => {
  return (
    <section
      id="home"
      className="home-section"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* ✅ use SpiralBackground here */}
      <SpiralBackground />

      <div className="overlay"></div>
      <div className="content">
        <h1>
          Hello, I'm <span>Khansa Urooj</span>
        </h1>
        <p>Full-Stack Web Developer with AI/ML Integration</p>
        <a href="/Resume.pdf" download>
          <button>Download Resume</button>
        </a>
      </div>
    </section>
  );
};

export default Home;
