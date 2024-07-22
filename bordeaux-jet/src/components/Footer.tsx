import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import './footer.scss';

function Footer() {

  return (
    <Box className="footer">
      <Typography variant="body1">
        Suivez-nous :
        <Link href="https://www.facebook.com" target="_blank" rel="noopener" className="footer-link">Facebook</Link>,
        <Link href="https://www.instagram.com" target="_blank" rel="noopener" className="footer-link">Instagram</Link>,
        <Link href="https://www.twitter.com" target="_blank" rel="noopener" className="footer-link">Twitter</Link>
      </Typography>
      <Typography variant="body2" className="footer-copy">
        Bordeaux Jet©
        Siret : 521 886 846 00026 - RCS : BORDEAUX - NAF : 9329Z
        TVA Intracommunautaire : FR 40 521 886 846
        Établissement déclaré à la DDCS - Agrément N° 05/2014 DDTM d'Arcachon
        SARL Bordeaux Jet au capital de 2000 €
        Assurance flotte et RC Pro - AXA Yachting Solution
      </Typography>
    </Box>
  );
};

export default Footer;
