import React from 'react';

const BackgroundColorChanger = ({ onBgColorChange }) => {
    const colors = ['#548d6c', '#cfab7c', '#e2d4ba', '#9d6d61', '#e5b98f', '#fff', '#000'];

    const changeBgColor = () => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        const newColor = colors[randomIndex];
        onBgColorChange(newColor);
        document.body.style.backgroundColor = newColor;
    };
    return (
        <img
            onClick={changeBgColor}
            className="logo"
            src={`${process.env.PUBLIC_URL}/img/logo-nav.jpg`}
            alt="Logo"
        />
    );
};

export default BackgroundColorChanger;
