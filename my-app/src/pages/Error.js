import "../styles/page/Error.css"
import { Link } from 'react-router-dom'

function Error() {
    return (
      <div className="error">
        <div className="number">
            404
        </div>
        <div className="error_text">
            Oups! La page que vous demandez n'existe pas
        </div>
        <Link to="/">Retourner sur la page d’accueil</Link>
      </div>
    )
  }
  
  export default Error