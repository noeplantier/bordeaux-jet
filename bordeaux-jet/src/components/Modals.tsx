import React, { useState } from 'react';
import { Modal, Box, TextField, Button } from '@mui/material';
import './modals.scss';

function Modals() {
  
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);
  const handleOpenRegister = () => setOpenRegister(true);
  const handleCloseRegister = () => setOpenRegister(false);

  return (
    <div>
      <Button onClick={handleOpenLogin}>Connexion</Button>
      <Modal open={openLogin} onClose={handleCloseLogin}>
        <Box className="modal-box">
          <h2>Connexion</h2>
          <TextField label="Email" variant="outlined" fullWidth margin="normal" />
          <TextField label="Mot de passe" type="password" variant="outlined" fullWidth margin="normal" />
          <Button variant="contained" color="primary">Se connecter</Button>
        </Box>
      </Modal>
      
      <Button onClick={handleOpenRegister}>Inscription</Button>
      <Modal open={openRegister} onClose={handleCloseRegister}>
        <Box className="modal-box">
          <h2>Inscription</h2>
          <TextField label="Nom" variant="outlined" fullWidth margin="normal" />
          <TextField label="Email" variant="outlined" fullWidth margin="normal" />
          <TextField label="Mot de passe" type="password" variant="outlined" fullWidth margin="normal" />
          <Button variant="contained" color="primary">S'inscrire</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Modals;
