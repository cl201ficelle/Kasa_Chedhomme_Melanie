import React, { useEffect, useState } from "react";
import "../styles/components/LogementsList.css";

const Card = () => {
  const [logements, setLogements] = useState([]); // Utilisation de useState avec setLogements pour mettre à jour le tableau logements

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

  return (
    <div className="logement_list">
      
        {logements.map((logement, index) => (
          <div key={index} className="logement_card"><div className="image_title_container"><h2 className="logement_title">{logement.title}</h2><img src={logement.cover} alt={logement.name} className="logement_img"/> </div></div>
          
        ))}
      
    </div>
  );
};

export default Card;