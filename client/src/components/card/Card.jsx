import React, { Suspense, lazy, useEffect, useRef, useState } from 'react'
import "./Card.css"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const WatchlistModel = lazy(() => import("./WatchlistModel"))



const Card = ({ index, Poster, Title, watch, btn, mediaId, value, year, episode, elem }) => {
    const [ChangeBtn, setChangeBtn] = useState(false)
    const [showCards, setShowCards] = useState(false)
    // const [movieid, setMovieid] = useState(null)
    const [movieDetail, setMovieDetail] = useState("")
    const [cardid, setCardid] = useState("")

    const API = import.meta.env.VITE_APP_URI_API;

    // for update wathlist
    const PushMovieFunc = (e) => {
        axios.post(`${API}/update-watchlist`, {
            movieDetails: movieDetail,
            cardId: e.target.dataset,
        }).then(result => {
            alert(result);
            setChangeBtn(true)
            setShowCards(false)
        }).catch(err => console.log(err));
    }


    // for watchlist close when we click on outside the component
    const cardRef = useRef(null);
    function showCardFunc() {
        setMovieDetail(elem)
        setShowCards(!showCards)
    }
    const handleClickOutside = (event) => {

        if (cardRef.current && !cardRef.current.contains(event.target)) {
            setShowCards(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    // for show years in short form 
    const fullDate = year;
    const dateObject = new Date(fullDate);
    const fullyear = dateObject.getFullYear();


    // for navigte variable
    const navigate = useNavigate()

    return (

        <>
            <div ref={cardRef} className="singlecard" key={index}>
                {/* <div onClick={() => navigate(`/${mediaId}`)} className='cardbg d-flex' */}
                <div className='cardbg d-flex'
                    style={{
                        background: `url(${Poster})`
                    }}>
                    <div className='cardsBTN d-flex justify-content-between'>
                        <img style={{ margin: ".5rem .5rem", zIndex: 1, }} loading='lazy' height={"23px"} width={"23px"} src="images/done.svg" alt="doneicone" />
                    </div>
                    <div className='cardsBtn'>{
                        <button className='mainbtn' value={value} onClick={() => showCardFunc(elem)}>
                            {ChangeBtn ? <>{<img loading='lazy' height={"15px"} width={"15px"} src="images/fillbookmark.svg" alt="icone" />} Remove</> : <>{<img loading='lazy' height={"15px"} width={"15px"} src="images/darkbookmark.svg" alt="icone" />} Add to Watchlist</>}
                        </button>
                    }
                    </div>
                    {showCards && (<Suspense fallback={<div>lodaing.....</div>}> <WatchlistModel data={watchlists} passFunction={PushMovieFunc} /></Suspense>)}
                </div>

                <div className='movieDetails d-flex justify-content-between flex-column'>
                    <div className=' d-flex justify-content-between'>
                        <span className='moviespan position-relative gap-1 h-75  d-flex justify-content-start align-items-start flex-column '>
                            <h4 data-toggle="tooltip" title={Title}>{Title}</h4>
                            {btn ? <p>{fullyear}</p> : <p>{episode}</p>}
                        </span>
                        <span className='logospan position-relative gap-1 h-75  d-flex flex-column justify-content-start align-items-center'>
                            <img loading='lazy' height={"20px"} src="images/latestlogo.svg" alt="tnslogo" />
                            <span className="number">{watch}</span>
                        </span>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Card
