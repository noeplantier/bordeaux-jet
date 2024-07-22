import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './faq.scss';

function FAQ() {

  const faqs = [
    { question: "Quelle est la durée de chaque session ?", answer: "Chaque session dure environ une heure." },
    { question: "Quels sont les tarifs ?", answer: "Les tarifs varient en fonction de la formule choisie. Veuillez consulter notre page Formules pour plus de détails." },
    { question: "Faut-il une expérience préalable ?", answer: "Non, nos sessions sont adaptées à tous les niveaux, y compris les débutants." },
    { question: "Quels équipements sont fournis ?", answer: "Nous fournissons les gilets de sauvetage et les combinaisons." },
  ];

  return (
    <Box className="faq">
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
    </Box>
  );
};

export default FAQ;
