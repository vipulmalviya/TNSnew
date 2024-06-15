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
"_id": {
"$oid": "666b0eb16e133f10239363b8"
},
"name": "The Shawshank Redemption",
"genre": [
"Drama"
],
"censorRatingIndia": "UA",
"releaseDate": "1994-09-22",
"directedBy": "Frank Darabont",
"writtenBy": "Stephen King (short story), Frank Darabont (screenplay)",
"cinematographyBy": "Roger Deakins",
"moviePoster": "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
"movieBanner": "https://i.pinimg.com/originals/f1/b7/c1/f1b7c17d73e9ca11e288cd721ed0788c.jpg",
"awards": [
{
 "award": "Oscar",
 "category": "Best Picture",
 "result": "Nominated"
},
{
 "award": "Golden Globe",
 "category": "Best Performance by an Actor in a Motion Picture - Drama",
 "result": "Nominated"
}
],
"plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
"cast": [
{
 "actorName": "Tim Robbins",
 "characterName": "Andy Dufresne"
},
{
 "actorName": "Morgan Freeman",
 "characterName": "Ellis Boyd 'Red' Redding"
}
],
"streamingAvailabilityIndia": [
"Netflix",
"Amazon Prime"
]
},
{
"_id": {
"$oid": "666b0eb16e133f10239363b9"
},
"name": "The Dark Knight",
"genre": [
"Action",
"Crime",
"Drama"
],
"censorRatingIndia": "UA",
"releaseDate": "2008-07-18",
"directedBy": "Christopher Nolan",
"writtenBy": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay)",
"cinematographyBy": "Wally Pfister",
"moviePoster": "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg",
"movieBanner": "https://i.pinimg.com/564x/ce/eb/c7/ceebc734b18b88feffa7561c2b011fe6.jpg",
"awards": [
{
 "award": "Oscar",
 "category": "Best Supporting Actor",
 "result": "Won"
},
{
 "award": "BAFTA",
 "category": "Best Supporting Actor",
 "result": "Won"
}
],
"plot": "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
"cast": [
{
 "actorName": "Christian Bale",
 "characterName": "Bruce Wayne"
},
{
 "actorName": "Heath Ledger",
 "characterName": "Joker"
}
],
"streamingAvailabilityIndia": [
"Netflix",
"HBO Max"
]
},
{
"_id": {
"$oid": "666b0eb16e133f10239363ba"
},
"name": "Inception",
"genre": [
"Action",
"Adventure",
"Sci-Fi"
],
"censorRatingIndia": "UA",
"releaseDate": "2010-07-16",
"directedBy": "Christopher Nolan",
"writtenBy": "Christopher Nolan",
"cinematographyBy": "Wally Pfister",
"moviePoster": "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
"movieBanner": "https://images.squarespace-cdn.com/content/v1/5ec686197f8b2976074846c2/1618809593080-N5PB8CWYOW3OPDE2TT6E/Feature+3-1.png?format=2500w",
"awards": [
{
 "award": "Oscar",
 "category": "Best Cinematography",
 "result": "Won"
},
{
 "award": "Golden Globe",
 "category": "Best Director",
 "result": "Nominated"
}
],
"plot": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
"cast": [
{
 "actorName": "Leonardo DiCaprio",
 "characterName": "Cobb"
},
{
 "actorName": "Joseph Gordon-Levitt",
 "characterName": "Arthur"
}
],
"streamingAvailabilityIndia": [
"Netflix",
"Amazon Prime"
]
},
{
"_id": {
"$oid": "666b0eb16e133f10239363bb"
},
"name": "Parasite",
"genre": [
"Drama",
"Thriller"
],
"censorRatingIndia": "A",
"releaseDate": "2019-05-30",
"directedBy": "Bong Joon Ho",
"writtenBy": "Bong Joon Ho, Han Jin Won",
"cinematographyBy": "Hong Kyung-pyo",
"moviePoster": "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Parasite_%282019_film%29.png/220px-Parasite_%282019_film%29.png",
"movieBanner": "https://assets.mubicdn.net/images/notebook/post_images/29882/images-w1400.jpg?1579663202",
"awards": [
{
 "award": "Oscar",
 "category": "Best Picture",
 "result": "Won"
},
{
 "award": "Golden Globe",
 "category": "Best Foreign Language Film",
 "result": "Won"
}
],
"plot": "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
"cast": [
{
 "actorName": "Kang-ho Song",
 "characterName": "Ki Taek"
},
{
 "actorName": "Sun-kyun Lee",
 "characterName": "Dong Ik"
}
],
"streamingAvailabilityIndia": [
"Amazon Prime"
]
},
{
"_id": {
"$oid": "666b0eb16e133f10239363bc"
},
"name": "La La Land",
"genre": [
"Comedy",
"Drama",
"Music"
],
"censorRatingIndia": "UA",
"releaseDate": "2016-12-25",
"directedBy": "Damien Chazelle",
"writtenBy": "Damien Chazelle",
"cinematographyBy": "Linus Sandgren",
"moviePoster": "https://upload.wikimedia.org/wikipedia/en/a/ab/La_La_Land_%28film%29.png",
"movieBanner": "https://i.pinimg.com/originals/6a/ed/26/6aed267fb1ca0c6ad395f51282644e7f.jpg",
"awards": [
{
 "award": "Oscar",
 "category": "Best Director",
 "result": "Won"
},
{
 "award": "Golden Globe",
 "category": "Best Motion Picture - Musical or Comedy",
 "result": "Won"
}
],
"plot": "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
"cast": [
{
 "actorName": "Ryan Gosling",
 "characterName": "Sebastian"
},
{
 "actorName": "Emma Stone",
 "characterName": "Mia"
}
],
"streamingAvailabilityIndia": [
"Amazon Prime",
"Netflix"
]
},
{
"_id": {
"$oid": "666b0eb16e133f10239363bd"
},
"name": "The Grand Budapest Hotel",
"genre": [
"Adventure",
"Comedy",
"Crime"
],
"censorRatingIndia": "UA",
"releaseDate": "2014-03-28",
"directedBy": "Wes Anderson",
"writtenBy": "Wes Anderson (screenplay), Hugo Guinness (story)",
"cinematographyBy": "Robert Yeoman",
"moviePoster": "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Grand_Budapest_Hotel.png",
"movieBanner": "https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/5vPW6MPAyCFd84FEQQgtPDmVDPQ.jpg",
"awards": [
{
 "award": "Oscar",
 "category": "Best Production Design",
 "result": "Won"
},
{
 "award": "Golden Globe",
 "category": "Best Motion Picture - Musical or Comedy",
 "result": "Won"
}
],
"plot": "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
"cast": [
{
 "actorName": "Ralph Fiennes",
 "characterName": "M. Gustave"
},
{
 "actorName": "F. Murray Abraham",
 "characterName": "Mr. Moustafa"
}
],
"streamingAvailabilityIndia": [
"Disney+ Hotstar"
]
},
{
"_id": {
"$oid": "666b0eb16e133f10239363be"
},
"name": "Mad Max: Fury Road",
"genre": [
"Action",
"Adventure",
"Sci-Fi"
],
"censorRatingIndia": "A",
"releaseDate": "2015-05-15",
"directedBy": "George Miller",
"writtenBy": "George Miller, Brendan McCarthy, Nick Lathouris",
"cinematographyBy": "John Seale",
"moviePoster": "https://upload.wikimedia.org/wikipedia/en/6/6e/Mad_Max_Fury_Road.jpg",
"movieBanner": "https://i.pinimg.com/564x/02/cc/c6/02ccc6c76bc5be21e271f7d2939d7db4.jpg",
"awards": [
{
 "award": "Oscar",
 "category": "Best Film Editing",
 "result": "Won"
},
{
 "award": "Golden Globe",
 "category": "Best Director",
 "result": "Nominated"
}
],
"plot": "In a post-apocalyptic wasteland, Max teams up with a mysterious woman, Furiosa, to try and survive.",
"cast": [
{
 "actorName": "Tom Hardy",
 "characterName": "Max Rockatansky"
},
{
 "actorName": "Charlize Theron",
 "characterName": "Imperator Furiosa"
}
],
"streamingAvailabilityIndia": [
"Amazon Prime",
"Netflix"
]
},
{
"_id": {
"$oid": "666b0eb16e133f10239363bf"
},
"name": "Whiplash",
"genre": [
"Drama",
"Music"
],
"censorRatingIndia": "A",
"releaseDate": "2014-10-10",
"directedBy": "Damien Chazelle",
"writtenBy": "Damien Chazelle",
"cinematographyBy": "Sharone Meir",
"moviePoster": "https://upload.wikimedia.org/wikipedia/en/0/01/Whiplash_poster.jpg",
"movieBanner": "https://reporter.rit.edu:8443/sites/pubDir/slideShow/04-15/85-1033-168352016.jpg",
"awards": [
{
 "award": "Oscar",
 "category": "Best Supporting Actor",
 "result": "Won"
},
{
 "award": "BAFTA",
 "category": "Best Supporting Actor",
 "result": "Won"
}
],
"plot": "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
"cast": [
{
 "actorName": "Miles Teller",
 "characterName": "Andrew Neiman"
},
{
 "actorName": "J.K. Simmons",
 "characterName": "Terence Fletcher"
}
],
"streamingAvailabilityIndia": [
"Amazon Prime",
"Netflix"
]
},
{
"_id": {
"$oid": "666b0eb16e133f10239363c0"
},
"name": "Interstellar",
"genre": [
"Adventure",
"Drama",
"Sci-Fi"
],
"censorRatingIndia": "UA",
"releaseDate": "2014-11-07",
"directedBy": "Christopher Nolan",
"writtenBy": "Jonathan Nolan, Christopher Nolan",
"cinematographyBy": "Hoyte Van Hoytema",
"moviePoster": "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
"movieBanner": "https://showbizcafe.com/wp-content/uploads/2014/11/interstellar_movie-wide.jpg",
"awards": [
{
 "award": "Oscar",
 "category": "Best Visual Effects",
 "result": "Won"
},
{
 "award": "BAFTA",
 "category": "Best Cinematography",
 "result": "Nominated"
}
],
"plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
"cast": [
{
 "actorName": "Matthew McConaughey",
 "characterName": "Cooper"
},
{
 "actorName": "Anne Hathaway",
 "characterName": "Brand"
}
],
"streamingAvailabilityIndia": [
"Amazon Prime",
"Netflix"
]
},
{
"_id": {
"$oid": "666b0eb16e133f10239363c1"
},
"name": "The Social Network",
"genre": [
"Biography",
"Drama"
],
"censorRatingIndia": "UA",
"releaseDate": "2010-10-01",
"directedBy": "David Fincher",
"writtenBy": "Aaron Sorkin (screenplay), Ben Mezrich (book)",
"cinematographyBy": "Jeff Cronenweth",
"moviePoster": "https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/The_Social_Network_film_poster.png/220px-The_Social_Network_film_poster.png",
"movieBanner": "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/02/garfield-eisenberg-and-timberlake-in-the-social-network.png?q=50&fit=contain&w=1140&h=&dpr=1.5",
"awards": [
{
 "award": "Oscar",
 "category": "Best Adapted Screenplay",
 "result": "Won"
},
{
 "award": "Golden Globe",
 "category": "Best Motion Picture - Drama",
 "result": "Won"
}
],
"plot": "The story of the founding of Facebook and the resulting lawsuits.",
"cast": [
{
 "actorName": "Jesse Eisenberg",
 "characterName": "Mark Zuckerberg"
},
{
 "actorName": "Andrew Garfield",
 "characterName": "Eduardo Saverin"
}
],
"streamingAvailabilityIndia": [
"Netflix"
]
},
{
"_id": {
"$oid": "666b0eb16e133f10239363c2"
},
"name": "1917",
"genre": [
"Drama",
"War"
],
"censorRatingIndia": "A",
"releaseDate": "2019-12-25",
"directedBy": "Sam Mendes",
"writtenBy": "Sam Mendes, Krysty Wilson-Cairns",
"cinematographyBy": "Roger Deakins",
"moviePoster": "https://upload.wikimedia.org/wikipedia/en/thumb/f/fe/1917_%282019%29_Film_Poster.jpeg/220px-1917_%282019%29_Film_Poster.jpeg",
"movieBanner": "https://i.pinimg.com/originals/f9/fd/bb/f9fdbb21ec751dff87cce8140f6f5c8a.jpg",
"awards": [
{
 "award": "Oscar",
 "category": "Best Cinematography",
 "result": "Won"
},
{
 "award": "Golden Globe",
 "category": "Best Director",
 "result": "Won"
}
],
"plot": "Two young British soldiers during World War I are given an impossible mission: deliver a message deep in enemy territory that will stop 1,600 men, and one of the soldiers' brothers, from walking straight into a deadly trap.",
"cast": [
{
 "actorName": "Dean-Charles Chapman",
 "characterName": "Lance Corporal Blake"
},
{
 "actorName": "George MacKay",
 "characterName": "Lance Corporal Schofield"
}
],
"streamingAvailabilityIndia": [
"Amazon Prime"
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

  const { id } = useParams();


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
        style={{ background: `linear-gradient(to top, black, transparent), url(${Movies?.movieBanner})` }}
      >
        <section className='singleSection'>
          <div className="container movieContianer d-flex">
            <div className='Sleft d-flex'>
              <div className="trailerCard d-flex">
                <div className="imgbox" loading="lazy">
                  <img loading='lazy' width={"100%"} height={"100%"} src={Movies?.moviePoster} alt="" />
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
                    <h3>{Movies?.name}</h3>
                  </div>
                  <div className='align-items-center movieReales d-flex'>
                    <div className='d-flex align-itmes-center justify-content-center gap-2'>
                      {Movies?.genre && Movies?.genre.map((e, index) => (
                        <p key={index} className="MovieTag movieType">{e}</p>
                      ))}
                      {/* <p className="MovieTag movieType">Drama</p> */}
                    </div>
                    <p className="MovieTag moviePG">{Movies?.censorRatingIndia}</p>
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
                      <p className="value">{Movies?.directedBy}</p>
                    </div>
                    <div className='d-flex'>
                      <p className="key">Written By:</p>
                      <p className="value">{Movies?.writtenBy}</p>
                    </div>
                    <div className='d-flex'>
                      <p className="key">Cinematography By:</p>
                      <p className="value">{Movies?.cinematographyBy}</p>
                    </div>
                    <div className='d-flex'>
                      <p className="key">Accolades:</p>
                      <p className="value">{Movies?.awards?.map((e) => e.category).join(", ")}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='Plot'>
                    <h3>Plot:</h3>
                    <div className="value">{Movies?.plot}</div>
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
      <MovieSlider title={"Biographical Movies? Like Oppenheimer That’ll Impact You Deeply"} />
      <MovieSlider title={"Oscars Winning Movies For You"} />



    </Fragment>
  )
}

export default SingleMoviePage
