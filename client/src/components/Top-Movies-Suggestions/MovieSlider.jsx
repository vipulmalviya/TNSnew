import React, { useContext, useEffect, useRef, useState } from 'react';
import "./movieSlider.css";
// import OwlCarousel from 'react-owl-carousel';
import Card from '../card/Card.jsx';
// import useFetch from '../src/utils/useFetch.jsx';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { GoArrowRight } from 'react-icons/go';
import { MovieContext } from '../../utils/MovieFetch.jsx';




const MovieSlider = ({ title, type }) => {
  const { movies, loading } = useContext(MovieContext)
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
          swipeable={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}>
          {movies?.map((elem, index) =>
            <Card value={index} key={index} Poster={elem.moviePoster} Title={elem.name} catagory={elem.genre} watch={elem.popularity} year={elem.releaseDate} episode={elem.episode} btn={true} mediaId={elem._id.$oid} elem={elem} />
          )}
        </Carousel>}
      </div>
    </section>
  )
}

export default MovieSlider;
