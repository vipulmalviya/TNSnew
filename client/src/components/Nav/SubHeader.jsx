import React, { useState } from 'react'
import Tagebutton from '../buttons/Tagebutton'
import Carousel from "react-multi-carousel";
const SubHeader = () => {




    const responsive = {
        superlargedesktop: {
            breakpoint: { max: 4000, min: 1860 },
            items: 18,
        },
        desktop: {
            breakpoint: { max: 1860, min: 1280 },
            items: 15,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 7,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 6,
        }
    }

    const Genres = ["Movie", "Sad", "Adventurous", "Romantic", "Thrilling", "Scary", "Thought-Provoking", "Thrilling", "Slowburn", "Dark", "Mind-Bending", "Family-Friendly", "Epic", "Uplifting", "Mystical", "Humorous", "Nostalgic"]

    const [selectedGenres, setSelectedGenres] = useState([]);

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
    return (
        <div className="subHeader d-flex align-items-center justify-content-center">
            <div className=" container d-flex align-items-center justify-content-center">
                <Carousel
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    responsive={responsive}
                    className='container d-flex gap-2 align-items-center justify-content-start'>
                    {Genres.map((elem, index) => (
                        <Tagebutton
                            key={index}
                            tag={elem}
                            isSelected={selectedGenres.includes(elem)}
                            onSelect={handleGenreSelect}
                        />
                    ))}
                </Carousel>
            </div >
        </div >
    )
}

export default SubHeader
