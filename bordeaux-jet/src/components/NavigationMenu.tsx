import React from 'react';
import { MenuItem, Button, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 
import '../styles/NavigationMenu.scss';

function NavigationMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (path: string) => {
    setAnchorEl(null);
    if (path) {
      navigate(path); 
    }
  };

  return (
    <nav className="navigation-menu">
   
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
      
    </nav>
  );
}

export default NavigationMenu;
