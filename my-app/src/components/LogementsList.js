import "../styles/components/LogementsList.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="logement_list">
      {props.logements.map((logement, index) => (
        <div key={index} className="logement_card">
          <Link to={`/Logements/${logement.id}`}>
            {" "}
            <div className="image_and_title_container">
              <div className="box_shadow"></div>
              <h2 className="logement_title">{logement.title}</h2>
              <img
                src={logement.cover}
                alt={logement.name}
                className="logement_img"
              />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Card;
