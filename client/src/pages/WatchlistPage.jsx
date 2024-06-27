import React, { useEffect, useState } from 'react'
import CuratedSlider from '../components/Curated-Lists/CuratedSlider.jsx';
import Card from '../components/card/Card.jsx';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { GoArrowRight } from 'react-icons/go';
import { IoIosAddCircle, IoMdMore } from 'react-icons/io';
import { IoAddCircle, IoAddCircleOutline, IoCheckmarkDone } from 'react-icons/io5';
import Modal from '../components/card/Modal.jsx';
import WatchlistCard from '../components/card/WatchlistCard.jsx';
import { FiTag } from "react-icons/fi";
import List from '../components/dragableList/List.jsx';
import { PiUsersBold } from 'react-icons/pi';
import WathlistOptionCard from '../components/card/WathlistOptionCard.jsx';
import { LuPen } from 'react-icons/lu';
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";


const data = [
  {
    Poster: 'images/dune.png',
    Title: 'Dune Part Two',
    watch: "94.5",
    catagory: "Sci-Fi, Adventure",
    Release_Date: "1972",

  },
  {
    Poster: 'images/KillersOfTheFlowerMoon.png',
    Title: 'Killers of the Flower Moon',
    watch: "90.5",
    catagory: "Crime, Western",
    Release_Date: "1972",

  },
  {
    Poster: 'images/saltburn.png',
    Title: 'Saltburn',
    watch: "91.5",
    catagory: "Comedy, Drama",
    Release_Date: "1972",

  },
  {
    Poster: 'images/Barbie.png',
    Title: 'Barbie',
    watch: "87.5",
    catagory: "Comedy, Fantasy",
    Release_Date: "1972",

  },
  {
    Poster: 'images/ThreeOfUs.png',
    Title: 'Three of us',
    watch: "91.3",
    catagory: "Drama",
    Release_Date: "1972",

  },
  {
    Poster: 'images/ThreeOfUs.png',
    Title: 'Three of us',
    watch: "91.3",
    catagory: "Drama",
    Release_Date: "1972",

  },
  {
    Poster: 'images/ThreeOfUs.png',
    Title: 'Three of us',
    watch: "91.3",
    catagory: "Drama",
    Release_Date: "1972",

  },
  {
    Poster: 'images/ThreeOfUs.png',
    Title: 'Three of us',
    watch: "91.3",
    catagory: "Drama",
    Release_Date: "1972",

  },
  {
    Poster: 'images/Sambhadur.png',
    Title: 'Sam Bhadur',
    watch: "89.5",
    catagory: "Biography, Drama",
    Release_Date: "1972",
  }
]

const responsive = {
  superlargedesktop: {
    breakpoint: { max: 4000, min: 1860 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 1860, min: 1280 },
    items: 5.7,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2.5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  }
};
const WatchlistPage = () => {


  const [ModalShow, setModalShow] = useState(false)

  function modalshow() {
    setModalShow(!ModalShow)
  }

  // console.log(first.push(1));


  return (
    <fregment >
      <section className='headersection d-flex flex-column'>
        <div onClick={modalshow} className="container d-flex flex-column align-items-start justify-content-center" >
          <div className='d-flex align-items-center justify-content-center gap-3'>
            <button className='backButton'>
              <FaArrowLeftLong style={{ color: "#BACC4A", fontSize: "1.2rem", }} />
            </button>
            <h1>My Watchlist</h1>
          </div>
          <div className="myWatchlistDiv d-flex flex-column align-items-center justify-content-center gap-2">
            <IoAddCircle />
            <p>Create your First Watchlist</p>
          </div>
          <div className='pagehadding'>
            <p className='d-flex align-items-cetner gap-2'><IoCheckmarkDone /> Creating watchlists for yourself can help track your favourite movies or shows easily and solves much fuse about what to watch next?</p>
            <p className='d-flex align-items-cetner gap-2'><IoCheckmarkDone /> You can simply add great movies or shows from our recommendations based titles or use TNS score to decide what to watch or what not to.</p>
          </div>
        </div>
      </section >
      {ModalShow && <Modal onclick2={modalshow} prop={true} detail={"create new watchlist"} />}
      <section>
        <div className="container">
          <div className='cardHeaders d-flex'>
            <h3>Previously Watched Titles</h3>
            <span className="d-flex align-items-center justify-content-center gap-2" style={{ color: "white", cursor: "pointer" }}>See All <GoArrowRight /></span>
          </div>
          <Carousel className="MovieCards d-flex"
            responsive={responsive}
            removeArrowOnDeviceType={["tablet", "mobile"]}

          >
            {data.map((elem, index) => <Card key={index} Poster={elem.Poster} Title={elem.Title || elem.original_name} catagory={elem.catagory} watch={elem.watch} btn={true} year={elem.Release_Date} />)}
          </Carousel>
        </div>
      </section>
      <section>
        <div className="container">
          <div className='cardHeaders d-flex'>
            <h3>Top Suggestions Matches with your Taste </h3>
            <span className="d-flex align-items-center justify-content-center gap-2" style={{ color: "white", cursor: "pointer" }}>See All <GoArrowRight /></span>
          </div>
          <Carousel className="MovieCards d-flex"
            responsive={responsive}
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            {data.map((elem, index) => <Card key={index} Poster={elem.Poster} Title={elem.Title || elem.original_name} catagory={elem.catagory} watch={elem.watch} btn={true} year={elem.Release_Date} />)}
          </Carousel>
        </div>
      </section>
      <CuratedSlider title={"Curated Lists Just For You"} />
    </fregment>
  )
}

export default WatchlistPage
