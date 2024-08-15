import React from 'react';
import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import '../styles/Gallery.scss';
import Header from './Header';
import NavigationMenu from './NavigationMenu';
import Modals from './Modals';
import Footer from './Footer';

function Gallery () {
  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg'
  ];
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
    <><Box className="gallery">
      <Header onLoginClick={handleOpenLogin} onRegisterClick={handleOpenRegister} onSearch={function (query: string): void {
        throw new Error('Function not implemented.');
      } } />
      <Modals
        openLogin={openLogin}
        openRegister={openRegister}
        handleCloseLogin={handleCloseLogin}
        handleCloseRegister={handleCloseRegister} />
      <NavigationMenu />
      <Typography variant="h4" className="gallery-title">Galerie</Typography>
      <Box className="gallery-carousel">

      </Box>
    </Box><Footer /></>
  );
};

export default Gallery;
