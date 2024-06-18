import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./HomeSlider.css";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import Button from '../buttons/Button';
import { CiCircleChevLeft, CiCircleChevRight } from 'react-icons/ci';
import { Link, useNavigate } from 'react-router-dom';



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
  }, []);



  function years(releaseDate) {
    const dateObject = new Date(releaseDate);
    return dateObject.getFullYear().toString();
  }

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const [stream, setStream] = useState(true)
  function streambtn() {
    setStream(!stream)
  }
  const navigate = useNavigate();
  return (
    <>
      {!loading ? (<section className="Homecontainer d-flex align-items-center justify-content-center">
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
          {Lcard?.map((elem, index) => (
            <SwiperSlide key={index} className='swiper-slide d-flex' style={{
              background: `linear-gradient(to top, black, transparent), url(${elem.movieBanner})`
            }}>
              <div onClick={() => navigate(`/${elem._id.$oid}`)} className='container p-5 d-flex align-items-end'>
                <div className='caption slider-active d-flex flex-column justify-content-end align-items-start gap-2'>
                  <img loading="lazy" height={"40%"} width={"40%"} src="images/BestOfAllTime.svg" alt="brand logo" />
                  <h2>{elem.name}</h2>
                  <div className=' w-100 aboutMovie d-flex justify-content-center align-items-start flex-column mb-2 gap-3'>
                    <div className='d-flex'>
                      <p className='mb-0'>{elem.genre?.join(', ')}</p>
                      <p className='mb-0'>{years(elem.releaseDate)}</p>
                      <p className='mb-0'>2h 22m</p>
                    </div>
                    <span className='h-100 w-100 d-flex align-items-center justify-content-start gap-2 position-relative'>
                      <img loading="lazy" height={"20px"} width={"22px"} src="images/latestlogo.svg" alt="" />
                      <h2 className='d-flex align-items-start justify-content-center m-0'>92.6</h2>
                    </span>
                  </div>
                  <div className='movieBtns gap-3 d-flex align-items-center justify-content-start'>
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
      </section >)
        : (<section className='skeletonsection d-flex align-items-center justify-content-center'>
          <div className="skeletonsectionDiv d-flex align-items-center justify-content-center">
            <div className='skeletonSlide skeletonDiv1'>
            </div>
            <div className='skeletonSlide skeletonDiv2'>

            </div>
            <div className='skeletonSlide skeletonDiv3'>

            </div>
          </div>
        </section>)}
    </>
  )
}

export default HomeSlider
