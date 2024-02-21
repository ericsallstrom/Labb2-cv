import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import FetchProjects from '../components/FetchProjects';
import '../pages/projects-style.css';

const Projects = () => {
    const { projects: data, error, isLoading } = FetchProjects();
    const [projects, setProjects] = useState([]);
    const [expandedProject, setExpandedProject] = useState(null);
    const expandedElementRef = useRef(null);

    useEffect(() => {
        if (data) {
            // Sortera repositories baserat på created_at (från nyast till äldst)
            const sortedProjects = [...data].sort(
                (a, b) => new Date(b.created_at) - new Date(a.created_at)
            );
            setProjects(sortedProjects);
        }
    }, [data]);

    useEffect(() => {
        if (expandedProject !== null) {
            const expandedElement = document.querySelector('.project-info');

            if (expandedElement) {
                expandedElementRef.current = expandedElement;
                expandedElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }, [expandedProject]);

    const handleProjectClick = (projectId) => {
        setExpandedProject((projectExpanded) => (projectExpanded === projectId ? null : projectId));
    };

    return (
        <section>
            {isLoading && <div className="site-message">Loading projects...</div>}
            {error && <div className="site-message">{error}</div>}
            {data && (
                <div className="projects-container global-container-style">
                    <h2 className="repo-label">GitHub Repositories</h2>
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
                                <div className="project-info" ref={expandedElementRef}>
                                    {project.description && (
                                        <p className="project-description">{project.description}</p>
                                    )}
                                    <NavLink
                                        className="global-btn-style project-link"
                                        to={project.html_url}
                                        target="_blank"
                                    >
                                        View Repository
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
