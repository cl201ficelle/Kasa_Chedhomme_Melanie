import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Error from "../pages/Error";
import "../styles/components/Tags.css"




const Tags = () => {
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
    return null
  } else
  return (
    <div className="logement_list_tags">
    {logement.tags.map((tag, index) => (
      <div key={index} className="logement_tagss">
        <h2 className="logement_tags">{tag}</h2>
      </div>
    ))}
  </div>
  );
};

export default Tags;

