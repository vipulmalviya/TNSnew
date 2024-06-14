import React from 'react'
import "./Card.css"
import { GrShareOption } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";
import { HiOutlinePencil } from "react-icons/hi2";
import { PiCaretRightLight } from "react-icons/pi";

const WathlistOptionCard = ({icon1 ,icon2 , prop1 , prop2}) => {
    return (
        <div className='wathlistOptions position-absolute d-flex align-items-center justify-content-center'>
            <ul className='d-flex align-items-center justify-content-center flex-column'>
                <li><img loading='lazy' src={icon1} alt="" />{prop1}</li>
                <li><img loading='lazy' src={icon2} alt="" />{prop2}</li>
                <li><GrShareOption /> Share Watchlist </li>
            </ul>
        </div>
    )
}

export default WathlistOptionCard
