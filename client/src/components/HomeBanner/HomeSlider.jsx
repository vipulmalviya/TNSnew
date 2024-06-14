import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./HomeSlider.css";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import Button from '../buttons/Button';
import ButtonSec from '../buttons/ButtonSec';
import { FaPlay } from 'react-icons/fa';
import { CiCircleChevLeft, CiCircleChevRight } from 'react-icons/ci';
import { LuPlus } from 'react-icons/lu';
import { Link, useNavigate } from 'react-router-dom';

const Lcard = [
    {
        id: 1,
        Titlelogo: "openhaimer",
        Genre: [
            "Biography, ",
            "Drama"
        ],
        Runtime: "2h 55m",
        Release_Date: "2023",
        Accolades: "During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project...",
        poster_path: "images/openhaimer.jpg",
        popularity: "92.5",
    },
    {
        id: 2,
        Titlelogo: "The BatMan",
        Genre: [
            "Action, ",
            "Crime"
        ],
        Runtime: "2h 55m",
        Release_Date: "2022",
        Accolades: "During World War II, Lt. Gen. Leslie Groves Jr. appoints Batman is called to intervene when the mayor of Gotham City is murdered. Soon...",
        poster_path: "images/batmanhome.png",
        popularity: "92.5",
    },
    {
        id: 3,
        Titlelogo: "DUNE",
        Genre: [
            "Sci-fi, ",
            "Adventure"
        ],
        Runtime: "2h 55m",
        Release_Date: "2021",
        Accolades: "During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project...",
        poster_path: "images/dunehome.png",
        popularity: "92.5",
    },
    {
        id: 4,
        Titlelogo: "Joker",
        Genre: [
            "Crime ",
            "Thriller"
        ],
        Runtime: "2h 55m",
        Release_Date: "20219",
        Accolades: "Arthur Fleck, a party clown, leads an impoverished life with his ailing mother. However, when society shuns him and brands him as a freak....",
        poster_path: "images/jokerhome.png",
        popularity: "92.5",
    },
    {
        id: 5,
        Titlelogo: "Avatar",
        Genre: [
            "Action, ",
            "Sci-fi"
        ],
        Runtime: "2h 55m",
        Release_Date: "2022",
        Accolades: "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora...",
        poster_path: "images/Avatarhome.png",
        popularity: "92.5",
    },
    {
        id: 6,
        Titlelogo: "The Green Knight",
        Genre: [
            "Advanture, ",
            "Horror"
        ],
        Runtime: "2h 55m",
        Release_Date: "2021",
        Accolades: "Sir Gawain, King Arthur's young nephew, embarks on an adventurous journey and deals with ghosts, thieves and giants as he sets out to defeat Green Knight, a giant...",
        poster_path: "images/theGreenKnighthome.png",
        popularity: "92.5",
    },
    {
        id: 7,
        Titlelogo: "Saltburn",
        Genre: [
            "Comedy, ",
            "Thriller"
        ],
        Runtime: "2h 55m",
        Release_Date: "2023",
        Accolades: "Distraught by his classmate Oliver's unfortunate living situation, Felix, a rich student, invites him over to his estate. Soon, a series of horrifying events engulf...",
        poster_path: "images/saltburnhome.png",
        popularity: "92.5",
    }

];




