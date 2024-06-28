import React, { useEffect, useRef, useState } from 'react'
import CuratedSlider from '../components/Curated-Lists/CuratedSlider.jsx';
import Card from '../components/card/Card.jsx';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { GoArrowRight } from 'react-icons/go';
import { IoAddCircle, IoAddCircleOutline, IoCheckmarkDone } from 'react-icons/io5';
import Modal from '../components/card/Modal.jsx';
import WatchlistCard from '../components/card/WatchlistCard.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import { LuPen } from 'react-icons/lu';
import { IoMdMore } from 'react-icons/io';
import WathlistOptionCard from '../components/card/WathlistOptionCard.jsx';
import { FiServer, FiTag } from 'react-icons/fi';
import List from '../components/dragableList/List.jsx';
import axios from 'axios';
import { FaArrowLeftLong } from 'react-icons/fa6';



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



  const API = import.meta.env.VITE_APP_URI_API;

  // for get watchlist
  const [watchlists, setWatchlists] = useState([]);
  const [WatchlistDetails, setWatchlistDetails] = useState([]);
  const [titles, setTitles] = useState([]);
  const [Manage, setManage] = useState("");

  useEffect(() => {
    const fetchWatchlist = async () => {
      try {
        const url = `${API}/watchlist-get`;
        const response = await axios.get(url);
        setWatchlists(response.data);
      } catch (error) {
        console.error('Error fetching watchlist data:', error);
      }
    };
    fetchWatchlist();
  }, []);



  // for fetch movies
  // const [titles, setTitles] = useState([]);
  const [getId, setGetId] = useState("")
  const getManageCardId = async (e) => {
    setGetId(e)
    await axios.get(`${API}/manageTitles/${e}`)
      .then(result => {
        setTitles(result.data.movieTitles);
        setWatchlistDetails(result.data);
        if (result) {
          setManage(true)
        } else {
          setManage(false)
        }
      })
      .catch(err => console.log(err));
    // mangefunc()
  };


  // for delete list items

  const deletefunc = async (e) => {
    console.log(getId);
    await axios.post(`${API}/delete-title`, {
      listId: e,
      getId
    }).then(result => {

      alert(result)

    }).catch(err => console.log(err));
  }



  // this is for save page state in session storeage

  // const [Manage, setManage] = useState(() => {
  //   const storedbtn = sessionStorage.getItem('Manage');
  //   return storedbtn ? JSON.parse(storedbtn) : false;
  // });
  // const [WatchlistDetails, setWatchlistDetails] = useState(() => {
  //   const WatchlistDetails = sessionStorage.getItem('cards');
  //   return WatchlistDetails ? JSON.parse(WatchlistDetails) : [];
  // });

  // const [titles, setTitles] = useState(() => {
  //   const titles = sessionStorage.getItem('titles');
  //   return titles ? JSON.parse(titles) : [];
  // });

  // useEffect(() => {
  //   if (titles) {
  //     sessionStorage.setItem('titles', JSON.stringify(titles));
  //   }
  // }, [WatchlistDetails]);
  // useEffect(() => {
  //   if (WatchlistDetails) {
  //     sessionStorage.setItem('cards', JSON.stringify(WatchlistDetails));
  //   }
  // }, [WatchlistDetails]);
  // useEffect(() => {
  //   if (Manage) {
  //     sessionStorage.setItem('Manage', JSON.stringify(Manage));
  //   }
  // }, [WatchlistDetails]);

  //  this all things for draggebale list items

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
    const newItems = [...titles];
    const [draggedItem] = newItems.splice(draggedIndex, 1);
    newItems.splice(index, 0, draggedItem);

    const updatedItems = newItems.map((item, idx) => ({
      ...item,
      number: idx + 1
    }));
    setDraggedItemIndex(null);
    setTitles(updatedItems);
  };

  const [ShowOption, setShowOption] = useState(false)
  const [ModalShow1, setModalShow1] = useState(false)
  const [ModalShow, setModalShow] = useState(false)
  const [isCardsShow, setIsCardsShow] = useState(true);

  function showoptin() {
    setShowOption(!ShowOption)
  }

  function modalshow() {
    setModalShow(!ModalShow)
  }
  const [cadrdId, setCardid] = useState('')
  function modalshow1(e) {
    setCardid(e._id)
    setModalShow1(!ModalShow1)
  }

  const wrapperRef = useRef(null)
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowOption(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const result = watchlists.length > 0;

  return (
    <fregment >
      {Manage && <>
        <section ref={wrapperRef} className='watchlistInfoSection d-flex align-items-center justify-content-center '>
          <div className="container d-flex align-items-center justify-content-start">
            <div className='d-flex align-items-center justify-content-between w-100'>
              <div className="watchlistsInfo d-flex align-items-center justify-content-start">
                <div className="watchlistAvatar mx-3">
                  <img height={"100%"} width={"100%"} src={WatchlistDetails?.watchlistAvatar} alt={WatchlistDetails?.watchlistName} />
                  <button className='AvatarBtn position-absolute d-flex flex-column align-items-center justify-content-center'>
                    <LuPen />
                    Choose Avatar
                  </button>
                </div>
                <div className='pagehadding'>
                  <p className='mb-0'>Watchlist</p>
                  <h2 onClick={() => modalshow1(WatchlistDetails)} style={{ cursor: "pointer", }}>{WatchlistDetails.watchlistName}</h2>
                  {ModalShow1 && <Modal id={cadrdId} onclick2={modalshow1} detail={"Edite details"} />}
                  <p className=' d-flex align-items-center justify-content-start gap-2'><span>Rahul Malviya</span> . <span>8 Movies</span> . <span>2 TV Series</span></p>
                </div>
              </div>
              <button className="position-relative d-flex align-self-start"><IoMdMore onClick={showoptin} style={{ color: "#FFFF", fontSize: "1.5rem", }} />
                {ShowOption && <WathlistOptionCard icon1={"images/pen.svg"} icon2={"images/deletegray.svg"} prop1={"Rename"} prop2={"Delete List"} />}
              </button>
            </div>
          </div>
          <div className='listHead'>
            <div className='container d-flex justify-content-between my-3'>
              <div className='div2 d-flex align-items-center justify-content-start gap-5' >
                <div className='mx-3 d-flex align-items-center'>#</div>
                <div className='d-flex align-items-center justify-content-center gap-2 '>
                  <FiServer />
                  <div className='d-flex align-items-center justify-content-center'>Title</div>
                </div>
              </div>
              <div className='div3 d-flex align-items-center justify-content-center'>
                <img height={"20px"} width={"45px"} src="images/latestlogo.svg" alt="" />
              </div>
              <div className='div4 d-flex align-content-center justify-content-center gap-2 mb-0'><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.83333 14.6668V13.0002C9.83333 10.699 7.96785 8.8335 5.66667 8.8335C3.36548 8.8335 1.5 10.699 1.5 13.0002V14.6668H9.83333ZM9.83333 14.6668H16.5V13.8335C16.5 11.3789 14.6345 9.66683 12.3333 9.66683C11.1556 9.66683 10.0919 10.1881 9.33411 11.0261M8.16667 3.8335C8.16667 5.21421 7.04738 6.3335 5.66667 6.3335C4.28595 6.3335 3.16667 5.21421 3.16667 3.8335C3.16667 2.45278 4.28595 1.3335 5.66667 1.3335C7.04738 1.3335 8.16667 2.45278 8.16667 3.8335ZM14 5.50016C14 6.42064 13.2538 7.16683 12.3333 7.16683C11.4129 7.16683 10.6667 6.42064 10.6667 5.50016C10.6667 4.57969 11.4129 3.8335 12.3333 3.8335C13.2538 3.8335 14 4.57969 14 5.50016Z" stroke="white" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round" />
              </svg>
                User Rating</div>
              <div className="div5 gap-1 d-flex align-items-center justify-content-center mb-0"><FiTag /> Tag</div>
              <div className='mb-0 div6 d-flex align-items-center justify-content-center gap-4'>More Option</div>
            </div>
          </div>
        </section>
        <section className='listItemsSection'>
          <div>
            {titles.map((item, index) => (
              <List
                passDeleteFunc={deletefunc}
                item={item}
                index={index}
                key={index}
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                draggedItemIndex={draggedItemIndex}
              />
            ))}
          </div>
        </section> </>}
      {result ? <section>
        <div className="container">
          <div className='header d-flex align-items-center'>
            <h2>Watchlist</h2>
            <p onClick={modalshow} className='watchlistbtn mb-0'><IoAddCircleOutline />Create New Watchlist</p>
          </div>
          <div className='cardContaienr d-grid'>
            <WatchlistCard ManageCardId={getManageCardId} watchlist={watchlists} />
          </div>
        </div>
      </section> : <section className='headersection d-flex flex-column'>
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
      </section >}
      {ModalShow && <Modal onclick2={modalshow} prop={true} detail={"Create new watchlist"} />}
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
