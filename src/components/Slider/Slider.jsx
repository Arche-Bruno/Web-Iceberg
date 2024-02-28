import React, { useState } from "react";
import "./Slider.css";


import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const handleNext = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % imagesSlider.length);
    };
  
    const handlePrev = () => {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? imagesSlider.length - 1 : prevSlide - 1
      );
    };
  
    return (
      <div className="container-slider">
        <div className="container-sliders">
          
  
          <div className="btns-prev-next">
            <button className="prev" onClick={handlePrev}>
              <ArrowBackIosIcon />
            </button>
            <button className="next" onClick={handleNext}>
              <ArrowForwardIosIcon />
            </button>
          </div>
          <div className="info-Slider">
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
              tenetur dicta accusamus aliquam expedita, quia ducimus, pariatur
              eos eveniet labore ex laborum dolor aut deleniti in dolorum
              architecto at exercitationem.
            </span>
          </div>
        </div>
      </div>
    );
  };
  
  export default Slider;