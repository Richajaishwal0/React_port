import React, { useState } from "react";
import '../styles.css'; 
const skillData = [
  {
    title: "Languages",
    content: "Python, C, DSA in C++, Pandas, Numpy, Matplotlib, MYSQL, MongoDB, HTML, CSS, JS, React, Tailwind CSS, Bootstrap"
  },
  {
    title: "Tools",
    content: "Git, GitHub, Visual Studio Code, Jupyter Notebook, Google Colab"
  },
  {
    title: "AI and ML",
    content: "Proficient in Python-based ML libraries for supervised and unsupervised learning"
  }
];
const SkillCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % skillData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? skillData.length - 1 : prevIndex - 1
    );
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
        <div className="Card-container">
          <div className="card-button">
      <div className="Card">
        <div className="heading">
          <h2>{skillData[currentIndex].title}</h2>
        </div>
        <div className="Skill-content">
          <p>{skillData[currentIndex].content}</p>
        </div>
        
      </div>
      <div className="buttons-prev-next">
        <button className="prev" onClick={handlePrev}>⬅ Prev</button>
        <button className="next" onClick={handleNext}>Next ➡</button>
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

export default SkillCards;
