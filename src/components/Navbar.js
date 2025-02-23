import React from 'react';
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <h1>RJ</h1> {/* Replace with your logo if you have one */}
            </div>
            <ul className="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
