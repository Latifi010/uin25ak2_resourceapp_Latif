import React from 'react';

const PageTitle = ({ title }) => { // Funksjonen PageTitle returnerer en h2-tag med tittelen som er sendt inn som prop
  return <h2>{title}</h2>; // Returnerer h2 taggen, som igjen viser verdien title. 
};

export default PageTitle;
