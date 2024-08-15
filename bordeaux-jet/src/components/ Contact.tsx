import React from 'react';
import { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import '../styles/Contact.scss';
import Header from './Header';
import NavigationMenu from './NavigationMenu';
import Modals from './Modals';
import Footer from './Footer';

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
    <><Box className="contact">
      <Header onLoginClick={handleOpenLogin} onRegisterClick={handleOpenRegister} onSearch={function (query: string): void {
        throw new Error('Function not implemented.');
      } } />
      <Modals
        openLogin={openLogin}
        openRegister={openRegister}
        handleCloseLogin={handleCloseLogin}
        handleCloseRegister={handleCloseRegister} />
      <NavigationMenu />
      <Typography variant="h4" className="contact-title">Contactez-nous</Typography>
      <Box className="contacts">
      <Typography variant="body1">
        Vous avez des questions ou vous souhaitez réserver une activité ? N'hésitez pas à nous contacter :
      </Typography>
      <Typography variant="body1">
        <strong>Adresse :</strong> Quai Richelieu, 33000 Bordeaux, France
      </Typography>
      <Typography variant="body1">
        <strong>Téléphone :</strong> +33 5 56 00 00 00
      </Typography>
      <Typography variant="body1">
        <strong>Email :</strong> contact@bordeauxjet.com
      </Typography>
      {/* Ajouter une carte interactive ici */}
      {/* Ajouter un formulaire de contact */}
    </Box>
      <form className="contact-form">
      <TextField label="Prénom" variant="outlined" fullWidth margin="normal" />
        <TextField label="Nom" variant="outlined" fullWidth margin="normal" />
        <TextField label="Email" variant="outlined" fullWidth margin="normal" />
        <TextField label="Message" variant="outlined" fullWidth margin="normal" multiline rows={4} />
        <Button variant="contained" color="primary" type="submit">Envoyer</Button>
      </form>
    </Box><Footer /></>
  );
};

export default Contact;
