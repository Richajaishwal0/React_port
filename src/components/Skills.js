import React, { useState } from "react";
// import './Skills.css'; // Make sure to include your CSS file

const skills = [
  {
    name: "Python",
    level: 90,
    description:
      "Expert in Python development, including libraries like NumPy, Pandas, and Flask.",
  },
  {
    name: "Java",
    level: 80,
    description: "Proficient in building applications with Java.",
  },
  {
    name: "JavaScript",
    level: 70,
    description: "Skilled in JavaScript frameworks such as React and Node.js.",
  },
  {
    name: "HTML/CSS",
    level: 90,
    description:
      "Experienced in creating responsive and interactive designs using HTML5 and CSS3.",
  },
  {
    name: "C",
    level: 75,
    description:
      "Proficient in developing web applications with React and Redux.",
  },
  {
    name: "Database/MySQL",
    level: 70,
    description:
      "Good understanding of backend development with MySQL and Firebase.",
  },
];

const Skills = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [skillsPerPage] = useState(3);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const indexOfLastSkill = currentPage * skillsPerPage;
  const indexOfFirstSkill = indexOfLastSkill - skillsPerPage;
  const currentSkills = skills.slice(indexOfFirstSkill, indexOfLastSkill);

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
  };

  const handleCloseModal = () => {
    setSelectedSkill(null);
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(skills.length / skillsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section id="skills" className="skills">
      <div className="heading">
        {" "}
        <h2>Competancies</h2>
      </div>

      <div className="Card-and-Content">
        <div className="Content-tech skill">
          These are technical skills that I have aquired thus far in my computer
          science career.
          <br /> I am not claiming to be a master in all of these skills, that
          would be amazing, but it is simply not true. <br />
          With that said, I am confident that I can hold a position that
          utilizes any of the following competencies and increase my mastery in
          any of these skills if needed.
        </div>
        <div className="Cards">
          <div className="Card">
            <div className="heading">
              <h2>Languages</h2>
            </div>
            <div className="Skill-content">
              <p>
                Python,C,DSA in C++,Pandas,Numpy,Matplotlib,
                <br />
                MYSQL,MongoDB,HTML,CSS,JS,React,Tailwind CSS, Bootstrap
              </p>
            </div>
          </div>
          <div className="Card">
            <div className="heading">
              <h2>Tools</h2>
            </div>
            <div className="Skill-content">
              <p>
                Git, GitHub, Visual Studio Code, Jupyter Notebook, Google Colab
                <br />
              </p>
            </div>
          </div>

          <div className="Card">
            <div className="heading">
              <h2>AI and ML</h2>
            </div>
            <div className="Skill-content">
              <p>
              Proficient in Python-based ML libraries for supervised and unsupervised learning
                <br />
              </p>
            </div>
            
          </div>
        </div>
      </div>

      {/* <div className="skills-list">
                {currentSkills.map(skill => (
                    <div className="skill-bar" key={skill.name} onClick={() => handleSkillClick(skill)}>
                        <div className="skill-name">{skill.name}</div>
                        <div className="circular-progress">
                            <svg className="progress-ring" width="100" height="100">
                                <circle
                                    className="progress-ring__circle"
                                    stroke="#d6d6d6"
                                    strokeWidth="10"
                                    fill="transparent"
                                    r="45"
                                    cx="50"
                                    cy="50"
                                />
                                <circle
                                    className="progress-ring__circle progress-ring__circle--progress"
                                    stroke="#4caf50" // Change the color to match your design
                                    strokeWidth="10"
                                    fill="transparent"
                                    r="45"
                                    cx="50"
                                    cy="50"
                                    style={{ strokeDasharray: `${skill.level} ${100 - skill.level}`, transition: 'stroke-dasharray 0.5s ease-in-out' }}
                                />
                            </svg>
                            <div className="percentage">{skill.level}%</div>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="pagination">
                <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
                <span>{currentPage}</span>
                <button onClick={handleNextPage} disabled={currentPage === Math.ceil(skills.length / skillsPerPage)}>Next</button>
            </div>

            {selectedSkill && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>{selectedSkill.name}</h3>
                        <p>{selectedSkill.description}</p>
                        <button onClick={handleCloseModal}>Close</button>
                    </div>
                </div> */}
      {/* )} */}
    </section>
  );
};

export default Skills;
