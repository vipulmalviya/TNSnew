import axios from "axios";
const API = import.meta.env.VITE_APP_URI_API;
const BASE_URL = API;

// categories page function

export const fetchDataFromApi = async (url, type, selectedGenres) => {
    console.log(type, selectedGenres);
    try {
        const { data } = await axios.post(BASE_URL + url, {
            type, selectedGenres
        });
        return data;
    } catch (err) {
        console.error('Error fetching data from API:', err);
        return err;
    }
};
// movies fetch function
export const fetchMovies = async (url) => {
    try {
        const { data } = await axios.get(BASE_URL + url)
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
}


// fetch watchlist function

export const FetchWatchlist = async (url) => {
    try {
        const { data } = await axios.get(BASE_URL + url)
        return data;
    } catch (error) {
        console.log(err);
        return err;
    }
}


// delete watchlist

export const DeleteWatchlist = async (watchlistId) => {
    try {
        const response = axios.post(`${API}/watchlist-delete`, { watchlistId })
        return response;
    } catch (error) {
        console.log(err);
        return err;
    }

};