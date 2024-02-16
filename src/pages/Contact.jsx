import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Popup from '../components/popup/Popup';
import './contact-style.css';

const Contact = () => {
    const form = useRef();
    const [isPopupVisible, setPopupVisible] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_ocomo9m', 'template_zk3z25m', form.current, {
                publicKey: 'IUklX34lVfAN0cbvy',
            })
            .then(
                (result) => {
                    setPopupVisible(true);
                    e.target.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

    const closePopup = () => {
        setPopupVisible(false);
    };

    return (
        <section className="global-container-style contact-container">
            <h2 className="global-title-style contact-title">Let's talk!</h2>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
                <input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    required
                    className="contact-input"
                />
                <input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    required
                    className="contact-input"
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    cols="30"
                    rows="10"
                    className="contact-input"
                    required
                ></textarea>
                <button type="submit" className="global-btn-style contact-btn">
                    Send Message
                </button>
            </form>
            {isPopupVisible && <Popup closePopup={closePopup} />}
        </section>
    );
};

export default Contact;
