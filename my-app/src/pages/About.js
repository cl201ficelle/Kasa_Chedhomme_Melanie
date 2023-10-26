import banner_image_about from '../Images/banner_image_about.png'
import "../styles/page/About.css"


function About() {
    return (
      <main>
        <div className="banner_image_about">
            <img src={banner_image_about} alt="image voyage"/>
        </div>
      </main>
    )
  }
  
  export default About