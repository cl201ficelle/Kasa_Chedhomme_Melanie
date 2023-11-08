import React, { useEffect, useState } from "react"
import "../styles/page/Logement.css"
import { useParams } from "react-router-dom";
import Error from "./Error";
import Collapsible from "../components/Collapse";
import Tags from "../components/Tags";
import Host from "../components/Host";
import Carousel from "../components/Carousel";
import TitleLogement from "../components/TitleLogement";
import Rate from "../components/Rate";



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
  } else {

  return (
   
      
          <main>        
            <div className="logement">
                
                        <Carousel/> 
                        <div className="title_and_host">
                        <TitleLogement/>
                        <Host />
                        </div>
                        <div className="tags_and_rate">
                        <Tags />
                        <Rate/>
                        </div>
                        <div>
              <div className="collapse_logement">
              <div className="description">< Collapsible label="Description" description={logement.description}/></div>
              <div className="equipements"><Collapsible
          label="Équipements"
          description={logement.equipments.map((e, index) => (
            <span key={index}>{e}<br/></span>
          ))}
          /></div>
              </div>
            </div>
                        
            </div>

                </main>
          
       
         
  );
};}

export default Location;