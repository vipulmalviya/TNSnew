import React, { useEffect, useState } from 'react'
import CuratedSlider from '../components/Curated-Lists/CuratedSlider.jsx';
import Card from '../components/card/Card.jsx';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { GoArrowRight } from 'react-icons/go';
import { IoAddCircle, IoAddCircleOutline, IoCheckmarkDone } from 'react-icons/io5';
import Modal from '../components/card/Modal.jsx';
import WatchlistCard from '../components/card/WatchlistCard.jsx';
import { useParams } from 'react-router-dom';
import { LuPen } from 'react-icons/lu';
import { IoMdMore } from 'react-icons/io';
import WathlistOptionCard from '../components/card/WathlistOptionCard.jsx';
import { FiTag } from 'react-icons/fi';
import List from '../components/dragableList/List.jsx';



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
const YourWatchlist = () => {
  const [items, setItems] = useState([
    { number: 1, title: 'Movie 1', genres: 'Action', year: 2021, duration: '2h', rating: '92.5', userRating: '98%(1.2k)', tag: 'Masterpiece', imageUrl: "images/12fail.png", },
    { number: 2, title: 'Movie 2', genres: 'Action', year: 2022, duration: '2h', rating: '92.5', userRating: '98%(1.2k)', tag: 'Masterpiece', imageUrl: "images/12fail.png", },
    { number: 3, title: 'Movie 3', genres: 'Action', year: 2023, duration: '2h', rating: '92.5', userRating: '98%(1.2k)', tag: 'Masterpiece', imageUrl: "images/12fail.png", },
    { number: 4, title: 'Movie 4', genres: 'Action', year: 2024, duration: '2h', rating: '92.5', userRating: '98%(1.2k)', tag: 'Masterpiece', imageUrl: "images/12fail.png", },
    { number: 5, title: 'Movie 5', genres: 'Action', year: 2024, duration: '2h', rating: '92.5', userRating: '98%(1.2k)', tag: 'Masterpiece', imageUrl: "images/12fail.png", },
    { number: 6, title: 'Movie 6', genres: 'Action', year: 2024, duration: '2h', rating: '92.5', userRating: '98%(1.2k)', tag: 'Masterpiece', imageUrl: "images/12fail.png", },
    { number: 7, title: 'Movie 7', genres: 'Action', year: 2024, duration: '2h', rating: '92.5', userRating: '98%(1.2k)', tag: 'Masterpiece', imageUrl: "images/12fail.png", },
    { number: 8, title: 'Movie 8', genres: 'Action', year: 2024, duration: '2h', rating: '92.5', userRating: '98%(1.2k)', tag: 'Masterpiece', imageUrl: "images/12fail.png", },
  ]);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('text/plain', index);
    setDraggedItemIndex(index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const [draggedItemIndex, setDraggedItemIndex] = useState(null);;
  const handleDrop = (e, index) => {
    const draggedIndex = e.dataTransfer.getData('text/plain');
    const newItems = [...items];
    const [draggedItem] = newItems.splice(draggedIndex, 1);
    newItems.splice(index, 0, draggedItem);

    const updatedItems = newItems.map((item, idx) => ({
      ...item,
      number: idx + 1
    }));
    setDraggedItemIndex(null);
    setItems(updatedItems);
  };

  const [ShowOption, setShowOption] = useState(false)
  const [ModalShow, setModalShow] = useState(false)
  const [watchlists, setWatchlists] = useState(false);
  const [isCardsShow, setIsCardsShow] = useState(true);
  const [Manage, setManage] = useState(false);

  function showoptin() {
    setShowOption(!ShowOption)
  }

  function modalshow() {
    setModalShow(!ModalShow)
  }

  function mangefunc() {
    setManage(!Manage)
  }
  
    function manage() {
    setIsCardsShow(!isCardsShow)
  }

  return (
    <fregment >
       {Manage && <>
       <section className='watchlistInfoSection d-flex align-items-start justify-content-center '>
        <div className="container d-flex align-items-center justify-content-start">
          <div className='d-flex align-items-center justify-content-between w-100'>
            <div className="watchlistsInfo d-flex align-items-center justify-content-start">
              <div className="watchlistAvatar mx-3">
                <img height={"100%"} width={"100%"} src="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1716545127~exp=1716545727~hmac=b06f7f7f6ababecdd569f3849519e0f8971d75936cab68ca367eca074bbea299" alt="" />
                <button className='AvatarBtn position-absolute d-flex flex-column align-items-center justify-content-center'>
                  <LuPen />
                  Choose Avatar
                </button>
              </div>
              <div className='pagehadding'>
                <p className='mb-0'>Watchlist</p>
                <h2 onClick={modalshow} style={{ cursor: "pointer", }}>Crime - Thriller Movies</h2>
                {ModalShow && <Modal prop={ModalShow} />}

                <p className=' d-flex align-items-center justify-content-start gap-2'><span>Rahul Malviya</span> . <span>8 Movies</span> . <span>2 TV Series</span></p>
              </div>
            </div>
            <button className="position-relative d-flex align-self-start"><IoMdMore onClick={showoptin} style={{ color: "#FFFF", fontSize: "1.5rem", }} />
              {ShowOption && <WathlistOptionCard icon1={"images/pen.svg"} icon2={"images/deletegray.svg"} prop1={"Rename"} prop2={"Delete List"} />}
            </button>
          </div>
        </div>
      </section>
        <section className='listItemsSection'>
          <div className='listHead container d-flex align-items-center justify-content-start my-3'>
            <p className='div2 mb-0 d-flex align-items-center justify-content-start gap-3'>
              <p className='div1 number mb-0 d-flex align-items-center justify-content-center mx-3'>#</p>
              <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 3.8335C1.5 3.05693 1.5 2.66864 1.62687 2.36236C1.79602 1.95398 2.12048 1.62952 2.52886 1.46036C2.83515 1.3335 3.22343 1.3335 4 1.3335H14C14.7766 1.3335 15.1649 1.3335 15.4711 1.46036C15.8795 1.62952 16.204 1.95398 16.3731 2.36236C16.5 2.66864 16.5 3.05693 16.5 3.8335C16.5 4.61007 16.5 4.99835 16.3731 5.30464C16.204 5.71302 15.8795 6.03747 15.4711 6.20663C15.1649 6.3335 14.7766 6.3335 14 6.3335H4C3.22343 6.3335 2.83515 6.3335 2.52886 6.20663C2.12048 6.03747 1.79602 5.71302 1.62687 5.30464C1.5 4.99835 1.5 4.61007 1.5 3.8335Z" stroke="white" stroke-width="1.5" />
                <path d="M1.5 12.1668C1.5 11.3903 1.5 11.002 1.62687 10.6957C1.79602 10.2873 2.12048 9.96285 2.52886 9.7937C2.83515 9.66683 3.22343 9.66683 4 9.66683H14C14.7766 9.66683 15.1649 9.66683 15.4711 9.7937C15.8795 9.96285 16.204 10.2873 16.3731 10.6957C16.5 11.002 16.5 11.3903 16.5 12.1668C16.5 12.9434 16.5 13.3317 16.3731 13.638C16.204 14.0463 15.8795 14.3708 15.4711 14.54C15.1649 14.6668 14.7766 14.6668 14 14.6668H4C3.22343 14.6668 2.83515 14.6668 2.52886 14.54C2.12048 14.3708 1.79602 14.0463 1.62687 13.638C1.5 13.3317 1.5 12.9434 1.5 12.1668Z" stroke="white" stroke-width="1.5" />
              </svg>
              Title</p>
            <div className='div3 d-flex align-content-center justify-content-center'>
              <img height={"20px"} width={"45px"} src="images/latestlogo.svg" alt="" />
            </div>
            <p className='div4  d-flex align-content-center justify-content-center gap-2 mb-0'><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.83333 14.6668V13.0002C9.83333 10.699 7.96785 8.8335 5.66667 8.8335C3.36548 8.8335 1.5 10.699 1.5 13.0002V14.6668H9.83333ZM9.83333 14.6668H16.5V13.8335C16.5 11.3789 14.6345 9.66683 12.3333 9.66683C11.1556 9.66683 10.0919 10.1881 9.33411 11.0261M8.16667 3.8335C8.16667 5.21421 7.04738 6.3335 5.66667 6.3335C4.28595 6.3335 3.16667 5.21421 3.16667 3.8335C3.16667 2.45278 4.28595 1.3335 5.66667 1.3335C7.04738 1.3335 8.16667 2.45278 8.16667 3.8335ZM14 5.50016C14 6.42064 13.2538 7.16683 12.3333 7.16683C11.4129 7.16683 10.6667 6.42064 10.6667 5.50016C10.6667 4.57969 11.4129 3.8335 12.3333 3.8335C13.2538 3.8335 14 4.57969 14 5.50016Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
              User Rating</p>
            <p className="div5 gap-1 d-flex align-content-center justify-content-center mb-0"><FiTag /> Tag</p>
            <p className='mb-0 div6 d-flex align-items-center justify-content-center gap-4'>More Option</p>
          </div>
          <div>
            {items.map((item, index) => (
              <List
                key={item.number}
                index={index}
                number={item.number}
                title={item.title}
                genres={item.genres}
                year={item.year}
                duration={item.duration}
                rating={item.rating}
                userRating={item.userRating}
                tag={item.tag}
                image={item.imageUrl}
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                draggedItemIndex={draggedItemIndex}
              />
            ))}
          </div>
        </section> </>}
      <section>
        <div className="container">
          <div className='header d-flex align-items-center'>
            <h2>Watchlist</h2>
            <p onClick={modalshow} className='watchlistbtn mb-0'><IoAddCircleOutline />Create New Watchlist</p>
          </div>
          <div className='cardContaienr d-grid'>
            <WatchlistCard openList={mangefunc} />
          </div>
        </div>
      </section>
      {ModalShow && <Modal onclick={modalshow} onclick2={modalshow} />}
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

export default YourWatchlist