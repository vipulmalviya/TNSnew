import React, { useState } from 'react'
import "./Nav.css"
import { Link, useNavigate } from 'react-router-dom'
import { MdArrowForward} from 'react-icons/md'
import { IoMdClose } from 'react-icons/io'
import { CiSearch } from 'react-icons/ci'
import "react-multi-carousel/lib/styles.css";
import axios from 'axios'


const Nav = ({ setQuery, query }) => {

    const [Nav, setNav] = useState(false)
    function NavFunc(params) {
        setNav(!Nav)
    }
    const navigate = useNavigate()
    const handleNavigate = (event) => {
        navigate('/search')
    };




    // const [userdata, setUserdata] = useState({});
    // console.log("response", userdata);

    // const getUser = async () => {
    //     try {
    //         const response = await axios.get("https://thenextstream.in/login/success", { withCredentials: true });
    //         setUserdata(response.data.user)
    //     } catch (error) {
    //         console.log("error", error)
    //     }
    // }


    //     useEffect(()=>{
    //         getUser()
    //     },[])




    return (
        <div className='position-sticky top-0 z-3' style={{ background: "#282829", }}>
            <header className='d-flex align-items-center justify-content-center'>
                <div className="container">
                    <nav className='d-flex align-items-center gap-3'>
                        <div className="left d-flex">
                            <Link to="/home" className="logo"><img loading="lazy" height={"100%"} weight={"100%"} src="images/latestlogo.svg" alt="" /></Link>
                        </div>
                        <div className="navM gap-4 align-items-center justify-content-end">
                            <form action="" className='d-flex align-items-center '>
                                <input
                                    onClick={handleNavigate}
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    type="text"
                                    placeholder='Search for movies, tv series, curated lists... ' />
                                <CiSearch />
                            </form>
                            <div className='watchlistDiv d-flex gap-2 align-items-center'>
                                <img loading="lazy" height={"100%"} width={"100%"} src="images/bookmark.svg" alt="watchlist icone" />
                                <p>My Watchlist</p>
                            </div>
                            {/* {
                                Object?.keys(userdata)?.length > 0 ? (
                                    <img loading="lazy" data-toggle="tooltip" title="My Profile" height={"35px"} width={"35px"} src="images/Ellipse 33.svg" alt="" />
                                ) : <Button linkprop={"/login"}>Log In</Button>

                            } */}
                            <div className="hamburgur" onClick={NavFunc} >
                                <img loading="lazy" height={"30px"} width={"30px"} src="images/menu-alt-1.svg" alt="" />
                            </div>
                        </div>
                        <div className={`p-2 side-menu d-flex align-items-center justify-content-start flex-column ${Nav ? "open" : ""}`}>
                            <IoMdClose className='closebtn' onClick={NavFunc} />
                            <div className='w-75 d-flex justify-content-center flex-column '>
                                <div className="dropdown">
                                    <button className=" dropdown-toggle d-flex align-items-center justify-content-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <h2>Movies</h2>
                                        {/* { true ?<MdOutlineKeyboardArrowUp /> :<MdKeyboardArrowDown>} */}
                                    </button>
                                    <ul className="dropdown-menu" >
                                        <li><button className="dropdown-item" type="button"><MdArrowForward /> Action</button></li>
                                        <li><button className="dropdown-item" type="button"><MdArrowForward /> Another action</button></li>
                                        <li><button className="dropdown-item" type="button"><MdArrowForward /> Something else here</button></li>
                                    </ul>
                                </div>
                                <div className="dropdown">
                                    <button className=" dropdown-toggle d-flex align-items-center justify-content-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <h2>TV Series</h2>
                                    </button>
                                    <ul className="dropdown-menu" >
                                        <li><button className="dropdown-item" type="button"><MdArrowForward /> Action</button></li>
                                        <li><button className="dropdown-item" type="button"><MdArrowForward /> Another action</button></li>
                                        <li><button className="dropdown-item" type="button"><MdArrowForward /> Something else here</button></li>
                                    </ul>
                                </div>
                                <ul className='navbar-nav'>
                                    <li><Link to="/WatchlistPage" className="dropdown-item" type="button">Curated Lists</Link></li>
                                    <li><button className="dropdown-item" type="button">Weekend Watchlists</button></li>
                                    <li><button className="dropdown-item" type="button">Film’s Club</button></li>
                                    <li><button className="dropdown-item" type="button">Viewer’s Guide</button></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header >
        </div>
    )
}

export default Nav