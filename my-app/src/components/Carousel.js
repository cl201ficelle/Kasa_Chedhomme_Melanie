import React, { useEffect, useState } from "react"
import "../styles/page/Logement.css"
import { useParams } from "react-router-dom";
import Error from "../pages/Error";
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
  if (!logement) {
    return console.log("Erreur")
  } else
  return (
    <div className="logement_carousel">
    {logement.pictures.map((pictures, index) => (
      <div key={index} className="logement_imgs_carousel">
        <img src={pictures} alt="photo logement" className="logement_img_carousel"/>
      </div>
    ))}
  </div>
  );
};

export default Carousel;

