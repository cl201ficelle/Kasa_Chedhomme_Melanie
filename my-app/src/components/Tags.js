import "../styles/components/Tags.css"

const Tags = (props) => {
  const tags = props.tags
  if (!tags) {
    return null
  } else
  return (
    <div className="logement_list_tags">
    {tags.map((tag, index) => (
      <div key={index} className="logement_tagss">
        <h2 className="logement_tags">{tag}</h2>
      </div>
    ))}
  </div>
  );
};

export default Tags;

