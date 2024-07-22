import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import '../styles/Header.scss';

function Header() {

  return (
    <AppBar position="static">
      <Toolbar className="header-toolbar">
        <h1 className="header-title">Bordeaux Jet</h1>
        <div className="header-buttons">
          <Button color="inherit" onClick={() => console.log('Login modal')}>Connexion</Button>
          <Button color="inherit" onClick={() => console.log('Register modal')}>Inscription</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
