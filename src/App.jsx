import React, { useState } from 'react';
import './App.css'
import StatsJugador from './components/StatsJugador'
import ContadorPasos from './components/ContadorPasos';
import ModalMisiones from './components/ModalMisiones';

function App() {
  const [jugadores, setJugadores] = useState([ 
    { name: 'Breit', vida: -100, dano: 0, evasion: 0, armor: 0, capvida: -200  },
    { name: 'Enma', vida: 100, dano: 0, evasion: 0, armor: 0, capvida: -200  },
    { name: 'JoseD', vida: 150, dano: 0, evasion: 0, armor: 0, capvida: -200  },
    { name: 'Jaev', vida: 125, dano: 0, evasion: 0, armor: 0, capvida: -200  }
  ]);
  return (
    <div className="container mx-auto p-4"> 
      
      <h1 className="text-2xl font-bold mb-4">Estadísticas del Juego</h1> 
      <ContadorPasos />
      <div className='flex flex-row justify-center'>
        <ModalMisiones name="Cazar Bestias" />
        <ModalMisiones name="Ejecucion Ninjas" />
        <ModalMisiones name="Pasos en Conjunto" />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4">
        {jugadores.map((jugador, index) => (
          <div key={index} className="mb-4">
            <StatsJugador jugador={jugador} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
