import React, { useState, useEffect } from 'react';

const FetchProjects = () => {
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.github.com/users/ericsallstrom/repos')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setProjects(data);
                setIsLoading(false);
            })
            .catch((error) => {
                setError('Could not fetch data.');
                setIsLoading(false);
                console.error('Kunde inte läsa data', error);
            });
    }, []);

    return { projects, error, isLoading };
};

export default FetchProjects;
