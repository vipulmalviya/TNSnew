import axios from "axios";
const API = import.meta.env.VITE_APP_URI_API;



export const MovieFetch = async (params) => {
    console.log(params);
    try {
        const response = await axios.post(`${API}/movies-find`, { params });
        return response.data; 
    } catch (err) {
        console.error('Error fetching movies:', err);
        throw err;
    }
}