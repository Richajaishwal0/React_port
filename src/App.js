import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Home from "./components/Home";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
// import "./App.css";
import "./styles.css";

const App = () => {
  return (
    <>
      <Navbar />

      <Home />

      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
    </>
  );
};

export default App;
