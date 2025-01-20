import React, { useState } from 'react';
import StatsJugador from './StatsJugador';
import { elementos } from '../data/elementos';

const GameSetup = () => {
  const [numPlayers, setNumPlayers] = useState(0);
  const [players, setPlayers] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);

  const handleNumPlayersChange = (e) => {
    const num = parseInt(e.target.value, 10);
    setNumPlayers(num);
    setPlayers(Array(num).fill().map(() => ({
      name: '',
      vida: 0,
      capvida: -200,
      dano: 0,
      evasion: 0,
      armadura: 0,
      ojos: 2,
      brazos: 2,
      elemento: [],
      clan: [],	
      sharinganLvl: 0
    })));
  };

  const handlePlayerChange = (index, field, value) => {
    const newPlayers = [...players];
    newPlayers[index][field] = value;
    setPlayers(newPlayers);
  };
  const startGame = () => {
    setGameStarted(true);
  };

  if (gameStarted) {
    return (
        <StatsJugador jugadores={players} />
    );
  }

  return (
    <div className="game-setup flex flex-col items-center">
      <h3 htmlFor="num-players" className='text-xl'>Indica el Numero de Jugadores</h3>
      <div>
        <input
          type="number"
          id="num-players"
          value={numPlayers}
          onChange={handleNumPlayersChange}
          min="2"
          className="w-20"
        />
      </div>
      {players.map((player, index) => (
        <div key={index}>
          <label htmlFor={`player-name-${index}`}>Player {index + 1} Name:</label>
          <input
            type="text"
            id={`player-name-${index}`}
            value={player.name}
            onChange={(e) => handlePlayerChange(index, 'name', e.target.value)}
            className="ml-2"
          />
        </div>
      ))}
      <button onClick={startGame} className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md">
        Start Game
      </button>
    </div>
  );
};

export default GameSetup;