import React, { useEffect, useRef, useState } from "react";
import "./List.css";
import { FiTag } from 'react-icons/fi';
import { MdDone, MdOutlineDragIndicator } from 'react-icons/md';
import { IoMdMore } from 'react-icons/io';
import WathlistOptionCard from "../card/WathlistOptionCard";
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";

const List = ({ onDragStart, onDragOver, onDrop, index, item, draggedItemIndex, passDeleteFunc }) => {
  const [showOption, setShowOption] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [indicatorPosition, setIndicatorPosition] = useState();

  const wrapperRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
      wrapperRef.current.focus();
      setShowOption(false)
    }

    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        saveText();
      }
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowOption(false)
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
    } else {
      toast("you give tag under 10 Alphabets only!!!");
    }
  };

  const [text, setText] = useState(() => {
    const result = localStorage.getItem('text');
    return result ? JSON.parse(result) : "Masterpice";
  });

  useEffect(() => {
    if (text) {
      localStorage.setItem('text', JSON.stringify(text));
    }
  }, [text]);


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

  const navigate = useNavigate();

  const address = (item[0]._id.$oid);

  return (
    <>
      <div
        onClick={() => navigate(`/${address}`)}
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
        <div
          className='div2 d-flex align-items-center justify-content-start gap-5' >
          <div className='div1 number d-flex align-items-center justify-content-center'><MdOutlineDragIndicator className="hinglight" />{index + 1}</div>
          <div className="d-flex align-items-center justify-content-start gap-2">
            <img className="moviePoster" loading="lazy" height={"80px"} width={"50px"} src={item[0].moviePoster} alt="Movie Poster" style={{ borderRadius: "5px" }} />
            <div className='d-flex align-items-start justify-content-center flex-column gap-1'>
              <h4 className='mb-0'>{item[0].name}</h4>
              <p className='mb-0'> {item[0].genre.join(", ")}</p>
              <p className='mb-0'>{[new Date(item[0].releaseDate).getFullYear()]}</p>
            </div>
          </div>
        </div>
        <h4 className='div3 d-flex align-items-center justify-content-center'>92.5</h4>
        <h4 className='div4 d-flex align-items-center justify-content-center'>98%(1.2k)</h4>
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
        <span className='position-relative div6 d-flex align-items-center justify-content-center gap-3'>
          <button><MdDone style={{ color: "#71E839" }} /></button>
          <button onClick={() => { passDeleteFunc(item[0].name) }}><img loading="lazy" src="images/delete.svg" alt="icone" /></button>
          <button onClick={() => setShowOption(index === showOption ? -1 : index)} className="position-relative"><IoMdMore style={{ color: "var(--decorate-color)" }} />
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
