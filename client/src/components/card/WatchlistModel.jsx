import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { IoAddOutline } from 'react-icons/io5';
import { MovieContext } from '../../utils/MovieFetch';
import { useNavigate } from 'react-router-dom';


const WatchlistModel = ({ passFunction }) => {


    const navigate = useNavigate()
    const { Watchlists } = useContext(MovieContext);
    function navigateFuction() {
        navigate("/yourWatchlist");
    }

    return (
        <>
            <div className='watchlistModel d-flex align-items-center justify-contente-center'>
                <ul className='watchlistModel_ul d-flex flex-column'>
                    <li><button className='d-flex align-items-center justify-content-start gap-2' onClick={navigateFuction}><IoAddOutline />Create watchlist</button></li>
                    <hr />
                    {Watchlists?.map((elem, index) => <li key={index} className='d-flex align-items-center justify-content-start'>
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
