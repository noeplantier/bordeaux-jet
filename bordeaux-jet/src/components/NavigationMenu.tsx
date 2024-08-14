import React from 'react';
import { Menu, MenuItem, Button, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Importation du hook pour la navigation
import '../styles/NavigationMenu.scss';

function NavigationMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate(); // Utilisation du hook useNavigate pour la navigation

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (path: string) => {
    setAnchorEl(null);
    if (path) {
      navigate(path); // Navigation vers la page correspondante
    }
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
        onClose={() => handleClose('')}
        className="menu-horizontal" // Ajout d'une classe CSS pour le style horizontal
      >
        <MenuItem onClick={() => handleClose('/')}>
          <ListItemText primary="Accueil" />
        </MenuItem>
        <MenuItem onClick={() => handleClose('/formules')}>
          <ListItemText primary="Formules" />
        </MenuItem>
        <MenuItem onClick={() => handleClose('/acces')}>
          <ListItemText primary="Accès" />
        </MenuItem>
        <MenuItem onClick={() => handleClose('/contact')}>
          <ListItemText primary="Contact" />
        </MenuItem>
        <MenuItem onClick={() => handleClose('/galerie')}>
          <ListItemText primary="Galerie" />
        </MenuItem>
        <MenuItem onClick={() => handleClose('/faq')}>
          <ListItemText primary="FAQ" />
        </MenuItem>
      </Menu>
    </nav>
  );
}

export default NavigationMenu;