const HomeSlider = () => {


    const API = import.meta.env.VITE_APP_URI_API;

    const [Movies, setMovies] = useState([]);
    // const apiKey = '07d7941833065b1ddd54a729aaa554e5';
    const fetchMovieData = async () => {
        try {
            const url = `${API}/api/movies`;
            const response = await fetch(url);
            const jsonData = await response.json();
            setMovies(jsonData);
        } catch (error) {
            console.error('Error fetching movie data:', error);
        }
    };
    useEffect(() => {
        fetchMovieData();
    },[]);



    function years(releaseDate) {
        const dateObject = new Date(releaseDate);
        return dateObject.getFullYear().toString();
    }

    const [stream, setStream] = useState(true)
    function streambtn() {
        setStream(!stream)
    }
    const navigate = useNavigate();
    return (
        <>
            <section className="Homecontainer d-flex align-items-center justify-content-center">
                <Swiper
                    speed={1300}
                    autoplay={{ delay: 5000, disableOnInteraction: true, pauseOnMouseEnter: true, waitForTransition: true }}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 3,
                    }} Continue
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                    className="swiper_container"
                >
                    {Movies.map((elem,index) => (
                         <SwiperSlide key={index} className='swiper-slide d-flex' style={{
                            background: `linear-gradient(to top, black, transparent), url(${elem.movieBanner})`
                        }}>
                            <div onClick={() => navigate("/singleMoviePage")} className='container p-5 d-flex align-items-end'>
                                <div className='caption slider-active d-flex flex-column justify-content-end align-items-start gap-2'>
                                    <img loading="lazy" height={"40%"} width={"40%"} src="images/BestOfAllTime.svg" alt="brand logo" />
                                    <h2>{elem.name}</h2>
                                    <div className=' w-100 aboutMovie d-flex justify-content-center align-items-start flex-column mb-2 gap-3'>
                                        <div className='d-flex'>
                                            <p className='mb-0'>{elem.genre.join(', ')}</p>
                                            <p className='mb-0'>{years(elem.releaseDate)}</p>
                                            <p className='mb-0'>2h 22m</p>
                                        </div>
                                        <span className='h-100 w-100 d-flex align-items-center justify-content-start gap-2 position-relative'>
                                            <img loading="lazy" height={"20px"} width={"22px"} src="images/latestlogo.svg" alt="" />
                                            <h2 className='d-flex align-items-start justify-content-center m-0'>92.6</h2>
                                        </span>
                                    </div>
                                    <div className='movieBtns gap-3 d-flex align-items-center justify-content-center'>
                                        <Button onclick={streambtn}>
                                            {stream ? <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.66699 4.16667C1.66699 3.23325 1.66699 2.76654 1.84865 2.41002C2.00844 2.09641 2.2634 1.84144 2.57701 1.68166C2.93353 1.5 3.40024 1.5 4.33366 1.5H10.667C11.6004 1.5 12.0671 1.5 12.4236 1.68166C12.7372 1.84144 12.9922 2.09641 13.152 2.41002C13.3337 2.76654 13.3337 3.23325 13.3337 4.16667V13.9091C13.3337 14.7463 13.3337 15.1649 13.16 15.3898C13.0089 15.5857 12.7785 15.7043 12.5312 15.7134C12.2472 15.724 11.9066 15.4807 11.2253 14.9941L7.50033 12.3333L3.77531 14.9941C3.09406 15.4807 2.75344 15.724 2.46945 15.7134C2.22219 15.7043 1.9918 15.5857 1.84063 15.3898C1.66699 15.1649 1.66699 14.7463 1.66699 13.9091V4.16667Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg> : <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.45801 3.90833C1.45801 3.02158 1.45801 2.57821 1.63058 2.23951C1.78238 1.94159 2.0246 1.69937 2.32252 1.54757C2.66122 1.375 3.10459 1.375 3.99134 1.375H10.008C10.8948 1.375 11.3381 1.375 11.6768 1.54757C11.9748 1.69937 12.217 1.94159 12.3688 2.23951C12.5413 2.57821 12.5413 3.02158 12.5413 3.90833V13.1636C12.5413 13.959 12.5413 14.3566 12.3764 14.5703C12.2328 14.7564 12.0139 14.8691 11.779 14.8778C11.5092 14.8878 11.1856 14.6566 10.5384 14.1944L6.99967 11.6667L3.46091 14.1944C2.81372 14.6566 2.49013 14.8878 2.22034 14.8778C1.98545 14.8691 1.76658 14.7564 1.62296 14.5703C1.45801 14.3566 1.45801 13.959 1.45801 13.1636V3.90833Z" fill="black" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            }
                                            <p className='mb-0'>{stream ? "Add to Watchlist" : "Remove form Watchlist"}</p>
                                        </Button>
                                        <Link to="" className='hinglight sellAllDetails' style={{ fontWeight: "500" }}>See All Details</Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="slider-controler container d-flex ">
                        <div className="swiper-button-prev slider-arrow">
                            <CiCircleChevLeft />
                        </div>
                        <div className="swiper-button-next slider-arrow">
                            <CiCircleChevRight />
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
            </section >
        </>
    )
}

export default HomeSlider
