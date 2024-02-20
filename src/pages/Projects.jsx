import React, { useEffect, useRef, useState } from 'react';
import '../pages/projects-style.css';
import useFetch from '../useFetch';
import { NavLink } from 'react-router-dom';

const Projects = () => {
    const token = process.env.REACT_APP_GITHUB_TOKEN;
    const {
        data: githubData,
        error: githubError,
        isLoading: githubIsLoading,
    } = useFetch('https://api.github.com/users/ericsallstrom/repos', token);
    const {
        data: localData,
        error: localError,
        isLoading: localIsLoading,
    } = useFetch(`${process.env.PUBLIC_URL}/data/db.json`);

    const [projects, setProjects] = useState([]);
    const [expandedProject, setExpandedProject] = useState(null);
    const [projectDescriptions, setProjectDescriptions] = useState({});
    const expandedElementRef = useRef(null);

    useEffect(() => {
        if (githubData) {
            // Sortera repositories baserat på created_at (från nyast till äldst)
            const sortedProjects = [...githubData].sort(
                (a, b) => new Date(b.created_at) - new Date(a.created_at)
            );
            setProjects(sortedProjects);
        }
    }, [githubData]);

    useEffect(() => {
        if (localData) {
            setProjects(localData.projects);
            // reduce-metoden används för att skapa ett objekt ('descriptions'), där varje projekts namn används som
            // nyckel och dess tillhörande beskrivning som värde för att få tillgång till beskrivningen av varje projekt.
            const descriptions = localData.projects.reduce((acc, project) => {
                acc[project.name] = project.description;
                return acc;
            }, {});
            setProjectDescriptions(descriptions);
        }
    }, [localData]);

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
        console.log('handleProjectClick triggered with project id:', projectId);
        setExpandedProject((projectExpanded) => (projectExpanded === projectId ? null : projectId));
    };

    return (
        <section>
            {(githubIsLoading || localIsLoading) && (
                <div className="site-message">Loading projects...</div>
            )}
            {(githubError || localError) && (
                <div className="site-message">
                    {githubError} {localError}
                </div>
            )}
            {githubData && localData && (
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
                                    <p className="project-description">
                                        {projectDescriptions[project.name]}
                                    </p>
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
