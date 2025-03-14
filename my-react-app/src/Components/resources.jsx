import React from 'react';
import { resources } from '../assets/ressurser';

const Resources = ({ category }) => { // Funksjonen Resources returnerer en liste med ressurser basert på kategorien som er sendt inn som prop
  const filteredResources = resources.filter(resource => resource.category === category);

  return (
    <ul className="ressurser-list">
      {filteredResources.map((resource, index) => ( 
      //Bruker map på link linje som tidligere, for å loope igjennom listen. 
      //Bruker index som key, ettersom det i dette tilfellet er en stastisk liste, 
      //a - Lager hyperlink - Linken peker til resource.url - 
      //Blank - Sørger for at linken åpner i egen fane. 

        <li key={index}> 
          <a href={resource.url} target="_blank" rel="buhu">
            {resource.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Resources;
