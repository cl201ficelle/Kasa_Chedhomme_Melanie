import "../styles/components/Title.css";

const TitleLogement = (props) => {
  const title = props.title;
  if (!title) {
    return null;
  } else
    return (
      <div className="titles">
        <h2 className="title">{props.title}</h2>
      </div>
    );
};

export default TitleLogement;
