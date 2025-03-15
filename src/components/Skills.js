import React, { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../styles.css";
import "./skillbar.css";

const skillData = [
  {
    title: "Languages",
    content:
      "Python, C, DSA in C++, Pandas, Numpy, Matplotlib, MySQL, MongoDB, HTML, CSS, JavaScript, React, Tailwind CSS, Bootstrap",
  },
  {
    title: "Tools",
    content: "Git, GitHub, Visual Studio Code, Jupyter Notebook, Google Colab",
  },
  {
    title: "AI and ML",
    content:
      "Proficient in Python-based ML libraries for supervised and unsupervised learning",
  },
];

const progressData = [
  { skill: "Programming", percentage: 95 },
  { skill: "Database Management", percentage: 80 },
  { skill: "Web Development", percentage: 70 },
  { skill: "Machine Learning", percentage: 60 },
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
        <h2>Competencies</h2>
      </div>

      <div className="Card-and-Content">
        <div className="Content-tech skill">
          <p>
            These are the technical skills I have acquired in my computer
            science journey. While I don't claim mastery over all of them, I am
            confident in my ability to learn and adapt as needed.
          </p>
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
              <button className="prev" onClick={handlePrev}>
                ⬅ Prev
              </button>
              <button className="next" onClick={handleNext}>
                Next ➡
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Circular Progress Bars */}
      <div className="circular_progress">
        <div className="responsive-container-block big-container">
          <div className="responsive-container-block container">
            <p className="text-blk section-headtext">Skill Proficiency</p>
            <p className="text-blk section-subheadtext">
              A visual representation of my proficiency in different skill
              areas.
            </p>
            <div className="responsive-container-block">
              {progressData.map((skill, index) => (
                <div
                  className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12"
                  key={index}
                >
                  <div className="card">
                    <CircularProgressbar
                      value={skill.percentage}
                      text={`${skill.percentage}%`}
                      styles={buildStyles({
                        textColor: "#fff",
                        pathColor: "#730b33",
                        trailColor: "#333",
                      })}
                    />
                    <p className="text-blk card-head">{skill.skill}</p>
                    <p className="text-blk card-text">
                      {skill.skill === "Programming"
                        ? "Strong command over multiple programming languages."
                        : skill.skill === "Database Management"
                        ? "Skilled in MySQL and MongoDB database operations."
                        : skill.skill === "Web Development"
                        ? "Proficient in front-end and back-end web technologies."
                        : "Experience with Python ML libraries and AI models."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillCards;
