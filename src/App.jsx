import React, { useState } from 'react';
import './App.css'
import BarraDeVida from './components/BarraDeVida'
import StatsJugador from './components/StatsJugador'

function App() {
  const [jugadores, setJugadores] = useState([ 
    { name: 'Breit', vida: -150, dano: 70, evasion: 50, armor: 50, capvida: -200  },
    { name: 'Enma', vida: 200, dano: 80, evasion: 60, armor: 50, capvida: -200  }
  ]);
  return (
    <div className="container mx-auto p-4"> 
      <h1 className="text-2xl font-bold mb-4">Estadísticas del Juego</h1> 
      {jugadores.map((jugador, index) => (
        <div key={index} className="mb-4"> 
          <StatsJugador jugador={jugador} />
        </div> 
      ))} 
    </div>
  )
}

export default App
