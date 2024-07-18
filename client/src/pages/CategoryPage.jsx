import React, { Fragment, useEffect, useState } from 'react'
import { MdArrowForward } from 'react-icons/md'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Cards from '../components/card/Card';
import { ImForward, ImForward2 } from 'react-icons/im';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Tagebutton from '../components/buttons/Tagebutton';
import { MovieFetch } from '../utils/MovieFetch';
import { fetchDataFromApi } from '../utils/api';



const CategoryPage = () => {
    const array = [
        {
            category: "Top_Rated",
            value: "Top Rated",
            Poster: "images/wonka.png",
            title: "Wonka",
            Release_Date: "1972",

        },
        {
            category: "AcademyWinner",
            value: "Academy Winner",
            Poster: "images/wonka.png",
            title: "Wonka",
            Release_Date: "1972",


        },
        {
            category: "Around_the_Globe",
            value: "Around the Globe",
            Poster: "images/wonka.png",
            Release_Date: "1972",
            title: "Wonka",

        },
        {
            category: "Around_the_Globe",
            value: "Around the Globe",
            Poster: "images/wonka.png",
            Release_Date: "1972",
            title: "Wonka",

        },
        {
            category: "Around_the_Globe",
            value: "Around the Globe",
            Poster: "images/wonka.png",
            Release_Date: "1972",
            title: "Wonka",

        },
        {
            category: "User’s_Choice",
            value: "User’s Choice",
            Poster: "images/wonka.png",
            Release_Date: "1972",
            title: "Wonka",

        },
        {
            category: "Handpicked",
            value: "Handpicked",
            Poster: "images/wonka.png",
            Release_Date: "1972",
            title: "Wonka",

        },
        {
            category: "Classics",
            value: "Classics",
            Poster: "images/wonka.png",
            Release_Date: "1972",
            title: "Wonka",

        },
        {
            category: "Film_Festival_Favourtives",
            value: "Film Festival Favourtives",
            Poster: "images/wonka.png",
            Release_Date: "1972",
            title: "Wonka",

        },
        {
            category: "Actors",
            value: "Actors",
            Poster: "images/wonka.png",
            Release_Date: "1972",
            title: "Wonka",

        },
        {
            category: "Mood",
            value: "Mood",
            Poster: "images/wonka.png",
            Release_Date: "1972",
            title: "Wonka",

        },
        {
            category: "Directors",
            value: "Directors",
            Poster: "images/wonka.png",
            title: "Wonka",
            Release_Date: "1972",
        }
    ]

    const genres = ["Action", "Adventure", "Anime", "Awards", "Comedy", "Cinematic", "Crime", "Documentary", "Dystopian", "Family", "Fantasy", "Drama","Gangsters", "Historical", "Crime", "Documentary", "Dystopian", "Family", "Fantasy", "Gangsters", "Horror", "Musical", "Mystery", "Psychological", "Romance"]

    const [genre, setGenre] = useState("crime")
    const [type, setType] = useState("movie")
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [Movies, setMovies] = useState([]);
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const result = await fetchDataFromApi("/movies-find",selectedGenres, type);
                if (Array.isArray(result)) {
                    setMovies(result);
                } else {
                    console.error('Fetched data is not an array:', result);
                    setMovies([]);
                }
            } catch (error) {
                console.error('Error fetching movies:', error);

            }
        };

        fetchMovies();
    }, [selectedGenres, type]);


    // console.log(Movies,selectedGenres);
    function categoryFunc(params) {
        setType(params.target.innerText)
    }

    function category(params) {
        setGenre(params.target.innerText)
    }

    const handleGenreSelect = (genre) => {
        setSelectedGenres((prevSelected) => {
            if (prevSelected.includes(genre)) {
                return prevSelected.filter(g => g !== genre);
            } else if (prevSelected.length < 10) {
                return [...prevSelected, genre];
            } else {
                return prevSelected;
            }
        });
    };
    const responsive = {
        superlargedesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5.7,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2.5,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        }
    };
    return (
        <Fragment>
            <section className='categoryCardSection d-flex align-items-center justify-content-center'>
                <div className='container d-flex gap-1 align-items-center'>
                    <div className="dropdown">
                        <button className=" Active dropdown-toggle d-flex align-items-center justify-content-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <h6>{type}</h6>
                        </button>
                        <ul className="dropdown-menu" >
                            <li><button onClick={categoryFunc} className="dropdown-item" type="button"><MdArrowForward />TV Series</button></li>
                            <li><button onClick={categoryFunc} className="dropdown-item" type="button"><MdArrowForward />Movie</button></li>
                            <li><button onClick={categoryFunc} className="dropdown-item" type="button"><MdArrowForward />Curated List</button></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button className=" Active dropdown-toggle d-flex align-items-center justify-content-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <h6>Top</h6>
                        </button>
                        {/* <ul className="dropdown-menu" >
                            <li><button onClick={category} className="dropdown-item" type="button"><MdArrowForward />Crime</button></li>
                            <li><button onClick={category} className="dropdown-item" type="button"><MdArrowForward />Documentary</button></li>
                            <li><button onClick={category} className="dropdown-item" type="button"><MdArrowForward />Dystopian</button></li>
                        </ul> */}
                    </div>
                    <Carousel
                        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                        responsive={responsive}
                        className='innerContianer d-flex align-items-center'>
                        {genres.map((elem, index) => (
                            <Tagebutton
                                key={index}
                                tag={elem}
                                isSelected={selectedGenres.includes(elem)}
                                onSelect={handleGenreSelect}
                            />
                        ))}
                    </Carousel>
                </div>
            </section>
            <section className='pt-5 pb-5'>
                <div className="container">
                    <div className="breadcrumb">
                        <h3>Showing results for <span>{"Hidden Gems"} / {type}</span></h3>
                        <p className=''>Search only for <span>{"Hidden Gems"}</span></p>
                    </div>
                    <div className="cardsitems">
                        {Movies.length > 0 ?
                            Movies.map((elem, index) => {
                                return <Cards key={index} Poster={elem.moviePoster} Title={elem.name} catagory={elem.genre} watch={elem.popularity} year={elem.releaseDate} episode={elem.episode} btn={true} mediaId={elem._id.$oid} />
                            })
                            : <div className='notSelected d-flex align-items-center justify-content-center'><h3>plezz select atlist three genre!!!</h3></div>}
                    </div>
                </div>
            </section>
            <section className='pt-5 pb-5'>
                <div className="container d-flex align-content-center justify-content-center">
                    <nav aria-label="Page navigation"
                        className='bg-transparent'
                    >
                        <ul className="pagination mb-0  d-flex align-items-center justify-content-center gap-2 ">
                            <li className=" page-item "><a className="page-link " href="#"><IoIosArrowBack />Previous</a></li>
                            <li className="page-item active"><a className="page-link acitve" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item "><a className="page-link" href="#">3</a></li>
                            <li className="page-item active "><a className="page-link" href="#">Next< IoIosArrowForward /></a></li>
                        </ul>
                    </nav>
                </div>
            </section>
        </Fragment>
    )
}

export default CategoryPage
