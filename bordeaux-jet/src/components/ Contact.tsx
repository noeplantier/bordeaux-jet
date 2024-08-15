import React from 'react';
import { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import '../styles/Contact.scss';
import Header from './Header';
import NavigationMenu from './NavigationMenu';
import Modals from './Modals';

function Contact() {

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
    <Box className="contact">
         <Header onLoginClick={handleOpenLogin} onRegisterClick={handleOpenRegister} />
      <Modals
        openLogin={openLogin}
        openRegister={openRegister}
        handleCloseLogin={handleCloseLogin}
        handleCloseRegister={handleCloseRegister}/>   
        <NavigationMenu/>
      <Typography variant="h4" className="contact-title">Contactez-nous</Typography>
      <form className="contact-form">
        <TextField label="Nom" variant="outlined" fullWidth margin="normal" />
        <TextField label="Email" variant="outlined" fullWidth margin="normal" />
        <TextField label="Message" variant="outlined" fullWidth margin="normal" multiline rows={4} />
        <Button variant="contained" color="primary" type="submit">Envoyer</Button>
      </form>
    </Box>
  );
};

export default Contact;
