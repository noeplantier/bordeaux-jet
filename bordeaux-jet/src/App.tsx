import React from 'react';
import Header from './components/Header';
import NavigationMenu from './components/NavigationMenu';
import Home from './components/Home';
import Formules from './components/Formules';
import Access from './components/Access';
import Contact from './components/ Contact';
import Gallery from './components/ Gallery';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Modals from './components/Modals';
import './styles/App.scss';

function App() {

  return (
    <div>
      <Header />
      <NavigationMenu />
      <main>
        <Home />
        <Formules />
        <Access />
        <Contact />
        <Gallery />
        <FAQ />
      </main>
      <Footer />
      <Modals />
    </div>
  );
};

export default App;
