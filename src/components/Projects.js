import React from 'react';


const projects = [
    {
        title: "AI-Based Voting System",
        description: "Developed an AI-driven voting platform using Flask, HTML, and Firebase.",
    },
    {
        title: "Flight Reservation System",
        description: "Built a Python Tkinter-based reservation system.",
    },
    {
        title: "Weather App",
        description: "Created a real-time weather app using APIs.",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <h2>Projects</h2>
            <div className="project-cards">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
