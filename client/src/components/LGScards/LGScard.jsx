import React, { useEffect, useRef } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import "./LGScard.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';

const LGScard = ({ data, sectiontitle, truep }) => {

    const responsive = {
        superlargedesktop: {
            breakpoint: { max: 4000, min: 1860 },
            items: 11,
        },
        desktop: {
            breakpoint: { max: 1860, min: 1280 },
            items: 8.7,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 5.2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2.7,
        }
    }

    return (
        <section>
            <div className='container'>
                <h3 className='SectionLable mb-4 align-items-center'>
                    {sectiontitle}<IoIosArrowForward />
                </h3>
                <Carousel
                    keyBoardControl={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    infinite={true}
                    removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                    responsive={responsive}
                    className='cardContainer d-flex align-items-center'
                >
                    {data.map((elem, index) => (
                        <div key={index} className='LSGcard d-flex flex-column align-items-center justify-content-center'>
                            <Link to="/CategoryPage" className='d-flex flex-column align-items-center justify-content-center'>
                            <img loading="lazy" src={elem.svg} alt={elem.title} />
                            <h3>{elem.title}</h3>
                            </Link>
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    );
}

export default LGScard;
