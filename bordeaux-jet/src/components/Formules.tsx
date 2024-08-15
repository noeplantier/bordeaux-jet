import React from 'react';
import { useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import '../styles/Formules.scss';
import Header from './Header';
import Modals from './Modals';
import NavigationMenu from './NavigationMenu';

function Formules() {
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
    
    <Box className="formules">
    <Header onLoginClick={handleOpenLogin} onRegisterClick={handleOpenRegister} />
      <Modals
        openLogin={openLogin}
        openRegister={openRegister}
        handleCloseLogin={handleCloseLogin}
        handleCloseRegister={handleCloseRegister}/>   
        <NavigationMenu/>
           <Typography variant="h4" className="formules-title">Nos Formules</Typography>
      <List>
        {['Initiation', 'Découverte', 'Sensation', 'Evasion', 'Enterrement de vie de célibataire'].map((formula, index) => (
          <ListItem key={index}>
            <ListItemText primary={formula} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Formules;
