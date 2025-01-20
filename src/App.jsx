import React, { useState } from 'react';
import './App.css'
import StatsJugador from './components/StatsJugador'
import ContadorPasos from './components/ContadorPasos';
import ModalMisiones from './components/ModalMisiones';
import GameSetup from './components/GameSetup';

function App() {
  return (
    <div className="container mx-auto p-4"> 
      
      <div>
        <GameSetup />
      </div>
    </div>
  )
}

export default App
