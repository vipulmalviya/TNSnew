import React from 'react';
import "./CuratedSlider.css";
import Button from '../buttons/Button';
import { IoIosArrowForward } from 'react-icons/io';
import { MdArrowForward } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { GoArrowRight } from 'react-icons/go';

const CuratedSlider = ({ title }) => {
    const Lcard = [
        {
            cardID: 1,
            poster: "images/openhaimer.jpg",
            content: "Biographical Movies Like Oppenheimer That’ll Impact You Deeply",
            watch: "91.5",
            paragraph: "6 Movies Ranked According to TNS Score",
        },
        {
            cardID: 2,
            poster: "images/Sambhadur.png",
            content: "Biographical Movies Like Oppenheimer That’ll Impact You Deeply",
            watch: "91.5",
            paragraph: "6 Movies Ranked According to TNS Score",
        },
        {
            cardID: 3,
            poster: "images/dune.png",
            content: "Biographical Movies Like Oppenheimer That’ll Impact You Deeply",
            watch: "91.5",
            paragraph: "6 Movies Ranked According to TNS Score",
        },

    ];

    const responsive = {
        superlargedesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            // margin:"200px",
            breakpoint: { max: 464, min: 0 },
            items: 1.3,
        }
    };
    return (
        <section>
            <div className="container">
                <div className='cardHeaders d-flex'>
                    <h3>{title}</h3>
                    <span className="d-flex align-items-center justify-content-center gap-2" style={{ color: "white", cursor: "pointer" }}>See All <GoArrowRight /></span>

                </div>
                <Carousel className="CuratedCards align-items-center justify-content-center d-flex"
                    responsive={responsive}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                    {Lcard.map((elem, index) => <Link to="/curatedPage" key={index}>
                        <div className="card m-2 d-flex" style={{
                            background: `url(${elem.poster}) no-repeat`,
                        }}>
                            <div className='CardContainer'>
                                <div className="tag">
                                    Curated List
                                </div>
                                <h3>{elem.content}</h3>
                                <p>{elem.paragraph}</p>
                                <button className='mainbtn'>
                                    see All Titles
                                    <MdArrowForward />
                                </button>
                            </div>
                        </div>
                    </Link>
                    )}
                </Carousel>
            </div>
        </section>
    )
}

export default CuratedSlider;
