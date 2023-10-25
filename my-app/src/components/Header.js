import "../styles/components/Header.css"
import logoKasa from '../Images/logo.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
        <div className="logoKasa">
            <img src={logoKasa} alt="logo Kasa"/>
        </div>
    <nav>
      <ul>
      <li><Link to="/">Accueil</Link></li>
      <li><Link to="/About">A Propos</Link></li>
    </ul>
    </nav>
    </header>
  )
}

export default Header