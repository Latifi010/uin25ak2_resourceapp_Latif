import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import Nav from './components/nav';
import PageTitle from './components/pagetitle';
import Resources from './components/resources';

import './styles/styles.scss';

function App() {
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

export default App
