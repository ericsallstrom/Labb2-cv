import React from 'react';
import useFetch from '../useFetch';
import '../pages/cv-style.css';

const CV = () => {
    const { data, error, isLoading } = useFetch(`${process.env.PUBLIC_URL}/data/db.json`);

    return (
        <section>
            {isLoading && <div className="site-message">Loading...</div>}
            {error && <div className="site-message">{error}</div>}
            {data && (
                <div className="cv-container global-container-style">
                    <div className="cv-content">
                        <div className="title-container">
                            <hr className="hyphen" />
                            <h2>Experience</h2>
                        </div>
                        <div className="data-container">
                            {data.cv_experience.map((experience) => (
                                <div key={experience.id}>
                                    <h3>{experience.company}</h3>
                                    <p>{experience.position}</p>
                                    <p className="year">
                                        <span>/</span> {experience.duration}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <hr className="divider" />
                    <div className="cv-content">
                        <div className="title-container">
                            <hr className="hyphen" />
                            <h2>Education</h2>
                        </div>
                        <div className="data-container">
                            {data.cv_education.map((education) => (
                                <div key={education.id}>
                                    <h3>{education.institution}</h3>
                                    <p>{education.diploma},</p>
                                    <p>{education.major}</p>
                                    <p className="year">
                                        <span>/</span> {education.graduation_year}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <hr className="divider" />
                    <div className="cv-content">
                        <div className="title-container">
                            <hr className="hyphen" />
                            <h2>Courses</h2>
                        </div>
                        <div className="data-container">
                            {data.cv_courses.map((course) => (
                                <div key={course.id}>
                                    <h3>{course.course_name}</h3>
                                    <p>{course.institution}</p>
                                    <p className="year">
                                        <span>/</span> {course.completion_year}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default CV;
