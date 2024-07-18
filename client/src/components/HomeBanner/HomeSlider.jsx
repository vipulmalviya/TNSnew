import React, { useContext, useEffect, useState } from 'react';
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
import { fetchMovies } from '../../utils/api';
import { MovieContext } from '../../utils/MovieFetch';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../store/movies/moviesSlice';


const HomeSlider = () => {

  const dispatch = useDispatch();
  const { value: movies, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  // const {movies , loading } = useContext(MovieContext);
  // const [Movies, setMovies] = useState([])

  // useEffect(() => {
  //   const getMovies = async () => {
  //     try {
  //       const result = await fetchMovies("/api/movies");
  //       setMovies(result);
  //     } catch (error) {
  //       console.error('Error fetching movies:', error);
  //       setError(error);
  //     }
  //   };

  //   getMovies();
  // }, []);
  


  function years(releaseDate) {
    const dateObject = new Date(releaseDate);
    return dateObject.getFullYear().toString();
  }

  // const [loading, setLoading] = useState(true)
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  // const loading = false
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
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="swiper_container"
        >
          {movies.map((elem, index) => (
            <SwiperSlide key={index} className='swiper-slide d-flex' style={{
              background: `linear-gradient(to top, black, transparent), url(${elem.movieBanner})`
            }}>
              <div onClick={() => navigate(`/${elem._id}`)} className='container p-5 d-flex align-items-end'>
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
                        <path d="M1.66699 4.16667C1.66699 3.23325 1.66699 2.76654 1.84865 2.41002C2.00844 2.09641 2.2634 1.84144 2.57701 1.68166C2.93353 1.5 3.40024 1.5 4.33366 1.5H10.667C11.6004 1.5 12.0671 1.5 12.4236 1.68166C12.7372 1.84144 12.9922 2.09641 13.152 2.41002C13.3337 2.76654 13.3337 3.23325 13.3337 4.16667V13.9091C13.3337 14.7463 13.3337 15.1649 13.16 15.3898C13.0089 15.5857 12.7785 15.7043 12.5312 15.7134C12.2472 15.724 11.9066 15.4807 11.2253 14.9941L7.50033 12.3333L3.77531 14.9941C3.09406 15.4807 2.75344 15.724 2.46945 15.7134C2.22219 15.7043 1.9918 15.5857 1.84063 15.3898C1.66699 15.1649 1.66699 14.7463 1.66699 13.9091V4.16667Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg> : <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.45801 3.90833C1.45801 3.02158 1.45801 2.57821 1.63058 2.23951C1.78238 1.94159 2.0246 1.69937 2.32252 1.54757C2.66122 1.375 3.10459 1.375 3.99134 1.375H10.008C10.8948 1.375 11.3381 1.375 11.6768 1.54757C11.9748 1.69937 12.217 1.94159 12.3688 2.23951C12.5413 2.57821 12.5413 3.02158 12.5413 3.90833V13.1636C12.5413 13.959 12.5413 14.3566 12.3764 14.5703C12.2328 14.7564 12.0139 14.8691 11.779 14.8778C11.5092 14.8878 11.1856 14.6566 10.5384 14.1944L6.99967 11.6667L3.46091 14.1944C2.81372 14.6566 2.49013 14.8878 2.22034 14.8778C1.98545 14.8691 1.76658 14.7564 1.62296 14.5703C1.45801 14.3566 1.45801 13.959 1.45801 13.1636V3.90833Z" fill="black" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
