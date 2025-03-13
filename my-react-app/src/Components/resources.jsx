import React from 'react';
import { resources } from '../assets/ressurser';

const Resources = ({ category }) => { // Funksjonen Resources returnerer en liste med ressurser basert på kategorien som er sendt inn som prop
  const filteredResources = resources.filter(resource => resource.category === category);

  return (
    <ul className="ressurser-list">
      {filteredResources.map((resource, index) => (
        <li key={index}>
          <a href={resource.url} target="_blank" rel="noopener noreferrer">
            {resource.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Resources;
