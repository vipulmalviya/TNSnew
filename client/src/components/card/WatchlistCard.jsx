import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../buttons/Button'
import "./Card.css"
import WathlistOptionCard from './WathlistOptionCard'
import { IoMdMore } from 'react-icons/io'
import { FiMoreHorizontal } from 'react-icons/fi'


const WatchlistCard = ({ openList }) => {

    const cardsArray = [
        {
            watchlistTitle: "Crime - Thriller Movies",
            whoCreateWathlist: "Watchlist - Rahul Malviya",
            avatarurl: "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1716545127~exp=1716545727~hmac=b06f7f7f6ababecdd569f3849519e0f8971d75936cab68ca367eca074bbea299",
            bgcolor: "#282829"

        },
        {
            watchlistTitle: "Crime - Thriller Movies",
            whoCreateWathlist: "Watchlist - Rahul Malviya",
            avatarurl: "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1716545127~exp=1716545727~hmac=b06f7f7f6ababecdd569f3849519e0f8971d75936cab68ca367eca074bbea299",
            bgcolor: "#444D0D",


        },
        {
            watchlistTitle: "Crime - Thriller Movies",
            whoCreateWathlist: "Watchlist - Rahul Malviya",
            avatarurl: "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1716545127~exp=1716545727~hmac=b06f7f7f6ababecdd569f3849519e0f8971d75936cab68ca367eca074bbea299",
            bgcolor: "#294D0D",

        },
        {
            watchlistTitle: "Crime - Thriller Movies",
            whoCreateWathlist: "Watchlist - Rahul Malviya",
            avatarurl: "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1716545127~exp=1716545727~hmac=b06f7f7f6ababecdd569f3849519e0f8971d75936cab68ca367eca074bbea299",
            bgcolor: "#4D2C0D",

        }
    ]


    const [ShowOption, setShowOption] = useState(false)
    const wrapperRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setShowOption(-1);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    return (
        <>
            {cardsArray.map((elem, index) => {
                return <div ref={wrapperRef} key={index} className='Card-wrapper d-flex flex-column align-items-start justify-content-center gap-3' style={{ backgroundColor: elem.bgcolor, }}>
                    <div className="watchlistAvatar">
                        <img loading='lazy' width={"54px"} height={"54px"} src={elem.avatarurl} alt="" />
                    </div>
                    <div className="cardHeader">
                        <h2>{elem.watchlistTitle}</h2>
                        <p>{elem.whoCreateWathlist}</p>
                    </div>
                    <div className='d-flex align-items-center justify-content-center gap-3'>
                        <Button onclick={openList}>Manage</Button>
                        <button className="position-relative"><FiMoreHorizontal onClick={() => setShowOption(index === ShowOption ? -1 : index)} style={{ color: "#FFFF", }} />
                            {ShowOption === index && <WathlistOptionCard icon1={"images/pen.svg"} icon2={"images/deletegray.svg"}  prop1={"Rename"} prop2={"Delete List"} />}
                        </button>
                    </div>
                </div>
            })}
        </>
    )
}

export default WatchlistCard