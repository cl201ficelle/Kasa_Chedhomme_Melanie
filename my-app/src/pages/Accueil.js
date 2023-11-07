import banner_image_accueil from '../Images/banner_image_accueil.png'
import "../styles/page/Accueil.css"
import Banner from '../components/Banner.js'
import LogementsList from '../components/LogementsList'
import banner_image_accueil_mobile from '../Images/banner_image_accueil_mobile.png'

function Accueil() {
  return (
    <main>
      <div className="banner_image_accueil">
        <Banner imgSrc={banner_image_accueil}
        /></div>
        <div className="banner_image_accueil_mobile">
        <Banner  imgSrc={banner_image_accueil_mobile} /></div>
        <LogementsList />
        
    </main>
    
  )
}

export default Accueil