import React, { useEffect, useState } from "react"
import "../styles/page/Logement.css"
import { useParams } from "react-router-dom";
import Error from "./Error";
import Collapsible from "../components/Collapse";



const Location = () => {
  const [logements, getLogements] = useState([]) // utilisation de useState avec setLogements pour mettre à jour le tableau logements
  
  useEffect(() => {
    const GetLogementsList = async () => {
      try {
        const reponse = await fetch("/logements.json");
        if (reponse.ok) {
          const data = await reponse.json();
          getLogements(data); // Mettre à jour le tableau logements avec les données récupérées
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
  } else

  return (
   
      
          <main>        
          <div className="logement">
                
                        <img src={logement.cover} alt={logement.name} className="logements_img"/> 
                        <div className="title_and_host">
                        <div className="titles">
                          <h2 className="title">{logement.title}</h2>
                          <h3 className="location">{logement.location}</h3>
                        </div>
                        
                        <div className="host">
                          <div className="host_name">{logement.host.name}</div>
                          <div className="host_picture"><img src={logement.host.picture}/></div>
                        </div>
                        </div>
                        <div className="tag"></div>
                        <div>
            <div className="collapse_logement">
            <div className="description">< Collapsible label="Description" description={logement.description}/></div>
            <div className="equipement">< Collapsible label="Équipements" description={logement.equipments}/></div>
            </div>
        </div>
                        
                        </div>

                </main>
          
       
         
  );
};

export default Location;