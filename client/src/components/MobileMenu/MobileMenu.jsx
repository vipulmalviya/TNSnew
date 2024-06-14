import React from 'react'
import { BiHomeCircle } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import "./MobileMenu.css"
import { TbCategoryPlus } from 'react-icons/tb'
import { BsSearch } from 'react-icons/bs'
import { CiBookmark } from 'react-icons/ci'
import { FaRegCircle } from 'react-icons/fa'

const MobileMenu = () => {
    return (
        <div className='MobileMenu'>
            <div className="  d-flex align-items-center justify-content-center">
                <ul className='container px-3 MobileMenu_ul d-flex align-items-center justify-content-between m-0 '>
                    <li className='MobileMenu_li d-flex align-items-center justify-content-center'>
                        <Link to={"/home"} className='MobileMenu_link d-flex align-items-center justify-content-center flex-column'>
                            <img height={"20px"} width={"20px"} src="../../images/home.svg" alt="" />
                            <p>Home</p>
                        </Link>
                    </li>
                    <li className='MobileMenu_li d-flex align-items-center justify-content-center'>
                        <Link to={"/CategoryPage"} className='MobileMenu_link d-flex align-items-center justify-content-center flex-column'>
                            <img height={"20px"} width={"20px"} src="../../images/categories.svg" alt="" />
                            <p>Categories</p>
                        </Link>
                    </li>
                    <li className='MobileMenu_li d-flex align-items-center justify-content-center'>
                        <Link to={"/search"} className='MobileMenu_link d-flex align-items-center justify-content-center flex-column'>
                            <img height={"20px"} width={"20px"} src="../../images/search.svg" alt="" />
                            <p>Search</p>
                        </Link>
                    </li>
                    <li className='MobileMenu_li d-flex align-items-center justify-content-center'>
                        <Link to={"/watchlistPage"} className='MobileMenu_link d-flex align-items-center justify-content-center flex-column'>
                            <img height={"20px"} width={"20px"} src="../../images/watchlists.svg" alt="" />
                            <p>Watchlists</p>
                        </Link>
                    </li>
                    <li className='MobileMenu_li d-flex align-items-center justify-content-center'>
                        <Link to={"/home"} className='MobileMenu_link d-flex align-items-center justify-content-center flex-column'>
                            <img height={"20px"} width={"20px"} src="../../images/Ellipse 33.svg" alt="" />
                            <p>Profile</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}



export default MobileMenu
