import React, { createContext, useEffect, useState } from 'react'
import { fetchMovies } from './api';


const MovieContext = createContext()
const MovieFetch = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getMovies = async () => {
            try {
                const result = await fetchMovies("/api/movies");
                setMovies(result);
            } catch (error) {
                console.error('Failed to fetch movies', error);
            } finally {
                setLoading(false);
            }
        };

        getMovies();
    }, []);

    return (
        <MovieContext.Provider value={{ movies, loading }}>
            {children}
        </MovieContext.Provider>
    )
}

export { MovieFetch, MovieContext }
