import axios from "axios";
const API = import.meta.env.VITE_APP_URI_API;
const BASE_URL = API;

export const fetchDataFromApi = async(url, params)=>{
    try{
        const {data} = await axios.get(BASE_URL + url, {
         headers,
         params 
        })
        return data;
    } catch(err){
        console.log(err);
        return err;
    }
}

export const fetchMovies = async(url)=>{
    try{
        const {data} = await axios.get(BASE_URL + url)
        return data;
    } catch(err){
        console.log(err);
        return err;
    }
}

