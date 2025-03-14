import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';
// Valgt å legge til en egen komponent for navigasjonen, for å blant annet gjøre det enklere å legge til flere sider senere.
// samt for å gjøre det enklere å endre på navigasjonen. 

import Nav from './components/nav';  // Importerer navigasjonskomponenten
import PageTitle from './components/pagetitle'; // Importerer komponenten for sidetittel
import Resources from './components/resources'; // Importerer komponenten for ressurser

import './styles/styles.scss'; // Importerer styles.scss

function App() { // Funksjonen som returnerer JSX

  //ingen grunn til å manuelt lukke Navigate, siden det er en enkel komponent som ikke har noen barn. 
  // 
  return (
    <>
       <Nav />
      <main> 

        <Routes> 
          <Route path="/" element={<Navigate to="/html" />} /> 
          <Route
            path="/html"
            element={
              <>
                <PageTitle title="HTML Resources" />
                <Resources category="html" />
              </>
            }
          />

          <Route
            path="/css"
            element={
              <>
                <PageTitle title="CSS Resources" />
                <Resources category="css" />
              </>
            }
          />

          <Route
            path="/javascript"
            element={
              <>
                <PageTitle title="JavaScript Resources" />
                <Resources category="javascript" />
              </>
            }
          />

          <Route
            path="/react"
            element={
              <>
                <PageTitle title="React Resources" />
                <Resources category="react" />
              </>
            }
          />

          <Route
            path="/sanity"
            element={
              <>
                <PageTitle title="Sanity and Headless CMS Resources" />
                <Resources category="headless-cms" />
              </>
            }
          />

        </Routes>
      </main>
    </>
  )
}

export default App // Eksporterer App-funksjonen
