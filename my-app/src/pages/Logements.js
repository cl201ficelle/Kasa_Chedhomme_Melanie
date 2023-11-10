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
import logements from "../assets/logements.json"
import LocationLogement from "../components/Location";



const Location = () => {
   const { id } = useParams();
  const logement = logements.find((item) => item.id === id)
  if (!logement) {
    return <Error />
  } else {

  return (
   
      
          <main>        
            <div className="logement">
                
                        <Carousel pictures={logement.pictures}/> 
                        <div className="titles_logement_host_rate">
                        <div className="titles_logement">
                        <TitleLogement title={logement.title}/>
                        <LocationLogement location={logement.location}/>
                        
                        </div>
                        <div className="host_and_rate">
                        
                        <Host host={logement.host}/>
                        <Rate rating={logement.rating}/>
                        </div></div>
                        <div className="tags">
                         <Tags tags={logement.tags}/> 
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