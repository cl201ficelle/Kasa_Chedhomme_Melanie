import "../styles/components/Tags.css";

const Tags = (props) => {
  const tags = props.tags;
  if (!tags) {
    return null;
  } else
    return (
      <div className="logement_tags_container">
        {tags.map((tag, index) => (
          <ul key={index} className="logement_tag">{tag}</ul>
        ))}
      </div>
    );
};

export default Tags;
