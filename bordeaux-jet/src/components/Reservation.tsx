import React, { useState } from 'react';
import { Box, Typography, Button, FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material';
import Header from '../components/Header'; 
import Modals from '../components/Modals';
import '../styles/Reservation.scss'; 

const Reservation: React.FC = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [timeSlot, setTimeSlot] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [date, setDate] = useState('');

  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);
  const handleOpenRegister = () => setOpenRegister(true);
  const handleCloseRegister = () => setOpenRegister(false);

  const handleReservation = () => {
    console.log(`Reservation: ${date}, ${timeSlot}, ${priceRange}`);
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
      <Box className="reservation">
        <Typography variant="h4" className="reservation-title">Réservez votre séance de JetSki</Typography>
        <FormControl fullWidth margin="normal">
          <TextField
            label="Date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel>Tranche Horaire</InputLabel>
          <Select
            value={timeSlot}
            onChange={(e) => setTimeSlot(e.target.value as string)}
          >
            <MenuItem value={"8h - 10h"}>8h - 10h</MenuItem>
            <MenuItem value={"10h - 12h"}>10h - 12h</MenuItem>
            <MenuItem value={"14h - 16h"}>14h - 16h</MenuItem>
            <MenuItem value={"16h - 18h"}>16h - 18h</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel>Fourchette de Prix</InputLabel>
          <Select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value as string)}
          >
            <MenuItem value={"50€ - 70€"}>50€ - 70€</MenuItem>
            <MenuItem value={"70€ - 90€"}>70€ - 90€</MenuItem>
            <MenuItem value={"90€ - 110€"}>90€ - 110€</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          className="reservation-button"
          onClick={handleReservation}
          disabled={!date || !timeSlot || !priceRange}
        >
          Confirmer la Réservation
        </Button>
      </Box>
    </div>
  );
};

export default Reservation;
