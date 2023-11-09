import React, { useEffect, useState } from "react"
import "../styles/page/Logement.css"
import { useParams } from "react-router-dom";
import "../styles/components/Carousel.css"



const Carousel = () => {
  const [logements, setLogements] = useState([]) // utilisation de useState avec setLogements pour mettre à jour le tableau logements
  
  useEffect(() => {
    const GetLogementsList = async () => {
      try {
        const reponse = await fetch("/logements.json");
        if (reponse.ok) {
          const data = await reponse.json();
          setLogements(data); // Mettre à jour le tableau logements avec les données récupérées
        } else {
          console.error('Erreur : ', reponse.status);
        }
      } catch (error) {
        console.log("Erreur : ", error);
      }
    };

    GetLogementsList();
  }, []);
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id)
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? logement.pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  
  const goToNext = () => {
    const isLastSlide = currentIndex === logement.pictures.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  if (!logement) {
    return null
  } else
  return (
    <div className="logement_carousel">
      <div onClick={goToPrevious}><i className="fa-solid fa-chevron-left"></i></div>
      <div onClick={goToNext}><i className="fa-solid fa-chevron-right"></i></div>
      {logement.pictures.map((picture, index) => (
        <div key={index} className={`logement_imgs_carousel ${index === currentIndex ? 'active' : 'hidden'}`}>
          <img src={picture} alt={`photo logement ${index}`} className="logement_img_carousel"/>
        </div>
      ))}
  </div>
  );
};

export default Carousel;

