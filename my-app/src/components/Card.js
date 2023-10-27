import React, { useEffect, useState } from "react";

const Card = () => {
  const [logements, setLogements] = useState([]); // Utilisation de useState avec setLogements pour mettre à jour le tableau logements

  useEffect(() => {
    const fetchLogements = async () => {
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

    fetchLogements();
  }, []);

  return (
    <div>
      <ul>
        {logements.map((logement, index) => (
          <li key={index}>{logement.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Card;