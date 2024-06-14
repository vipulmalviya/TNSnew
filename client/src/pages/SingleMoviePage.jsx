import React, { Fragment, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Button from '../components/buttons/Button.jsx';
import ButtonSec from '../components/buttons/ButtonSec.jsx';
import MovieSlider from '../components/Top-Movies-Suggestions/MovieSlider'
import { FaPlay, FaSpotify } from 'react-icons/fa';
import { LuPenLine, LuShare } from 'react-icons/lu';
import { FiInfo } from "react-icons/fi";
import { TbMovie } from "react-icons/tb";
import { MdOutlineDone } from 'react-icons/md';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Rating from '../components/Rating/Rating.jsx';

const Lcard = [
  {
    id: 1,
    titleLogo: "Oppenheimer",
    genre: [
      "Biography",
      "Drama"
    ],
    runtime: "2h 55m",
    releaseDate: "2023",
    accolades: "During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project...",
    posterPath: "images/oppenheimer.jpg",
    popularity: "92.5",
    platforms: [
      {
        platformLogo: "images/Netflix.svg",
        platformType: "Subscription",
        platformName: "Netflix",
      },
      {
        platformLogo: "images/primevideo.svg",
        platformType: "Subscription",
        platformName: "Prime Video",
      },
      {
        platformLogo: "images/youtubeicone.svg",
        platformType: "Subscription",
        platformName: "youtube",
      }
    ]
  }
];






const Cast = [
  {
    img: "images/userimg.png",
    role: "Cillian Murphy",
    name: "J. Robert Oppenheimer",
  },
  {
    img: "images/userimg.png",
    role: "Cillian Murphy",
    name: "J. Robert Oppenheimer",
  },
  {
    img: "images/userimg.png",
    role: "Cillian Murphy",
    name: "J. Robert Oppenheimer",
  },
  {
    img: "images/userimg.png",
    role: "Cillian Murphy",
    name: "J. Robert Oppenheimer",
  },
  {
    img: "images/userimg.png",
    role: "Cillian Murphy",
    name: "J. Robert Oppenheimer",
  }
]

const responsive = {
  superlargedesktop: {
    breakpoint: { max: 4000, min: 1860 },
    items: 8.7,
  },
  desktop: {
    breakpoint: { max: 1860, min: 1280 },
    items: 7,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5.2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2.7,
  }
}

const SingleMoviePage = () => {

  const {id} = useParams();


  const API = import.meta.env.VITE_APP_URI_API;

  const [Movies, setMovies] = useState([]);

  const fetchMovieData = async () => {
    try {
      const url = `${API}/api/movies/${id}`;
      const response = await fetch(url);
      const jsonData = await response.json();
      setMovies(jsonData);
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  };
  useEffect(() => {
    fetchMovieData();
  }, [id]);

  console.log(Movies);













  const [ChangeBtn, setChangeBtn] = useState(false)

  function btnchange() {
    setChangeBtn(!ChangeBtn)
  }
  const [stream, setStream] = useState(false)

  function streambtn() {
    setStream(!stream)
  }

  return (
    <Fragment>
      {stream && <div onClick={(e) => setStream(!e)} className='stream-Wrapper'>
        <div className='stream-modal d-flex align-content-center justify-content-center'>
          {Lcard[0].platforms.map((elem) => {
            return <div className='stream-card d-flex align-items-center justify-content-center'>
              <img loading='lazy' src={elem.platformLogo} alt="platformLogo" />
              <div>
                <h3>{elem.platformName}</h3>
                <p>{elem.platformType}</p>
              </div>
            </div>
          })}
        </div>
      </div>}
      <div className='Movieposter'
        style={{ background: `linear-gradient(to top, black, transparent), url(${Movies.movieBanner})` }}
      >
        <section className='singleSection'>
          <div className="container movieContianer d-flex">
            <div className='Sleft d-flex'>
              <div className="trailerCard d-flex">
                <div className="imgbox" loading="lazy">
                  <img loading='lazy' width={"100%"} height={"100%"} src={Movies.moviePoster} alt="" />
                </div>
                <div className={`inWatchlist d-flex align-items-center justify-content-center gap-2 ${ChangeBtn ? " d-none" : "d-block "}`}>
                  <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.16699 4.16667C1.16699 3.23325 1.16699 2.76654 1.34865 2.41002C1.50844 2.09641 1.7634 1.84144 2.07701 1.68166C2.43353 1.5 2.90024 1.5 3.83366 1.5H10.167C11.1004 1.5 11.5671 1.5 11.9236 1.68166C12.2372 1.84144 12.4922 2.09641 12.652 2.41002C12.8337 2.76654 12.8337 3.23325 12.8337 4.16667V13.9091C12.8337 14.7463 12.8337 15.1649 12.66 15.3898C12.5089 15.5857 12.2785 15.7043 12.0312 15.7134C11.7472 15.724 11.4066 15.4807 10.7253 14.9941L7.00033 12.3333L3.27531 14.9941C2.59406 15.4807 2.25344 15.724 1.96945 15.7134C1.72219 15.7043 1.4918 15.5857 1.34063 15.3898C1.16699 15.1649 1.16699 14.7463 1.16699 13.9091V4.16667Z" fill="#BACC4A" stroke="#BACC4A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <p>in Watchlist </p>
                </div>
                <Button onclick={streambtn}>
                  <FaPlay />
                  <p className='mb-0'>stream Options</p>
                </Button>
                <ButtonSec onclick={btnchange}>
                  {ChangeBtn ? <img loading='lazy' src="images/bookmark.svg" alt="" /> : <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.16699 4.16667C1.16699 3.23325 1.16699 2.76654 1.34865 2.41002C1.50844 2.09641 1.7634 1.84144 2.07701 1.68166C2.43353 1.5 2.90024 1.5 3.83366 1.5H10.167C11.1004 1.5 11.5671 1.5 11.9236 1.68166C12.2372 1.84144 12.4922 2.09641 12.652 2.41002C12.8337 2.76654 12.8337 3.23325 12.8337 4.16667V13.9091C12.8337 14.7463 12.8337 15.1649 12.66 15.3898C12.5089 15.5857 12.2785 15.7043 12.0312 15.7134C11.7472 15.724 11.4066 15.4807 10.7253 14.9941L7.00033 12.3333L3.27531 14.9941C2.59406 15.4807 2.25344 15.724 1.96945 15.7134C1.72219 15.7043 1.4918 15.5857 1.34063 15.3898C1.16699 15.1649 1.16699 14.7463 1.16699 13.9091V4.16667Z" fill="#BACC4A" stroke="#BACC4A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  }
                  <p className='mb-0'>{ChangeBtn ? "Add to watchlist" : "Remove form Watchlist"}</p>
                </ButtonSec>
                <div className='usefullBtns d-flex align-items-center justify-content-center gap-2'>
                  <button className=' d-flex align-items-center justify-content-center'><FaSpotify /></button>
                  <button className=' d-flex align-items-center justify-content-center'><TbMovie /></button>
                  <button className=' d-flex align-items-center justify-content-center'><MdOutlineDone /></button>
                  <button className=' d-flex align-items-center justify-content-center'><LuShare /></button>
                </div>
              </div>
              <div className="aboutMovies" >
                <div className='aboutMoviesContainer'>
                  <img loading='lazy' height={"40px"} width={"150px"} src="images/BestOfAllTime.svg" alt="brand logo" />
                  <div className="movieTitle">
                    <h3>{Movies.name}</h3>
                  </div>
                  <div className='align-items-center movieReales d-flex'>
                    <div className='d-flex align-itmes-center justify-content-center gap-2'>
                      <p className="MovieTag movieType">{Movies.genre}</p>
                      {/* <p className="MovieTag movieType">Drama</p> */}
                    </div>
                    <p className="MovieTag moviePG">{Movies.censorRatingIndia}</p>
                    <p className="movieTime">2h 36m</p>
                    <p className="movieYear">2023</p>
                  </div>
                  <div className='movieRating d-flex align-items-center justify-content-start gap-5'>
                    <div className='d-flex align-items-center justify-content-center gap-3'>
                      <img loading='lazy' height={"30px"} width={"50px"} src="images/latestlogo.svg" alt="" />
                      <h4 className='d-flex align-items-start justify-content-center m-0'>92.5</h4>
                      <button className='tooletip'><FiInfo className="hinglight position-relative" style={{ fontSize: "1.2rem", }} />
                        <div className="tooleTipDiv">
                          <p>
                            TNS score calculates scores based on <b>
                              User Ratings, Critics Ratings </b> and <b>Awards</b> Also, it’s a <b> dynamic score, </b> similar to other rating systems, Rating of titles can change periodically mainly for shows which are having ongoing runs.
                            <br />
                            <br />
                            It calculate the score in the range of <b> 75-100 </b>
                            <br />
                            <br />
                            It simply leave titles which are ranked below <b> 75 </b>
                          </p>
                        </div>
                      </button>
                    </div>
                    <div className='d-flex align-items-center justify-content-center gap-2'>
                      <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 17V15C11 12.2386 8.76142 10 6 10C3.23858 10 1 12.2386 1 15V17H11ZM11 17H19V16C19 13.0545 16.7614 11 14 11C12.5867 11 11.3103 11.6255 10.4009 12.6311M9 4C9 5.65685 7.65685 7 6 7C4.34315 7 3 5.65685 3 4C3 2.34315 4.34315 1 6 1C7.65685 1 9 2.34315 9 4ZM16 6C16 7.10457 15.1046 8 14 8C12.8954 8 12 7.10457 12 6C12 4.89543 12.8954 4 14 4C15.1046 4 16 4.89543 16 6Z" stroke="#BACC4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <h4 className='d-flex align-items-start justify-content-center m-0'>92.5</h4>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="Details d-flex">
                    <h3>Details:</h3>
                    <div className='d-flex'>
                      <p className="key">Directed By:</p>
                      <p className="value">{Movies.directedBy}</p>
                    </div>
                    <div className='d-flex'>
                      <p className="key">Written By:</p>
                      <p className="value">{Movies.writtenBy}</p>
                    </div>
                    <div className='d-flex'>
                      <p className="key">Cinematography By:</p>
                      <p className="value">{Movies.cinematographyBy}</p>
                    </div>
                    <div className='d-flex'>
                      <p className="key">Accolades:</p>
                      <p className="value">{Movies.awards?.map((e)=> e.category).join(", " )}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='Plot'>
                    <h3>Plot:</h3>
                    <div className="value">{Movies.plot}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section>
        <div className="container padding50">
          <h3 className='SectionLable'>Cast & Crew</h3>
          <Carousel
            removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
            responsive={responsive} className='d-flex align-items-center justify-content-start gap-5'>
            {Cast.map((elem) => {
              return <div key={elem} className='d-flex'>
                <div className="usercard d-flex flex-column justify-content-center align-items-center gap-3">
                  <img loading='lazy' height={"100px"} width={"100px"} src={elem.img} alt="" />
                  <div className="userDetails d-flex flex-column justify-content-center align-items-center">
                    <h4>{elem.role}</h4>
                    <p>{elem.name}</p>
                  </div>
                </div>
              </div>
            })}
          </Carousel>
        </div>
      </section>

      <section>
        <div className="container movierating d-flex padding50" >
          <div className="left d-flex flex-column justify-content-center align-items-center gap-4">
            <h3>User Rating & Review </h3>
            <div className='leftT d-flex align-items-center'>
              <div className="score">9.6</div>
              <Link className='d-flex'>based on 541 users reviews</Link>
            </div>
            <div className='ratingContainer d-flex flex-column gap-2 '>
              <div className='d-flex align-items-center justify-content-between' >
                <h4>Storyline</h4>
                <Rating />
              </div>
              <div className='d-flex align-items-center justify-content-between'>
                <h4>Acting</h4>
                <div className="rating-stars">
                  <Rating />
                </div>
              </div>
              <div className='d-flex align-items-center  justify-content-between'>
                <h4>Direction</h4>
                <div className="rating-stars">
                  <Rating />
                </div>
              </div>
              <div className='d-flex align-items-center  justify-content-between'>
                <h4>Production Quality</h4>
                <div className="rating-stars">
                  <Rating />
                </div>
              </div>
              <div className='d-flex align-items-center  justify-content-between'>
                <h4>Entertainment Value</h4>
                <div className="rating-stars">
                  <Rating />
                </div>
              </div>
            </div>
          </div>
          <div className="right d-flex flex-column justify-content-center align-items-center">
            <div className='writeReview d-flex align-items-center'>
              <img loading='lazy' src="images/Ellipse 33.svg" alt="" />
              <div className="rating-stars">
                <Rating />
              </div>
            </div>
            <p className='d-flex gap-2'>A non spoiler detail review:
              <br />It's actually the best scientific Biopic made after The theory of everything!! <br /> A Cult classic cinema <br /> Christopher Nolan outshines in his technicality experimentation of direction with subjectives and objectives clearly shown in Black And white that too on an IMAX reel !!</p>
            <div className='d-flex align-items-center justify-content-center'>
              <Button><LuPenLine />Write a review</Button>
              <Link to="" className='hinglight' style={{ textDecoration: "underline", }}>See All Reviews (541)</Link>
            </div>
          </div>
        </div>
      </section>
      <MovieSlider title={"More Christopher Nolan Movies"} />
      <MovieSlider title={"Biographical Movies Like Oppenheimer That’ll Impact You Deeply"} />
      <MovieSlider title={"Oscars Winning Movies For You"} />



    </Fragment>
  )
}

export default SingleMoviePage
