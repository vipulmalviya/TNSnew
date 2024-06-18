import React, { useState } from 'react'
import "./Card.css"
import Button from '../buttons/Button'
import { Navigate, useNavigate } from 'react-router-dom'
import WatchlistModel from './WatchlistModel'



const Card = ({ index, Poster, Title, watch, btn, mediaId, value, year, episode }) => {
    const [ChangeBtn, setChangeBtn] = useState(false)
    const [SelectWatchlist, setSelectWatchlist] = useState()
 
    const selectWatchlistFunc = (params) => {
        console.log(params.target.dataset);
        setSelectWatchlist(true);
        setChangeBtn(true);
    }



    const fullDate = year;
    const dateObject = new Date(fullDate);
    const fullyear = dateObject.getFullYear();

    const navigate = useNavigate()

    return (

        <>
            {SelectWatchlist && <WatchlistModel />}
            <div className="singlecard" key={index}>
                {/* <div onClick={() => navigate(`/${mediaId}`)} className='cardbg d-flex' */}
                <div  className='cardbg d-flex'
                    style={{
                        background: `url(${Poster})`
                    }}>
                    <img style={{ margin: ".5rem .5rem", zIndex: 1, }} loading='lazy' height={"23px"} width={"23px"} src="images/done.svg" alt="doneicone" />
                    <div className='cardsBtn'>{
                        <button className='mainbtn' onClick={selectWatchlistFunc} data-id={mediaId} value={value} colorProp={ChangeBtn}>
                            {ChangeBtn ? <>{<img loading='lazy' height={"15px"} width={"15px"} src="images/fillbookmark.svg" alt="icone" />} Remove</> : <>{<img loading='lazy' height={"15px"} width={"15px"} src="images/darkbookmark.svg" alt="icone" />} Add to Watchlist</>}
                        </button>
                    }
                    </div>
                </div>
                <div className='movieDetails d-flex justify-content-between flex-column'>
                    <div className=' d-flex justify-content-between'>
                        <span className='moviespan position-relative gap-1 h-75  d-flex justify-content-start align-items-start flex-column '>
                            <h4 data-toggle="tooltip" title={Title} >{Title}</h4>
                            {btn ? <p>{fullyear}</p> : <p>{episode}</p>}
                        </span>
                        <span className='logospan position-relative gap-1 h-75  d-flex flex-column justify-content-start align-items-center'>
                            <img loading='lazy' height={"20px"} src="images/latestlogo.svg" alt="tnslogo" />
                            <span className="number">{watch}</span>
                        </span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Card
