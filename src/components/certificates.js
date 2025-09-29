import React, { useState } from "react";

// Import certificate previews (images) and PDFs
import cert1Img from "AI.jpg";
import cert1PDF from "AI.pdf";

import cert2Img from "RAG.jpg";
import cert2PDF from "RAG.pdf";

import cert3Img from "tabeer certificate.jpg";
import cert3PDF from "tabeer certificate.pdf";

const certificatesData = [
  {
    title: "AI Learning Certificate",
    image: cert1Img,
    pdf: cert1PDF,
  },
  {
    title: "RAG learning Certificate",
    image: cert2Img,
    pdf: cert2PDF,
  },
  {
    title: "tabeer certification as FJWU_GDGOC",
    image: cert3Img,
    pdf: cert3PDF,
  },
];

const Certificates = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="certificates" className="certificates-section">
      <h2>My Certificates</h2>
      <div className="certificates-grid">
        {certificatesData.map((cert, idx) => (
          <div
            key={idx}
            className={`certificate-card ${active === idx ? "active" : ""}`}
            onClick={() => setActive(idx === active ? null : idx)}
          >
            <h3>{cert.title}</h3>
            <img
              src={cert.image}
              alt={cert.title}
              className="certificate-preview"
            />
            {active === idx && (
              <div className="desc">
                <a href={cert.pdf} target="_blank" rel="noopener noreferrer">
                  <button>View Certificate (PDF)</button>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
