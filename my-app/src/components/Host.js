import React, { useEffect, useState } from "react"
import "../styles/components/Host.css"
import { useParams } from "react-router-dom";
import Error from "../pages/Error";




const Host = () => {
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
    <div className="logement_host"> 
        <h2 className="host_name">{logement.host.name}</h2>
        <div className="host_picture"><img src={logement.host.picture}/></div>
  </div>
  );
};

export default Host;

