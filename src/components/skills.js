
import React from "react";

const Skills = () => {
  const skills = [
    {
      title: "Frontend",
      items: ["HTML", "CSS", "JavaScript","Tailwindcss", "Bootstrap", "React.js"],
    },
    {
      title: "Backend",
      items: ["Flask",  "REST APIs"],
    },
    {
      title: "Databases",
      items: ["MySQL", "MongoDB"],
    },
    {
      title: "AI / ML",
      items: [
        "ANN",
        "Random Forest",
        "Gradient Boosting",
        "ARIMA / SARIMA",
        "CatBoost",
        "TensorFlow / Keras",
      ],
    },
    {
      title: "Tools",
      items: ["Git", "GitHub", "Colab", "VS Code", "Netlify", "Vercel"],
    },
  ];

  return (
    <section id="skills">
      <h2 className="skills-title">⚡ Skills</h2>
      <div className="skills-container">
        {skills.map((category, index) => (
          <div className="skill-card" key={index}>
            <h3>{category.title}</h3>
            <ul>
              {category.items.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
