import React, { useEffect, useState } from "react";
import "./SliderMobile.css";
import { imagesSlider } from "../data.js";
import SliderMobileCard from "./SliderMobileCard.jsx";
import { useSelector } from "react-redux";

const SliderMobile = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);
  const [key, setKey] = useState(0); // Nuevo estado para manejar el key


  const hideItems = useSelector((store)=> store.hideItemsSlice)


  const handleDotClick = (index) => {
    setCurrentIndex(index);

    if (index === 0) {
      setTranslateValue(0);
    } else {
      let t = index * 100;
      setTranslateValue(-t);
    }
  };

  useEffect(() => {
    let slider = setInterval(() => {
      if (currentIndex < imagesSlider.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setTranslateValue(-(currentIndex + 1) * 100);
      } else {
        setCurrentIndex(0);
        setTranslateValue(0);
      }
      setKey((prevKey) => prevKey + 1); // Cambiar el key en cada cambio
    }, 10000);

    return () => {
      clearInterval(slider);
    };
  }, [currentIndex]);

  return (
    <div className="container-sliderMobile">
      <div
        className="slider_wrapper"
        style={{
          transform: `translateX(${translateValue}%)`,
          transition: "transform ease-out 0.1s",
        }}
      >
        {imagesSlider.map((itm, index) => (
          <SliderMobileCard
            key={`${itm.id}_${key}`} // Usar un key único
            image={itm.urlImg}
            title={itm.title}
            subTitle={itm.subTitle}
            content={itm.content}
          />
        ))}
      </div>

      <div className={`dots-wrapper ${hideItems ? "hideItems" : '' }`}>
        {imagesSlider.map((itm, index) => {
          return (
            <span
              key={itm.id}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => {
                handleDotClick(index);
              }}
            >
              &#8226;
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default SliderMobile;
