import { useEffect, useState } from 'react';

const useFetch = (url, token) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await fetch(`${process.env.PUBLIC_URL}/data/db.json`);
                const response = await fetch(url, {
                    headers: {
                        Authorization: `token ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const jsonData = await response.json();
                setData(jsonData);
                setError(null);
            } catch (error) {
                setError(`An error occurred: ${error.message}`);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [url, token]);

    return { data, isLoading, error };
};

export default useFetch;
