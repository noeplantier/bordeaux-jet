import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import '../styles/Home.scss';
import '../assets/background.jpg';

function Home() {

  return (
    <Box className="home">
      <Typography variant="h2" className="home-title">Bienvenue chez Bordeaux Jet</Typography>
      <Typography variant="h5" className="home-subtitle">Vivez des expériences inoubliables en jet ski sur la Garonne</Typography>
      <Button variant="contained" color="primary" className="home-button">Réservez maintenant</Button>
    </Box>
  );
};

export default Home;
