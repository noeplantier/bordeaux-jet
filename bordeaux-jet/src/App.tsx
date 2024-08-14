import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Formules from './components/Formules';
import Contact from './components/ Contact';
import Galerie from './components/ Gallery';
import FAQ from './components/FAQ';
import Reservation from './components/Reservation';
import NavigationMenu from './components/NavigationMenu';

function App() {
  return (
    <Router>
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formules" element={<Formules />} />
   
        <Route path="/contact" element={<Contact />} />
        <Route path="/galerie" element={<Galerie />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
    </Router>
  );
}

export default App;
