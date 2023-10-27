import banner_image_accueil from '../Images/banner_image_accueil.png'
import "../styles/page/Accueil.css"
import Banner from '../components/Banner.js'
import LogementsList   from '../components/LogementsList'


function Accueil() {
  return (
    <main>
        <Banner 
        imgSrc={banner_image_accueil}
        />
        <LogementsList />
        
    </main>
    
  )
}

export default Accueil