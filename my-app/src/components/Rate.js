import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Error from "../pages/Error";
import "../styles/components/Rate.css"





const Rate = () => {
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
    return <Error />
  } else {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      const starClass = i <= logement.rating ? "fa-solid fa-star active" : "fa-solid fa-star inactive";
      stars.push(<li key={i} className={starClass}></li>);
    }
  return (
    
   <div className="rate">
        <ul>{stars}</ul>
      </div>

        
       
      
    
 
  )};
};

export default Rate;

