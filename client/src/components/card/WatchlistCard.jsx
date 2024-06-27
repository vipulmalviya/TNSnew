import React, { Component, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../buttons/Button'
import "./Card.css"
import WathlistOptionCard from './WathlistOptionCard'
import { IoMdMore } from 'react-icons/io'
import { FiMoreHorizontal } from 'react-icons/fi'
import axios from 'axios'
import Modal from './Modal'


const WatchlistCard = ({ ManageCardId }) => {

    // const cardsArray = [
    //     {
    //         watchlistTitle: "Crime - Thriller Movies",
    //         whoCreateWathlist: "Watchlist - Rahul Malviya",
    //         avatarurl: "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1716545127~exp=1716545727~hmac=b06f7f7f6ababecdd569f3849519e0f8971d75936cab68ca367eca074bbea299",
    //         bgcolor: "#282829"

    //     },
    //     {
    //         watchlistTitle: "Crime - Thriller Movies",
    //         whoCreateWathlist: "Watchlist - Rahul Malviya",
    //         avatarurl: "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1716545127~exp=1716545727~hmac=b06f7f7f6ababecdd569f3849519e0f8971d75936cab68ca367eca074bbea299",
    //         bgcolor: "#444D0D",


    //     },
    //     {
    //         watchlistTitle: "Crime - Thriller Movies",
    //         whoCreateWathlist: "Watchlist - Rahul Malviya",
    //         avatarurl: "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1716545127~exp=1716545727~hmac=b06f7f7f6ababecdd569f3849519e0f8971d75936cab68ca367eca074bbea299",
    //         bgcolor: "#294D0D",

    //     },
    //     {
    //         watchlistTitle: "Crime - Thriller Movies",
    //         whoCreateWathlist: "Watchlist - Rahul Malviya",
    //         avatarurl: "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1716545127~exp=1716545727~hmac=b06f7f7f6ababecdd569f3849519e0f8971d75936cab68ca367eca074bbea299",
    //         bgcolor: "#4D2C0D",

    //     }
    // ]

    const navigate = useNavigate()
    const API = import.meta.env.VITE_APP_URI_API;

    // for options model close outside the Component
    const [ShowOption, setShowOption] = useState(false)
    const wrapperRef = useRef(null)
    function handleClickOutside(event) {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            setShowOption(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    // fot fetch wathclists 
    const [watchlists, setWatchlists] = useState([]);

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

    // for delete watchlists

    const [watchlistId, setWatchlistId] = useState('')

    const getCardId = (event) => {
        setWatchlistId(event)
    };

    const DeleteWatchlist = async () => {
        axios.post(`${API}/watchlist-delete`, { watchlistId }).then(result => {
            console.log(result)
        }).catch((err) => {
            console.error(err);
        })
    };


    // console.log(first.pop(1));


    // for handle navigation on wathliscards length
    if (watchlists.length > 0) {
        navigate('/yourWatchlist');
    } else {
        navigate('/watchlistPage');
    }



    // const colorArray = ["#282829", "#444D0D", "#294D0D", "#4D2C0D"];
    // const getRandomColor = () => colorArray[Math.floor(Math.random() * colorArray.length)];

    const [ModalShow1, setModalShow1] = useState(false)

    function modalshow1() {
        setModalShow1(!ModalShow1)
    }

    return (
        <>
            {watchlists.map((elem, index) =>
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
                        <button onClick={() => getCardId(elem._id)} className="position-relative"><FiMoreHorizontal onClick={() => setShowOption(index === ShowOption ? -1 : index)} style={{ color: "#FFFF", }} />
                            {ShowOption === index && <WathlistOptionCard deletefunc={DeleteWatchlist} updateFunc={modalshow1} icon1={"images/pen.svg"} icon2={"images/deletegray.svg"} prop1={"Rename"} prop2={"Delete List"} />}
                        </button>
                    </div>
                </div>
            )}
            {ModalShow1 && <Modal id={watchlistId} onclick2={modalshow1} detail={"Edite details"} />}
        </>
    )
}

export default WatchlistCard
