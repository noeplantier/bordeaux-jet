import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import '../styles/Header.scss';

// Import des props nécessaires pour la gestion des modales
interface HeaderProps {
  onLoginClick: () => void;
  onRegisterClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLoginClick, onRegisterClick }) => {
  return (
    <AppBar position="static">
      <Toolbar className="header-toolbar">
        <h1 className="header-title">Bordeaux Jet</h1>
        <div className="header-buttons">
          <Button color="inherit" onClick={onLoginClick}>Connexion</Button>
          <Button color="inherit" onClick={onRegisterClick}>Inscription</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
