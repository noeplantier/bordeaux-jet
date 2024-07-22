import React from 'react';
import { Box, Typography } from '@mui/material';
import './gallery.scss';

function Gallery() {
 
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
        {images.map((image, index) => (
          <img src={require(`../assets/images/${image}`).default} alt={`Gallery ${index + 1}`} key={index} className="gallery-image" />
        ))}
      </Box>
    </Box>
  );
};

export default Gallery;
