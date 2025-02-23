import React from 'react';

const achievements = [
    "5-star rating in Python and Java on HackerRank",
    "Participated in various badminton tournaments",
    "Won multiple public speaking competitions",
    "Won two marathons and placed in sprint races",
];

const Achievements = () => {
    return (
        <section id="achievements" className="achievements">
            <h2>Achievements</h2>
            <ul>
                {achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                ))}
            </ul>
        </section>
    );
};

export default Achievements;
