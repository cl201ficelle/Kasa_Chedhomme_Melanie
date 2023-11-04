import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Accueil from './pages/Accueil'
import About from './pages/About'

import Header from './components/Header'
import Error from './pages/Error'
import Footer from './components/Footer.js'
import "../src/styles/page/index.css"
import LogementsList from './components/LogementsList'
import { createRoot } from 'react-dom/client';
import Location from './pages/Logements'

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript


root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/About" element={<About />} />
        <Route path="/Logements/:id" element={<Location />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  )