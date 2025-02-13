import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import './App.css'
import LandingPage from './components/LandingPage/LandingPage.jsx';
import CardPage from './components/CardPage/ClosedCard.jsx';
import OpenPage from './components/OpenPage/OpenCard.jsx';

function App(){
    return(

      <Router>
        <Routes>
          {/* Main Routes for different screens */}
          <Route path="/" element={<LandingPage />} /> 
          <Route path="/closed-card" element={<CardPage />} /> 
          <Route path="/open-card" element={<OpenPage />} /> 
          </Routes>
        </Router>
    )

}

export default App
