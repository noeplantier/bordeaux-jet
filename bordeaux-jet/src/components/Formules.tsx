import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import '../styles/Formules.scss';

function Formules() {

  return (
    <Box className="formules">
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
