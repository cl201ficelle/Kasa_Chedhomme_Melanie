import "../styles/components/Header.css"
import logoKasa from '../Images/logo.png'
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="logo_nav">
        <div className="logoKasa">
            <img src={logoKasa} alt="logo Kasa"/>
        </div>
    <nav>
      <ul>
      <NavLink
      style={({isActive})=>{
        return { textDecoration : isActive ? "underline" : "none"}
      }}
       to="/">
        <li>Accueil</li>
        </NavLink>
     <NavLink
     style={({isActive})=>{
      return { textDecoration : isActive ? "underline" : "none"}
    }}
      to="/About"> 
      <li>A Propos</li>
      </NavLink>
    </ul>
    </nav>
    </div>
    
    </header>
  )
}

export default Header