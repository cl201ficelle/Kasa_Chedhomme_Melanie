import banner_image_about from '../Images/banner_image_about.png'
import "../styles/page/About.css"
import Banner from '../components/Banner.js'
import Collapsible from '../components/Collapse'


function About() {
    return (
      <main>
        <Banner 
        imgSrc={banner_image_about}
        />
        <Collapsible />
      </main>
    )
  }
  
  export default About