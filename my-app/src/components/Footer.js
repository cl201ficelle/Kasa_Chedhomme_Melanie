import "../styles/components/Footer.css"
import logo_footer from '../Images/logo_footer.png'


function Footer() {
    return (
      <footer>
        <div className="logo_footer">
        <img src={logo_footer} alt="logo Kasa"/>
        </div>
        <div className="text_footer">
        © 2020 Kasa. All rights reserved
        </div>
      </footer>
    )
  }
  
  export default Footer