import React, { useState } from 'react'
import "./Footer.css"
import { FaInstagram } from 'react-icons/fa'
import { ImFacebook } from 'react-icons/im'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Footer = () => {


    return (
        <footer className='footer'>

            <div className='container d-flex align-content-center'>
                <div className="fleft container footerM d-flex">
                    <div className='vip d-flex flex-column align-content-center '>
                        <p>We at TheNextStream are determined to make your life binge by providing you a Handpicked collection of Best Web Series & Movies which you can enjoy solo, with your family and friends.</p>
                        <div className='socialdiv'>
                            <h3> Join our Fight-Club </h3>
                            <div className='socialIcone gap-1 d-flex'>
                                <a href="https://www.instagram.com/thenextstream/">
                                    <FaInstagram />
                                </a>
                                <a href="#">
                                    <ImFacebook />
                                </a>
                                <a href="#">
                                    <FaXTwitter />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='fright container d-flex align-items-start justify-content-center' >
                    <div className='d-flex flex-column gap-2'>
                        <h3 className='hadd'>What to Watch</h3>
                        <div className='d-flex footeM-r-box'>
                            <div className='links'>
                                <p>Cult Classic Movies</p>
                                <p>Award Winning Movies</p>
                                <p>Best TV Shows</p>
                                <p>Binge Worthy TV Show</p>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex flex-column gap-2'>
                        <h3 className='hadd'>What’s Streaming</h3>
                        <div className='d-flex footeM-r-box'>
                            <div className='links'>
                                <p>What’s On Netflix</p>
                                <p>What’s On Prime Video</p>
                                <p>What’s On Jio Cinema</p>
                                <p>What’s On Mubi</p>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex flex-column gap-2'>
                        <h3 className='hadd'>Company</h3>
                        <div className='d-flex footeM-r-box'>
                            <div className='links'>
                                <p>About TheNextStream</p>
                                <p>What is TNS Score?</p>
                                <p>Buy a Coffee for Us</p>
                                <p>Help</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mbFooter'>
                    <div className="accordion" id="accordionExample1" style={{ background: "transparent" }}>
                        <div className="accordion-item" style={{ background: "transparent", color: "var(--text-color)", }}>
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ background: "transparent", color: "var(--text-color)", border: "0px", }}>
                                    What to Watch
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" >
                                <div className="accordion-body d-flex align-items-start flex-column gap-2">
                                    <Link to="">Cult Classic Movies</Link>
                                    <Link to="">Award Winning Movies</Link>
                                    <Link to="">Best TV Shows</Link>
                                    <Link to="">Binge Worthy TV Show</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion" id="accordionExample2" style={{ background: "transparent", borderTop: "0px" }}>
                        <div className="accordion-item" style={{ background: "transparent", color: "var(--text-color)", }}>
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo" style={{ background: "transparent", color: "var(--text-color)", border: "0px", }}>
                                    What’s Streaming
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse show" >
                                <div className="accordion-body d-flex align-items-start flex-column gap-2">
                                <Link to="">What’s On Netflix</Link>
                                <Link to="">What’s On Prime Video</Link>
                                <Link to="">What’s On Jio Cinema</Link>
                                <Link to="">What’s On Mubi</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion" id="accordionExample3" style={{ background: "transparent", borderTop: "0px" }}>
                        <div className="accordion-item" style={{ background: "transparent", color: "var(--text-color)", }}>
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree" style={{ background: "transparent", color: "var(--text-color)", border: "0px", }}>
                                    Company
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse show" >
                                <div className="accordion-body d-flex align-items-start flex-column gap-2">
                                <Link to="/">About TheNextStream</Link>
                                <Link to="/">What is TNS Score?</Link>
                                <Link to="/">Buy a Coffee for Us</Link>
                                <Link to="/">Help</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="footerb">
                <div className='footerbcontainer container d-flex align-align-items-center justify-content-between'>
                    <p className='d-flex align-items-center mb-0'>© 2024 TheNextstream. All Rights Reserved.</p>
                    <Link to="/" className='Flogo d-flex align-items-center'>
                        <img loading="lazy" src="images/latestlogo.svg" alt="" />
                    </Link>
                </div>
            </div>
        </footer >
    )
}

export default Footer
