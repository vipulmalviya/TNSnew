import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { IoAddOutline } from 'react-icons/io5';

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

    console.log(watchlists);
    return (
        <>
            <div className='watchlistModel d-flex align-items-center justify-contente-center'>
                <ul className='watchlistModel_ul d-flex flex-column '>
                    <li><button className='d-flex align-items-center justify-content-start gap-2'><IoAddOutline /> Create watchlist</button></li>
                        <hr />
                    {watchlists?.map((elem, index) => <li key={index} className='d-flex align-items-center justify-content-start'>
                        <button onClick={passFunction} data-id={elem._id} className='d-flex align-items-center justify-content-start'>
                            {elem.watchlistName}
                        </button>
                    </li>)}
                </ul>
            </div>
        </>
    )
}

export default WatchlistModel
