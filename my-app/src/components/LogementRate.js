import "../styles/components/LogementRate.scss";

const Rate = (props) => {
  const rating = props.rating;
  if (!rating) {
    return null;
  } else {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starClass =
        i <= props.rating
          ? "fa-solid fa-star active"
          : "fa-solid fa-star inactive";
      stars.push(<li key={i} className={starClass}></li>);
    }
    return (
      <div className="logement_rate">
        <ul>{stars}</ul>
      </div>
    );
  }
};

export default Rate;
