import "../styles/components/LogementTags.scss";

const Tags = (props) => {
  const tags = props.tags;
    return (
      <div className="logement_tags_container">
        {tags.map((tag, index) => (
          <ul key={index} className="logement_tag">{tag}</ul>
        ))}
      </div>
    );
};

export default Tags;
