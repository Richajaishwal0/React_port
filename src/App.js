import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import './App.css';
import './styles.css';

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <header className="hero">
                <h1>Richa Jaishwal</h1>
                <p>Computer Science Enthusiast | Full-Stack Developer</p>
                <p className="tagline">Turning Ideas into Reality through Code</p>
                <a href="#projects" className="btn">View Projects</a>
            </header>

            
            <About/>
            <Skills />
            <Projects />
            <Achievements />
            <Contact />
        </div>
    );
};

export default App;
