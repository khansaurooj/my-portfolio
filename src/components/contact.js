// import React from "react";

// const Contact = () => {
//   return (
//     <section id="contact">
//       <h2>Contact Me</h2>
//       <p>Email: khansaurooj912@gmail.com</p>
//       <p>LinkedIn: <a href="https://linkedin.com/in/khansaurooj" target="_blank" rel="noreferrer">linkedin.com/in/khansaurooj</a></p>
//       <p>GitHub: <a href="https://github.com/khansaurooj" target="_blank" rel="noreferrer">github.com/khansaurooj</a></p>
//     </section>
//   );
// };

// export default Contact;

import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p className="subtitle">Let’s connect! You can reach me via email or socials below.</p>
      
      <div className="contact-grid">
        <a href="mailto:khansaurooj912@gmail.com" className="contact-card">
          
          <span>Email</span>
          <p>khansaurooj912@gmail.com</p>
        </a>
        
        <a href="https://linkedin.com/in/khansaurooj" target="_blank" rel="noreferrer" className="contact-card">
         
          <span>LinkedIn</span>
          <p>/in/khansaurooj</p>
        </a>
        
        <a href="https://github.com/khansaurooj" target="_blank" rel="noreferrer" className="contact-card">
          
          <span>GitHub</span>
          <p>/khansaurooj</p>
        </a>
      </div>
    </section>
  );
};

export default Contact;
