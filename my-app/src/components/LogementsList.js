import "../styles/components/LogementsList.css"
import logementsList from "../assets/logements.json"

function LogementsList() {
    return (
      <div className="logements_list">
        
            {logementsList.map((logement) => (
                <li key={logement.id} id={logement.id} title={logement.title} cover={logement.cover}></li>
            ))}
        
      </div>
    )
  }
  
  export default LogementsList