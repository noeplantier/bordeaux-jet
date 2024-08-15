import React, { useState } from 'react';
import { Modal, Box, TextField, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'; // Importation de l'icône pour la fermeture
import '../styles/Modals.scss';

interface ModalsProps {
  openLogin: boolean;
  openRegister: boolean;
  handleCloseLogin: () => void;
  handleCloseRegister: () => void;
}

const Modals: React.FC<ModalsProps> = ({ openLogin, openRegister, handleCloseLogin, handleCloseRegister }) => {
  return (
    <div>
      <Modal open={openLogin} onClose={handleCloseLogin}>
        <Box className="modal-box">
          <IconButton className="close-button" onClick={handleCloseLogin}>
            <CloseIcon />
          </IconButton>
          <h2>Connexion</h2>
          <TextField label="Email" variant="outlined" fullWidth margin="normal" />
          <TextField label="Mot de passe" type="password" variant="outlined" fullWidth margin="normal" />
          <Button variant="contained" color="primary">Se connecter</Button>
        </Box>
      </Modal>
      
      <Modal open={openRegister} onClose={handleCloseRegister}>
        <Box className="modal-box">
          <IconButton className="close-button" onClick={handleCloseRegister}>
            <CloseIcon />
          </IconButton>
          <h2>Inscription</h2>
          <TextField label="Prénom" variant="outlined" fullWidth margin="normal" />
          <TextField label="Nom" variant="outlined" fullWidth margin="normal" />
          <TextField label="Date de naissance" variant="outlined" fullWidth margin="normal" />
          <TextField label="Adresse" variant="outlined" fullWidth margin="normal" />
          <TextField label="Email" variant="outlined" fullWidth margin="normal" />
          <TextField label="Mot de passe" type="password" variant="outlined" fullWidth margin="normal" />
          <TextField label="Confirmation du mot de passe" type="password" variant="outlined" fullWidth margin="normal" />
          <Button variant="contained" color="primary">S'inscrire</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Modals;
