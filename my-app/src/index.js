import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Accueil from './pages/Accueil'
import About from './pages/About'
import Logements from './pages/Logements'
import Header from './components/Header'
import Error from './pages/Error'
import Footer from './components/Footer.js'
import "../src/styles/page/index.css"
import LogementsList from './components/LogementsList'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/About" element={<About />} />
        <Route path="/Logements" element={<Logements />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)