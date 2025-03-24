import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../styles.css";
import "./skillbar.css";

const progressData = [
  { skill: "Programming", percentage: 90 },
  { skill: "Database Management", percentage: 80 },
  { skill: "Web Development", percentage: 85 },
  { skill: "AI/ML", percentage: 75 },
];

const SkillCards = () => {
  

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

      </div>

      <div className="circular_progress">
        <div className="responsive-container-block big-container">
          <div className="responsive-container-block container">
            
          
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
