import React from 'react';
import '../pages/home-style.css';

const Home = () => {
    return (
        <div className="home-content">
            <div className="hex-container">
                <div className="hexagon top"></div>
                <div className="hexagon left"></div>
                <div className="hexagon right"></div>
            </div>
            <h2>Eric Sällström - Software Engineer</h2>
        </div>
    );
};

export default Home;
