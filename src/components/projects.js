
import React, { useState } from "react";

const projectData = [
  {
    title: "AI-Based COVID-19 Forecasting & Analysis",
    description: "Forecast COVID-19 cases using ML models; Django app for risk classification.",
    link: "#"
  },
  {
    title: "Credit Score Classification System",
    description: "ANN + CatBoost ensemble to classify credit scores; preprocessing & deployment.",
    link: "#"
  },
  {
    title: "Portfolio Website",
    description: "Responsive React portfolio showcasing projects, skills, and resume download.",
    link: "#"
  }
];

const Projects = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectData.map((proj, idx) => (
          <div
            key={idx}
            className={`project-card ${active === idx ? "active" : ""}`}
            onClick={() => setActive(idx === active ? null : idx)}
          >
            <h3>{proj.title}</h3>
            {active === idx && (
              <div className="desc">
                <p>{proj.description}</p>
                <a href={proj.link} target="_blank" rel="noopener noreferrer">
                  <button>View Project</button>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
