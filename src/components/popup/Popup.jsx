import React from 'react';
import '../popup/popup-style.css';

const Popup = ({ closePopup }) => {
    return (
        <div className="popup-container visible" id="popup">
            <div className="popup-content">
                <p className="popup-text">Your message have been sent.</p>
                <button onClick={closePopup} className="global-btn-style popup-btn">
                    Close
                </button>
            </div>
        </div>
    );
};

export default Popup;
