import banner_image_accueil from '../Images/banner_image_accueil.png'
import "../styles/page/Accueil.css"


function Accueil() {
  return (
    <main>
        <div className="banner_image_accueil">
            <img src={banner_image_accueil} alt="image voyage, Chez vous, partout et ailleurs"/>
        </div>
    </main>
  )
}

export default Accueil