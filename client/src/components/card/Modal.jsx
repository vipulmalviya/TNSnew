import React, { useEffect, useRef, useState } from 'react'
import "./Card.css"
import Button from '../buttons/Button'
import ButtonSec from '../buttons/ButtonSec'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const Modal = ({ detail, onclick2, prop, id }) => {
    const API = import.meta.env.VITE_APP_URI_API; // Ensure this points to your backend API
    const navigate = useNavigate();

    const [watchlistName, setWatchlistName] = useState('');
    const [watchlistAvatar, setWatchlistAvatar] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png");

    const handleWatchlistName = (e) => {
        setWatchlistName(e.target.value);
    };

    const handleWatchlistImgChange = (e) => {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            setWatchlistAvatar(reader.result);
        };
        reader.onerror = error => {
            console.log("error", error)
        }
    };

    // for uploade watchlist function 
    const requesthandler = (e) => {
        e.preventDefault();
        axios.post(`${API}/watchlist-upload`, { watchlistName, watchlistAvatar })
            .then(response => {
                console.log(response.data);
                if (response.data === 'success') {
                    navigate('/yourWatchlist');
                }
            })
            .catch(error => {
                console.error('Error saving watchlist:', error);
            });
    };

    // for edite watchlist 


    const watchlistEditFunc = (e) => {
        e.preventDefault();
        axios.post(`${API}/watchlist-update`, {
            cardId: id,
            watchlistName,
            watchlistAvatar
        }).then(result => {
            alert(result.data)
        }).catch(error => { console.error(error); })
    }


   

    return (
        <section  className='modal d-flex align-content-center justify-content-center'>
            <div className='modal_warrper d-flex align-items-center justify-content-between'>
                <div className='modal-right flex-column d-flex align-items-start justify-content-between'>
                    <h1>{detail}</h1>
                    <form>
                        <input
                            className='modal-input'
                            value={watchlistName}
                            onChange={handleWatchlistName}
                            type="text"
                            placeholder='Add a title in 5 words...'
                        />
                    </form>
                    <div className='d-flex align-items-center justify-content-start gap-3'>
                        {prop ? <Button onclick={requesthandler}>{"continue"}</Button> :
                            <button className='mainbtn' onClick={watchlistEditFunc}>{"save"}</button>}
                        <Link onClick={onclick2} className='backbtn' >Cancel</Link>
                    </div>
                </div>
                <div className='modal-left d-flex flex-column align-items-center justify-content-between'>
                    <h3>Pick an avatar</h3>
                    <div className='watchlistAvatar'>
                        <img
                            loading='lazy'
                            height={"60px"}
                            width={"60px"}
                            src={watchlistAvatar}
                            alt=""
                        />
                    </div>
                    <div className='mainbtnSec position-relative'>
                        <input
                            className='chooseAvatarInput w-100 z-1 opacity-0 position-absolute'
                            type="file"
                            onChange={handleWatchlistImgChange}
                            accept="images/*"
                        />
                        Avatar Gallery
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Modal;