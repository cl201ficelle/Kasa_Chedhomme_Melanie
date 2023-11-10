import React, {useState } from "react"
import "../styles/page/Logement.css"
import "../styles/components/Carousel.css"




const Carousel = (props) => {
  const pictures = props.pictures
  const [currentIndex, setCurrentIndex] = useState(0)
  
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
    return null
  } else
  return (
    <div className="logement_carousel">
      <div onClick={goToPrevious}><i className="fa-solid fa-chevron-left"></i></div>
      <div onClick={goToNext}><i className="fa-solid fa-chevron-right"></i></div>
      <div className="counter">1/1</div>
      {pictures.map((picture, index) => (
        <div key={index} className={`logement_imgs_carousel ${index === currentIndex ? 'active' : 'hidden'}`}>
          <img src={picture} alt={`photo logement ${index}`} className="logement_img_carousel"/>
        </div>
      ))}
  </div>
  );
};

export default Carousel;

