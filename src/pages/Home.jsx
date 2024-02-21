import React from 'react';
import '../pages/home-style.css';

const Home = () => {
    return (
        <div className="home-content">
            <div className="hex-container">
                <div className="hexagon top"></div>
                <div className="hexagon left"></div>
                <div className="hexagon right"></div>
                <h2 className="home-title">Eric Sällström - Software Engineer</h2>
            </div>
        </div>
    );
};

export default Home;
