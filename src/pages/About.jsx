import React from 'react';
import useFetch from '../useFetch';
import '../pages/about-style.css';

const About = () => {
    const { data, error, isLoading } = useFetch(`${process.env.PUBLIC_URL}/data/db.json`);

    return (
        <section>
            {isLoading && <div>Loading...</div>}
            {error && <div style={{ color: 'red' }}>An error occured: {error}</div>}
            {data && (
                <div className="about-container global-container-style">
                    <h2 className="about-title">{data.about.title}</h2>
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
