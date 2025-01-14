// src/components/PlayerStats.js
import React from 'react';

const StatsJugador = ({ jugador }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-bold">{jugador.name}</h2>
      <p>Daño💥: {jugador.dano} // Evasion💨: {jugador.evasion} // Armor⛑: {jugador.armor}</p>
    </div>
  );
};

export default StatsJugador;
