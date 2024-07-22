import React from 'react';
import { Box, Typography } from '@mui/material';
import '../styles/Gallery.scss';

const Gallery: React.FC = () => {
  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg'
  ];

  return (
    <Box className="gallery">
      <Typography variant="h4" className="gallery-title">Galerie</Typography>
      <Box className="gallery-carousel">
       
      </Box>
    </Box>
  );
};

export default Gallery;
