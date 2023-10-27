import "../styles/components/LogementsList.css"


// const reponse = await fetch("../assets/logements.json")
// const logementList = await reponse.json()
const logementList = [
    'monstera',
    'ficus lyrata',
    'pothos argenté',
    'yucca',
    'palmier'
]





function LogementsList() {
    return (
        <ul>
            {logementList.map((logement) => (
                <li>{logement}</li>
            ))}
        </ul>
    //   <div className="logements_list">
        
    //         {logementList.map((logement) => (
    //             <li key={logement.id} id={logement.id} title={logement.title} cover={logement.cover}></li>
    //         ))}
        
    //   </div>
    )
  }
  
  export default LogementsList