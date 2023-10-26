import banner_image_accueil from '../Images/banner_image_accueil.png'




function Banner(props) {
  return (
            <div className="banner_image_accueil">
            <img src={props.imgSrc} alt="Photo paysage"/>
            </div>
          )
}

export default Banner