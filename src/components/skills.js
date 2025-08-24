// import React from "react";

// const Skills = () => {
//   return (
//     <section id="skills">
//       <h2>Skills</h2>
//       <ul>
//         <li>Frontend: HTML, CSS, JavaScript, Bootstrap, React.js</li>
//         <li>Backend: Flask, Django, REST APIs</li>
//         <li>Databases: MySQL, MongoDB</li>
//         <li>AI/ML: ANN, Random Forest, Gradient Boosting, ARIMA, SARIMA, CatBoost, TensorFlow/Keras</li>
//         <li>Tools: Git, GitHub, Colab, VS Code, Netlify, Vercel</li>
//       </ul>
//     </section>
//   );
// };

// export default Skills;



import React from "react";

const Skills = () => {
  const skills = [
    {
      title: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "Bootstrap", "React.js"],
    },
    {
      title: "Backend",
      items: ["Flask", "Django", "REST APIs"],
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
