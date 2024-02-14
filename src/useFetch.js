import { useEffect, useState } from 'react';

const useFetch = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.PUBLIC_URL}/data/db.json`);

                if (!response.ok) {
                    throw new Error('Could not fetch data for that resource');
                }

                const jsonData = await response.json();
                setData(jsonData);
                setError(null);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, isLoading, error };
};

export default useFetch;
