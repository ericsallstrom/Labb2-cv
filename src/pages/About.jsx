import React from 'react';
import FetchJson from '../components/FetchJson';
import '../pages/about-style.css';

const About = () => {
    const { data, error, isLoading } = FetchJson();

    return (
        <section>
            {isLoading && <div className="site-message">Loading...</div>}
            {error && <div className="site-message">{error}</div>}
            {data && (
                <div className="about-container global-container-style">
                    <h2 className="global-title-style about-title">{data.about.title}</h2>
                    <p>{data.about.intro}</p>
                    <br />
                    <p>{data.about.as_a_developer}</p>
                    <br />
                    <p>{data.about.passions}</p>
                </div>
            )}
        </section>
    );
};

export default About;
