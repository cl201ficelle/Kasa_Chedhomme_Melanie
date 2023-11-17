import "../styles/components/LogementTitle.scss";

const TitleLogement = (props) => {
  const title = props.title;
    return (
      <h2 className="logement_title_page">{title}</h2>
    );
};

export default TitleLogement;
