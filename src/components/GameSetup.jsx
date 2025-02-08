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
      sharinganLvl: 0,
      misiones:[]
    })));
  };

  const handlePlayerChange = (index, field, value) => {
    const newPlayers = [...players];
    newPlayers[index][field] = value;
    setPlayers(newPlayers);
  };
  const startGame = () => {
    if (players.length === 0 || players.length < 2) {
      alert('Debe haber al menos 2 jugadores para iniciar la partida.');
      return;
    }
    for (let player of players) {
      if (player.name.length < 4 || player.name.length > 10) {
        alert('El nombre del jugador debe tener entre 4 y 10 caracteres.');
        return;
      }
    }
    setGameStarted(true);
  };

  const handleNewGame = () => {
    setGameStarted(false);
    setPlayers([]);
    setNumPlayers(0);
  };

  if (gameStarted) {
    return (
        <StatsJugador jugadores={players} onNewGame={handleNewGame}/>
    );
  }

  return (
    <div className="game-setup flex flex-col items-center min-h-screen">
      <div className="bg-white px-20 py-8 rounded-lg shadow-lg border border-gray-300">
        <h2 className='text-3xl font-bold mb-6 text-center'>COMIENZA UNA NUEVA PARTIDA</h2>
        <h3 htmlFor="num-players" className='text-xl mb-4'>Numero de Jugadores</h3>
        <div className="mb-4">
          <input
            type="number"
            id="num-players"
            value={numPlayers}
            onChange={handleNumPlayersChange}
            min="2"
            className="w-20 p-2 border border-gray-300 rounded text-center"
          />
        </div>
        {players.map((player, index) => (
          <div key={index} className="mb-4">
            <label htmlFor={`player-name-${index}`} className="block text-lg font-medium text-gray-700 mb-2">
              #{index + 1} Ninja Name:
            </label>
            <input
              type="text"
              id={`player-name-${index}`}
              value={player.name}
              onChange={(e) => handlePlayerChange(index, 'name', e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
        ))}
        <button onClick={startGame} className="mt-4 bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition duration-300">
          Start Game
        </button>
      </div>
    </div>
  );
};

export default GameSetup;