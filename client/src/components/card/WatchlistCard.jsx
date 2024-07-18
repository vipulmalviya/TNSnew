import React, { Component, useEffect, useRef, useState } from 'react'
import "./Card.css"
import WathlistOptionCard from './WathlistOptionCard'
import { FiMoreHorizontal } from 'react-icons/fi'
import Modal from './Modal'
import { useDispatch, useSelector } from 'react-redux'
import { deleteWatchList, getWatchlist } from '../../store/watchlist/watchlistSlice'


const WatchlistCard = ({ ManageCardId }) => {

    const API = import.meta.env.VITE_APP_URI_API;

    // for options model close outside the Component
    const [ShowOption, setShowOption] = useState(false)
    console.log(ShowOption);
    const wrapperRef = useRef(null)
    function handleClickOutside(event) {
        if (wrapperRef.current && wrapperRef.current.contains(event.target)) {
            setShowOption(true);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    // fot fetch wathclists 
    // for delete watchlists

    const [watchlistId, setWatchlistId] = useState('')

    const getCardId = (id) => {
        setWatchlistId(id)
    };

    const dispatch = useDispatch();
    const watchlist = useSelector(state => state.watchlist.value);

    useEffect(() => {
        dispatch(getWatchlist());
    }, [dispatch]);

    const handleDelete = () => {
        dispatch(deleteWatchList(watchlistId));
        alert(watchlistId)
    }
  
    // for handle navigation on wathliscards length

    const [ModalShow1, setModalShow1] = useState(false)

    function modalshow1() {
        setModalShow1(!ModalShow1)
    }


    return (
        <>
            {watchlist && watchlist.map((elem, index) =>
                <div ref={wrapperRef} key={index} className='Card-wrapper d-flex flex-column align-items-start justify-content-center gap-3' >
                    <div className="watchlistAvatar">
                        <img loading='lazy' height={"60px"} width={"60px"} src={elem.watchlistAvatar} alt="Watchlist Avatar" />
                    </div>
                    <div className="cardHeader">
                        <h2>{elem.watchlistName}</h2>
                        <p>admin</p>
                    </div>
                    <div className='d-flex align-items-center justify-content-center gap-3'>
                        <button className='mainbtn' onClick={() => ManageCardId(elem._id)}>Manage</button>
                        <button onClick={() => getCardId(elem._id)} className="position-relative"><FiMoreHorizontal onClick={() => setShowOption(index === ShowOption ? 0 : index )} style={{ color: "#FFFF", }} />
                            {ShowOption === index && <WathlistOptionCard  deletefunc={handleDelete} updateFunc={modalshow1} icon1={"images/pen.svg"} icon2={"images/deletegray.svg"} prop1={"Rename"} prop2={"Delete List"} />}
                        </button>
                    </div>
                </div>
            )}
            {ModalShow1 && <Modal id={watchlistId} onclick2={modalshow1} detail={"Edite details"} />}
        </>
    )
}

export default WatchlistCard