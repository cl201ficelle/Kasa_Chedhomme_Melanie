import "../styles/page/Error.scss";
import { Link } from "react-router-dom";

function Error() {
  return (
    <main className="error">
      <div className="number">404</div>
      <div className="error_text">
        Oups! La page que vous demandez n'existe pas
      </div>
      <div className="retour">
        <Link to="/">Retourner sur la page d’accueil</Link>
      </div>
    </main>
  );
}

export default Error;
