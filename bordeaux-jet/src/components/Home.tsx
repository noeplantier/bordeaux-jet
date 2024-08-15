import React, { useState, useRef} from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from './Footer';
import Modals from '../components/Modals';
import '../styles/Home.scss';
import NavigationMenu from './NavigationMenu';

function Home() {
  const navigate = useNavigate();
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);
  const handleOpenRegister = () => setOpenRegister(true);
  const handleCloseRegister = () => setOpenRegister(false);

  const handleReservationClick = () => {
    navigate('/reservation'); 
  };

  return (
    <div>
      <Header onLoginClick={handleOpenLogin} onRegisterClick={handleOpenRegister} onSearch={function (query: string): void {
        throw new Error('Function not implemented.');
      } } />
      
      <Modals 
        openLogin={openLogin} 
        openRegister={openRegister} 
        handleCloseLogin={handleCloseLogin} 
        handleCloseRegister={handleCloseRegister} 
      />
      <NavigationMenu/>
      <Box className="home">
        <Typography variant="h2" className="home-title">Bienvenue chez Bordeaux Jet</Typography>
        <Typography variant="h5" className="home-subtitle">Vivez des expériences inoubliables en jet ski sur la Garonne</Typography>
        <Button 
          variant="contained" 
          color="primary" 
          className="home-button"
          onClick={handleReservationClick} 
        >
          Réservez maintenant
        </Button>
      </Box><Footer/>
    </div>
    
  );
};

export default Home;
