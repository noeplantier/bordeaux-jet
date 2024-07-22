import React from 'react';
import { Menu, MenuItem, Button, ListItemText } from '@mui/material';
import './navigation.scss';

function NavigationMenu() {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="navigation-menu">
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <ListItemText primary="Accueil" />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemText primary="Formules" />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemText primary="Accès" />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemText primary="Contact" />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemText primary="Galerie" />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemText primary="FAQ" />
        </MenuItem>
      </Menu>
    </nav>
  );
};

export default NavigationMenu;
