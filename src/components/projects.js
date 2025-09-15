
import React, { useState } from "react";

const projectData = [
  
  {
    title: "Credit Score Classification System",
    description: "ANN + CatBoost ensemble to classify credit scores; preprocessing & deployment.",
    link: "https://colab.research.google.com/drive/1dqdpOegtFfoedPmOVNeBtnqRYvJC3Sfd?usp=sharing"
  },
  {
    title: "pizza_project",
    description: "Full-stack pizza ordering app with React frontend and Flask backend for browsing menu, managing cart, and placing orders.",
    link: "https://github.com/khansaurooj/pizza_project"
  },
  {
    title: "character counter",
    description: "A simple web application to count characters in real-time as you type..",
    link: "https://khansaurooj.github.io/character_counter/"
  },
  {
    title: "Resume Analyzer",
    description: "Resume_Analyzer is a web app that analyzes resumes against job descriptions, highlights matching/missing skills, and provides improvement suggestions using ML and GPT",
    link: "https://github.com/khansaurooj/Resume_analyzer"
  },
  {
    title: "Lisan Tutor",
    description: "Lisan-Tutor is an AI-powered multilingual tutor built with FastAPI, Whisper, Hugging Face translation models, Coqui TTS, etc., that lets users transcribe speech/video, translate it into another language, listen with synthesized speech and ask questions from the content.",
    link: "https://github.com/khansaurooj/lisan-tutor"
  },
  {
    title: "more Projects",
    description: "on github you can see them",
    link: "https://github.com/khansaurooj"
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
