import React from "react";

// Import only preview images
import cert1Img from "./AI.jpg";
import cert2Img from "./RAG.jpg";
import cert3Img from "./tabeer certificate.jpg";
import cert3Img from "./flutter-certificat.jpg";


const certificatesData = [
  {
    title: "AI Learning Certificate",
    image: cert1Img,
    pdf: "./AI.pdf",
  },
  {
    title: "RAG Learning Certificate",
    image: cert2Img,
    pdf: "./RAG.pdf",
  },
  {
    title: "Tabeer Certification (FJWU GDGOC)",
    image: cert3Img,
    pdf: "./tabeer certificate.pdf",
  },
    {
    title: "Flutter Certificate ",
    image: cert3Img,
    pdf: "./flutter_certificate.pdf",
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="certificates-section">
      <h2>My Certificates</h2>
      <div className="certificates-grid">
        {certificatesData.map((cert, idx) => (
          <div key={idx} className="certificate-card">
            <h3>{cert.title}</h3>
            <img
              src={cert.image}
              alt={cert.title}
              className="certificate-thumb"
            />
            <div className="desc">
              <a href={cert.pdf} target="_blank" rel="noopener noreferrer">
                <button>View Certificate (PDF)</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
