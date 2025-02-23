import React from 'react';
// Ensure the correct path for your CSS

const About = () => {
    return (
        <section id="about" className="about">
            <h2>About Me</h2>
            <div className="about-content">
                <div className="profile-image">
                    <img src="/path/to/your/profile_image.jpg" alt="Profile" />
                </div>
                <div className="about-description">
                    <p>A highly driven Computer Science enthusiast with a passion for technology, specializing in Python, Java, and full-stack web development.</p>
                    <p>I enjoy solving complex problems, collaborating on innovative projects, and continuously learning new technologies to enhance my skill set.</p>
                    <p>In my spare time, I love contributing to open-source projects and engaging with the tech community to share knowledge and experiences.</p>
                </div>
            </div>
        </section>
    );
};

export default About;
