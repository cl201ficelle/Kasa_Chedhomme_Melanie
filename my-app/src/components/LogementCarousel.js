import React, { useState } from "react";
import "../styles/components/LogementCarousel.scss";

const Carousel = (props) => {
  const pictures = props.pictures;
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === pictures.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  if (!pictures) {
    return <p>Pas encore de photo disponible</p>;
  } else
    return (
      <div className="logement_carousel_container">
        {pictures.length !== 1 && (
          <div onClick={goToPrevious}>
            <i className="fa-solid fa-chevron-left"></i>
          </div>
        )}
        {pictures.length !== 1 && (
          <div onClick={goToNext}>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        )}
        {pictures.map((picture, index) => (
          <div
            key={index}
            className={`logement_carousel_imgs ${
              index === currentIndex ? "active" : "hidden"
            }`}
          >
            <img
              src={picture}
              alt={`photo logement ${index}`}
              className="logement_img_carousel"
            />
          </div>
        ))}
        {pictures.length !== 1 && (
          <div className="carousel_counter">
            {currentIndex + 1}/{pictures.length}
          </div>
        )}
      </div>
    );
};

export default Carousel;