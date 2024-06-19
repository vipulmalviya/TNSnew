import axios from 'axios';
import React, { useEffect, useState } from 'react'

const WatchlistModel = ({ passFunction }) => {

    const [watchlists, setWatchlists] = useState([]);
    const API = import.meta.env.VITE_APP_URI_API;

    const fetchWatchlist = async () => {
        try {
            const url = `${API}/watchlist-get`;
            const response = await axios.get(url);
            setWatchlists(response.data);
        } catch (error) {
            console.error('Error fetching watchlist data:', error);
        }
    };

    useEffect(() => {
        fetchWatchlist();
    }, []);

    return (
        <>
            <div className='watchlistModel d-flex align-items-center justify-contente-center p-3'>
                <ul className='watchlistModel_ul'>
                    {watchlists?.map((elem, index) => <li onClick={() => passFunction(elem._id)} key={index}>{elem.watchlistName}</li>)}
                </ul>
            </div>
        </>
    )
}

export default WatchlistModel
