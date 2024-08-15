import React from 'react';
import { useState } from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../styles/FAQ.scss';
import Header from './Header';
import NavigationMenu from './NavigationMenu';
import Modals from './Modals';
import Footer from './Footer';

function FAQ() {

    const [openLogin, setOpenLogin] = useState(false);
    const [openRegister, setOpenRegister] = useState(false);
    const [timeSlot, setTimeSlot] = useState('');
    const [priceRange, setPriceRange] = useState('');
    const [date, setDate] = useState('');
  
    const handleOpenLogin = () => setOpenLogin(true);
    const handleCloseLogin = () => setOpenLogin(false);
    const handleOpenRegister = () => setOpenRegister(true);
    const handleCloseRegister = () => setOpenRegister(false);
   
      
  
  const faqs = [
    { question: "Quelle est la durée de chaque session ?", answer: "Chaque session dure environ une heure." },
    { question: "Quels sont les tarifs ?", answer: "Les tarifs varient en fonction de la formule choisie. Veuillez consulter notre page Formules pour plus de détails." },
    { question: "Faut-il une expérience préalable ?", answer: "Non, nos sessions sont adaptées à tous les niveaux, y compris les débutants." },
    { question: "Quels équipements sont fournis ?", answer: "Nous fournissons les gilets de sauvetage et les combinaisons." },
  ];

  return (
    <><Box className="faq">

      <Header onLoginClick={handleOpenLogin} onRegisterClick={handleOpenRegister} onSearch={function (query: string): void {
        throw new Error('Function not implemented.');
      } } />
      <Modals
        openLogin={openLogin}
        openRegister={openRegister}
        handleCloseLogin={handleCloseLogin}
        handleCloseRegister={handleCloseRegister} />
      <NavigationMenu />
      <Typography variant="h4" className="faq-title">FAQ</Typography>
      {faqs.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box><Footer /></>
  );
};

export default FAQ;
