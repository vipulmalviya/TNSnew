import React, { useEffect, useRef, useState } from "react";
import "./List.css";
import { FiTag } from 'react-icons/fi';
import { MdDone, MdOutlineDragIndicator } from 'react-icons/md';
import { IoMdMore } from 'react-icons/io';
import WathlistOptionCard from "../card/WathlistOptionCard";

const List = ({ number, title, genres, year, duration, rating, userRating, tag, onDragStart, onDragOver, onDrop, index, image, draggedItemIndex }) => {
  const [showOption, setShowOption] = useState(false);
  const [text, setText] = useState('Masterpiece');
  const [isEditing, setIsEditing] = useState(false);
  const [indicatorPosition, setIndicatorPosition] = useState();

  const wrapperRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }

    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        saveText();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isEditing]);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const words = inputValue.split("");
    if (words.length <= 10) {
      setText(inputValue);
    }
  };

  const handleBlur = () => {
    saveText();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      saveText();
    }
  };

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const saveText = () => {
    setIsEditing(false);
  };

  const handleDragStart = (e) => {
    const itemHeight = e.currentTarget.clientHeight;
    const mouseY = e.clientY;
    const itemTop = e.currentTarget.getBoundingClientRect().top;
    const distanceFromTop = mouseY - itemTop;
    const isDragUp = distanceFromTop < itemHeight / 2;
    setIndicatorPosition(isDragUp ? 'top' : 'bottom');
    onDragStart(e, index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    const itemHeight = e.currentTarget.clientHeight;
    const mouseY = e.clientY;
    const itemTop = e.currentTarget.getBoundingClientRect().top;
    const distanceFromTop = mouseY - itemTop;
    const isDragUp = distanceFromTop < itemHeight / 2;
    setIndicatorPosition(isDragUp ? 'top' : 'bottom');
    onDragOver(e, index);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    onDrop(e, index);
  };

  console.log(draggedItemIndex);

  return (
    <>
      <div
        ref={wrapperRef}
        className='listItem position-relative container d-flex align-items-center justify-content-center p-2'
        draggable="true"
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {draggedItemIndex === index && indicatorPosition === 'top' && (
          <div className="drag-indicator-top"></div>
        )}
        <div className='div2 d-flex align-items-center justify-content-start gap-3'>
          <h4 className='div1 number d-flex align-items-center justify-content-center'><MdOutlineDragIndicator className="hinglight" /> {number}</h4>
          <div className="d-flex align-items-center justify-content-start gap-2">
            <img loading="lazy" height={"80px"} width={"50px"} src={image} alt="Movie Poster" style={{ borderRadius: "5px" }} />
            <div className='d-flex align-items-start justify-content-center flex-column gap-1'>
              <h4 className='mb-0'>{title}</h4>
              <p className='mb-0'> {genres}</p>
              <p className='mb-0'> {year} . {duration}</p>
            </div>
          </div>
        </div>
        <h4 className='div3 d-flex align-items-center justify-content-center'>{rating}</h4>
        <h4 className='div4 d-flex align-items-center justify-content-center'>{userRating}</h4>
        {isEditing ? (
          <>
            <input
              ref={inputRef}
              type="text"
              value={text}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyPress={handleKeyPress}
              autoFocus
            />
          </>
        ) : (
          <div className="div5 d-flex align-items-center justify-content-center gap-2 hinglight" onClick={handleDoubleClick}><FiTag /> {text}</div>
        )}
        <span className='position-relative div6 d-flex align-items-center justify-content-center gap-4'>
          <button><MdDone style={{ color: "#71E839" }} /></button>
          <button><img loading="lazy" src="images/delete.svg" alt="" /></button>
          <button className="position-relative"><IoMdMore onClick={() => setShowOption(index === showOption ? -1 : index)} style={{ color: "var(--decorate-color)" }} />
            {showOption === index && <WathlistOptionCard icon1={"images/move.svg"} icon2={"images/pen-line (1).svg"} prop1={"Move to"} prop2={"Write a Review"} />}
          </button>
        </span>
        {draggedItemIndex === index && indicatorPosition === 'bottom' && (
          <div className="drag-indicator-bottom"></div>
        )}
      </div>
    </>
  );
};

export default List;