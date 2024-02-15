import React, { useEffect, useState } from 'react';
import '../pages/projects-style.css';
import useFetch from '../useFetch';
import { NavLink } from 'react-router-dom';

const Projects = () => {
    const { data, error, isLoading } = useFetch('https://api.github.com/users/ericsallstrom/repos');
    const [projects, setProjects] = useState([]);
    const [expandedProject, setExpandedProject] = useState(null);

    useEffect(() => {
        if (data) {
            // Sortera repositories baserat på created_at (från nyast till äldst)
            const sortedProjects = [...data].sort(
                (a, b) => new Date(b.created_at) - new Date(a.created_at)
            );
            setProjects(sortedProjects);
        }
    }, [data]);

    const handleProjectClick = (projectId) => {
        setExpandedProject((projectExpanded) => (projectExpanded === projectId ? null : projectId));

        setTimeout(() => {
            const expandedElement = document.querySelector('.project-info');

            if (expandedElement) {
                const scrollPosition = expandedElement.offsetTop - window.innerHeight / 2;

                window.scrollTo({
                    top: scrollPosition,
                    behavior: 'smooth',
                });
            }
        }, 0);
    };

    return (
        <section>
            {isLoading && <div>Loading projects...</div>}
            {error && <div style={{ color: 'red' }}>An error occurred: {error}</div>}
            {data && (
                <div className="projects-container global-container-style">
                    <h3 className="repo-label">GitHub Repositories</h3>
                    {projects.map((project) => (
                        <div className="project-content" key={project.id}>
                            <div
                                className={`project-header ${
                                    expandedProject === project.id ? 'active' : ''
                                }`}
                                onClick={() => {
                                    handleProjectClick(project.id);
                                }}
                            >
                                {project.name}
                                {expandedProject === project.id ? (
                                    <span className="material-symbols-outlined expand-icon">
                                        expand_less
                                    </span>
                                ) : (
                                    <span className="material-symbols-outlined expand-icon">
                                        expand_more
                                    </span>
                                )}
                            </div>
                            {expandedProject === project.id && (
                                <div className="project-info">
                                    <NavLink
                                        className="project-link"
                                        to={project.html_url}
                                        target="_blank"
                                    >
                                        Go To Project
                                    </NavLink>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Projects;
