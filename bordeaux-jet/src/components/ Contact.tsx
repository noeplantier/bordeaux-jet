import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import '../styles/Contact.scss';

function Contact() {

  return (
    <Box className="contact">
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
