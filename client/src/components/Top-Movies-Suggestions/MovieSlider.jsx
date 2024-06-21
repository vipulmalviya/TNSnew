import React, { useEffect, useRef, useState } from 'react';
import "./movieSlider.css";
// import OwlCarousel from 'react-owl-carousel';
import Card from '../card/Card.jsx';
// import useFetch from '../src/utils/useFetch.jsx';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { GoArrowRight } from 'react-icons/go';



const MovieSlider = ({ title, type }) => {

    // const API = import.meta.env.VITE_APP_URI_API;

    // const [Movies, setMovies] = useState([]);
    // const fetchMovieData = async () => {
    //     try {
    //         const url = `${API}/api/movies`;
    //         const response = await fetch(url);
    //         const jsonData = await response.json();
    //         setMovies(jsonData);
    //     } catch (error) {
    //         console.error('Error fetching movie data:', error);
    //     }
    // };
    // useEffect(() => {
    //     fetchMovieData();
    // }, [type]);


    // const [Watchlist, setWatchlist] = useState([])
    // function cartfunc(params) {
    //     if (params.target.classList.contains("add")) {
    //         // alert("movie added")
    //         setWatchlist(Lcard[params.target.dataset.value])
    //     }

    // }
    // console.log(Watchlist);

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
    // const { data, loading } = useFetch(`/discover/${type}`)

    // const skItem = () => {
    //     return (
    //         <div className="card">
    //             <div className='posterBlock skeleton' />
    //             <div className='textBlock skeleton'>
    //                 <span className='d-flex'>
    //                     <h4></h4>
    //                     <img height={"30px"} src="" alt="" />
    //                 </span>
    //                 <span className='d-flex'>
    //                     <p></p>
    //                     <span className="number"></span>
    //                 </span>
    //                 <button className='skeleton'><Link to=""></Link></button>
    //             </div>
    //         </div>
    //     )
    // }

    const responsive = {
        superlargedesktop: {
            breakpoint: { max: 4000, min: 1860 },
            items: 7,
        },
        desktop: {
            breakpoint: { max: 1860, min: 1280 },
            items: 6,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4.5,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
        }
    };
    return (
        <section>
            <div className="container ">
                <div className='cardHeaders d-flex'>
                    <h3>{title}</h3>
                    <span className="d-flex align-items-center justify-content-center gap-2" style={{ color: "white", cursor: "pointer" }}>See All <GoArrowRight /></span>
                </div>
                {<Carousel className="MovieCards flex"
                    responsive={responsive}
                    swipeable
                    removeArrowOnDeviceType={["tablet", "mobile"]}>
                    {Lcard?.map((elem, index) =>
                        <Card value={index} key={index} Poster={elem.moviePoster} Title={elem.name} catagory={elem.genre} watch={elem.popularity} year={elem.releaseDate} episode={elem.episode} btn={true} mediaId={elem._id.$oid} elem={elem} />
                    )}
                </Carousel>}
            </div>
        </section>
    )
}

export default MovieSlider;
