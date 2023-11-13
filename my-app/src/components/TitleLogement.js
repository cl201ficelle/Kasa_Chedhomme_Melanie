import "../styles/components/TitleLogement.css";

const TitleLogement = (props) => {
  const title = props.title;
  if (!title) {
    return null;
  } else
    return (
      <h2 className="logement_title_page">{props.title}</h2>
    );
};

export default TitleLogement;
