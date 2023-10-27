import banner_image_about from '../Images/banner_image_about.png'
import "../styles/page/About.css"
import Banner from '../components/Banner.js'
import CollapseContentAbout from '../components/CollapseContentAbout'


function About() {
    return (
      <main>
        <Banner 
        imgSrc={banner_image_about}
        />
        <CollapseContentAbout />
      </main>
    )
  }
  
  export default About