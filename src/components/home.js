// import React from "react";
// import SpiralBackground from "./SpiralBackground";


// const Home = () => {
//   return (
//     <section
//       id="home"
//       className="home-section"
//       style={{ position: "relative", overflow: "hidden" }}
//     >
//       {/* ✅ use SpiralBackground here */}
//       <SpiralBackground />

//       <div className="overlay"></div>
//       <div className="content">
//         <h1>
//           Hello, I'm <span>Khansa Urooj</span>
//         </h1>
//         <p>Full-Stack Web Developer with AI/ML Integration</p>
//         <a href="/Resume.pdf" download>
//           <button>Download Resume</button>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Home;


import React from "react";
import SpiralBackground from "./SpiralBackground";
import ibmBadge from "./RAG_IBM.png"; // ✅ place your badge image inside /src/assets

const Home = () => {
  return (
    <section
      id="home"
      className="home-section"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* ✅ Spiral background */}
      <SpiralBackground />

      <div className="overlay"></div>

      {/* ✅ IBM Badge positioned below navbar, left side */}
      <div className="badge-corner">
        <a
          href="https://www.credly.com/badges/xxxx" // 🔗 replace with your real badge link
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={ibmBadge}
            alt="IBM Certified RAG Badge"
            className="ibm-badge"
          />
        </a>
      </div>

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
