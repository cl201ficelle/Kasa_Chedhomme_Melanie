import "../styles/components/Banner.scss";

function Banner(props) {
  return (
    <div>
      <img src={props.imgSrc} alt="Photo paysage" />
    </div>
  );
}

export default Banner;