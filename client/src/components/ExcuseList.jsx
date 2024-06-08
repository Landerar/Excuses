import { useEffect, useState } from 'react';

const ExcuseList = () => {
    const [excuses, setExcuses] = useState([]);

    useEffect(() => {
        const fetchExcuses = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/excuses`);
                const data = await response.json();
                setExcuses (data);
            } catch (error) {
                console.error('Error fetching excuses', error);
            }
        };
        fetchExcuses();
    }, []);
    return (
        <div>
            <h1>Lista de Escusas</h1>
            <ul>
            {excuses.map((excuse) => (
                <li key={excuse.id}>{excuse.excuse}</li>
            ))}
            </ul>
        </div>
    );
};

export default ExcuseList;