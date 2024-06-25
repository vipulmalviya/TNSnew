import React from 'react'
import "./Card.css"
import { GrShareOption } from "react-icons/gr";


const WathlistOptionCard = ({ icon1, icon2, prop1, prop2, deletefunc}) => {

    return (
        <div className='wathlistOptions position-absolute d-flex align-items-center justify-content-center'>
            <ul className='h-100 d-flex align-items-center justify-content-center flex-column'>
                <li><button className='d-flex align-items-center justify-content-start'><img loading='lazy' src={icon1} alt="icone" /><p >{prop1}</p> </button></li>
                <li onClick={deletefunc}><button  className='d-flex align-items-center justify-content-start'> <img loading='lazy' src={icon2} alt="icone" /><p>{prop2}</p></button></li>
                <li style={{ whiteSpace: 'nowrap', }} className='h-100'> <button className=' d-flex align-items-center justify-content-start'> <GrShareOption /> <p >Share Watchlist</p> </button></li>
            </ul>
        </div>
    )
}

export default WathlistOptionCard
