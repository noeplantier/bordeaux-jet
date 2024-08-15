import React from 'react';
import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import '../styles/Access.scss';
import Header from './Header';
import NavigationMenu from './NavigationMenu';
import Modals from './Modals';
import Footer from './Footer';


function Acces() {

  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [timeSlot, setTimeSlot] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [date, setDate] = useState('');

  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);
  const handleOpenRegister = () => setOpenRegister(true);
  const handleCloseRegister = () => setOpenRegister(false);
    
  return (
    <><Box className="access">
      <Header onLoginClick={handleOpenLogin} onRegisterClick={handleOpenRegister} onSearch={function (query: string): void {
        throw new Error('Function not implemented.');
      } } />
      <Modals
        openLogin={openLogin}
        openRegister={openRegister}
        handleCloseLogin={handleCloseLogin}
        handleCloseRegister={handleCloseRegister} />
      <NavigationMenu />
      <Typography variant="h4" className="access-title">Nous Trouver</Typography>
      <Box className="acces">
      <Typography variant="h4">Comment nous rejoindre</Typography>
      <Typography variant="body1">
        Bordeaux Jet est facilement accessible en voiture, en transport en commun, ou même en vélo. Voici comment
        nous rejoindre :
      </Typography>
      <Typography variant="body1">
        <strong>En voiture :</strong> Prenez la sortie 21 sur la rocade, suivez les panneaux pour Quai Richelieu.
      </Typography>
      <Typography variant="body1">
        <strong>En transport en commun :</strong> Tram B, arrêt "Quinconces". Nous sommes à 10 minutes à pied.
      </Typography>
      {/* Ajouter une carte interactive ici */}
    </Box>
      <iframe
        className="access-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2893.3730800507!2d-0.57918!3d44.837789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDMxJzI2LjAiTiAwwrAzNCc0My4zIlc!5e0!3m2!1sen!2sfr!4v1539133908258"
        width="600"
        height="450"
        loading="lazy"
      ></iframe>
    </Box><Footer /></>
  );
};

export default Acces;
