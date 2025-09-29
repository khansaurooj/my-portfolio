import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Certificates from "./components/certificates";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
    </div>
  );
}

export default App;
