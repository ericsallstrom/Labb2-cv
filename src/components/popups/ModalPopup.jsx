import React, { useState, useEffect } from 'react';
import './popup-style.css';

const ModalPopup = () => {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [userInput, setUserInput] = useState('');

    const handleKeyInput = (e) => {
        setUserInput((keyInput) => keyInput + e.key);
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyInput);

        return () => {
            window.removeEventListener('keydown', handleKeyInput);
        };
    }, []);

    useEffect(() => {
        checkUserInput(userInput);
    }, [userInput]);

    const checkUserInput = (input) => {
        if (input === 'python') {
            setPopupOpen(true);
            setUserInput('');
        }
    };

    const closePopup = () => {
        setPopupOpen(!isPopupOpen);
    };

    return (
        <div className={`popup-container ${isPopupOpen ? 'visible' : ''}`} id="popup">
            <div className="popup-content">
                <p className="popup-text">
                    Wenn ist das Nunstück git und Slotermeyer? Ja! Beiherhund das Oder die
                    Flipperwaldt gersput!
                </p>
                <button onClick={closePopup} className="global-btn-style popup-btn">
                    Close
                </button>
            </div>
        </div>
    );
};

export default ModalPopup;
