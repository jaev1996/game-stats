import React from 'react';
import './App.css';
// ...eliminados los imports de gifs...
import GameSetup from './components/GameSetup';
import { PlayersProvider } from './components/PlayersContext';


function App() {
  return (
    <div className="relative container mx-auto p-4 min-h-screen">
      {/* Fondo negro o gradiente animado */}
      <div className="relative z-10">
        <PlayersProvider>
          <GameSetup />
        </PlayersProvider>
      </div>
      {/* Si quieres un efecto visual sin imágenes, puedes usar un gradiente animado en CSS. Ejemplo sugerido abajo. */}
    </div>
  );
}

export default App;