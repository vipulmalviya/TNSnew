import React, { createContext, useEffect, useState } from 'react'
import { fetchMovies } from './api';


const MovieContext = createContext()
const MovieFetch = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [Watchlists, setWatchlists] = useState([]);
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

    useEffect(() => {
        const getWatchlist = async () => {
            try {
                const result = await fetchMovies("/watchlist-get");
                setWatchlists(result);
            } catch (error) {
                console.error('Failed to fetch watchlist', error);
            } finally {
                setLoading(false);
            }
        };
        getWatchlist();
    }, []);

    return (
        <MovieContext.Provider value={{ movies, loading , Watchlists}}>
            {children}
        </MovieContext.Provider>
    )
}

export { MovieFetch, MovieContext }
