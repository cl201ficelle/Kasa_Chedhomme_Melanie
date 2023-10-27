import banner_image_accueil from '../Images/banner_image_accueil.png'
import "../styles/page/Accueil.css"
import Banner from '../components/Banner.js'
import Card from '../components/Card'


function Accueil() {
  return (
    <main>
        <Banner 
        imgSrc={banner_image_accueil}
        />
        <Card />
        
    </main>
    
  )
}

export default Accueil