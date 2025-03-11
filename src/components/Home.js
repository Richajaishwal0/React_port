import React from "react";
import "./Home.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
const Home = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="Home-page">
          <div className="hero-text">
            <h1>
              I&apos;m Richa, a <br />
              <span className="gradient-text">Computer Science Student</span>
            </h1>
            <p>
              "I am a passionate second year Btech Student. I am hands on
              Experience on making websites, webdesignes and am interested in
              learning AI and ML"
            </p>
            <div className="states">
              <div className="stat-item">
                <h2>2+</h2>
                <p>Web Development: Years of Experience</p>
              </div>

              <div className="stat-item" id="bord">
                <h2>10+</h2>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h2>2+</h2>
                <p>Open Source & Interships</p>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <img src={require("../assets/Profile.jpg")} alt="Profile" />
            <div className="flex justify-center gap-4 p-4 bg-transparent icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
              >
                <FaGithub />
              </a>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
