// import React from "react";

// const About = () => {
//   return (
//     <section id="about">
//       <h2>About </h2>
//       <p>
//         I am a Full-Stack Web Developer and AI/ML enthusiast. Skilled in React.js, Flask, MySQL, MongoDB,
//         and advanced machine learning techniques. I have completed multiple web and AI/ML projects combining
//         frontend, backend, and predictive modeling.
//       </p>
//     </section>
//   );
// };

// export default About;


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
          {["React.js", "Flask", "MongoDB", "TensorFlow", "REST API", "AI/ML"].map((skill, idx) => (
            <span key={idx}>{skill}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
