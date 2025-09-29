import React from "react";

const About = () => (
  <section id="about" className="about-section">
    
    <div className="about-container">
      
      <div className="about-content">
        <p>
          I am a <span className="highlight">Full-Stack Web Developer</span> with a strong passion for <span className="highlight">AI/ML</span> and a knack for crafting end-to-end solutions.
        </p>
        <p>
          Skilled in <strong>React.js</strong>, <strong>Flask</strong>, <strong>MySQL</strong>, <strong>MongoDB</strong>, and advanced predictive modeling using ML frameworks. I enjoy bridging the gap between frontend UX and backend intelligence.
        </p>
        <div className="skill-tags">
          {["React.js", "Flask", "MongoDB", "TensorFlow", "REST API", "AI/ML","LLM"].map((skill, idx) => (
            <span key={idx}>{skill}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
